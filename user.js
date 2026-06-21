const UserSystem = {
    STORAGE_KEY: 'shopnext_users',
    SESSION_KEY: 'shopnext_current_user',
    ADDRESS_KEY: 'shopnext_addresses',
    HISTORY_KEY: 'shopnext_recently_viewed',
    WISHLIST_KEY: 'shopnext_wishlist',
    AFFILIATE_KEY: 'shopnext_affiliate',
    ORDERS_KEY: 'shopnext_orders',

    syncToGitHub(message) {
        if (typeof GitHubSync === 'undefined' || !GitHubSync.isConfigured()) return;
        const allData = {
            products: JSON.parse(localStorage.getItem('shopnext_products') || '[]'),
            orders: JSON.parse(localStorage.getItem(this.ORDERS_KEY) || '[]'),
            reviews: JSON.parse(localStorage.getItem('shopnext_reviews') || '{}'),
            customers: JSON.parse(localStorage.getItem('shopnext_customers') || '[]'),
            users: JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]'),
            settings: JSON.parse(localStorage.getItem('shopnext_settings') || '{}'),
            header: JSON.parse(localStorage.getItem('shopnext_header_v1') || 'null'),
            footer: JSON.parse(localStorage.getItem('shopnext_footer_v2') || 'null'),
            promotions: JSON.parse(localStorage.getItem('shopnext_promotions') || 'null')
        };
        GitHubSync.deployData(allData, message || 'Update data').catch(e => console.warn('GitHub sync failed:', e));
    },

    init() {
        this.renderUserMenu();
        this.renderLoginModal();
        this.renderRegisterModal();
        this.renderUserDashboardModal();
        this.renderAddressModal();
        this.renderSizeGuideModal();
        this.setupEventListeners();
    },

    getUsers() {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    },

    saveUsers(users) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
        if (typeof FirebaseService !== 'undefined' && FirebaseService.init()) {
            const latest = users[users.length - 1];
            if (latest) {
                FirebaseService.saveUser(latest).catch(() => {});
            }
        }
        this.syncToGitHub('Update users');
    },

    getCurrentUser() {
        return JSON.parse(localStorage.getItem(this.SESSION_KEY) || 'null');
    },

    setCurrentUser(user) {
        localStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
    },

    logout() {
        localStorage.removeItem(this.SESSION_KEY);
        this.renderUserMenu();
        this.showNotification('Logged out successfully');
    },

    generatePromoCode() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = 'SHOP';
        for (let i = 0; i < 6; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return code;
    },

    register(data) {
        const users = this.getUsers();
        if (users.find(u => u.email === data.email)) {
            return { success: false, message: 'Email already registered' };
        }
        const user = {
            id: Date.now(),
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email,
            password: btoa(data.password),
            phone: data.phone || '',
            avatar: '',
            createdAt: new Date().toISOString(),
            role: 'customer',
            newsletter: data.newsletter || false,
            promoCode: this.generatePromoCode(),
            promoUsed: false
        };
        users.push(user);
        this.saveUsers(users);
        this.setCurrentUser({ ...user, password: undefined });
        return { success: true, user };
    },

    login(email, password) {
        const users = this.getUsers();
        const user = users.find(u => u.email === email && atob(u.password) === password);
        if (user) {
            const session = { ...user, password: undefined };
            this.setCurrentUser(session);
            return { success: true, user: session };
        }
        return { success: false, message: 'Invalid email or password' };
    },

    validatePromoCode(code) {
        if (!code) return { valid: false, message: 'Please enter a promo code' };
        const users = this.getUsers();
        const user = users.find(u => u.promoCode === code.toUpperCase());
        if (!user) return { valid: false, message: 'Invalid promo code' };
        if (user.promoUsed) return { valid: false, message: 'This promo code has already been used' };
        return { valid: true, discount: 0.1, message: '10% discount applied!' };
    },

    usePromoCode(code) {
        const users = this.getUsers();
        const idx = users.findIndex(u => u.promoCode === code.toUpperCase());
        if (idx !== -1) {
            users[idx].promoUsed = true;
            this.saveUsers(users);
            const current = this.getCurrentUser();
            if (current && current.promoCode === code.toUpperCase()) {
                current.promoUsed = true;
                this.setCurrentUser(current);
            }
        }
    },

    getUserPromoCode() {
        const user = this.getCurrentUser();
        if (user && user.promoCode) {
            return { code: user.promoCode, used: user.promoUsed || false };
        }
        return null;
    },

    updateProfile(data) {
        const users = this.getUsers();
        const current = this.getCurrentUser();
        if (!current) return false;
        const idx = users.findIndex(u => u.id === current.id);
        if (idx === -1) return false;
        Object.assign(users[idx], data);
        this.saveUsers(users);
        this.setCurrentUser({ ...users[idx], password: undefined });
        return true;
    },

    changePassword(oldPass, newPass) {
        const users = this.getUsers();
        const current = this.getCurrentUser();
        if (!current) return { success: false, message: 'Not logged in' };
        const idx = users.findIndex(u => u.id === current.id);
        if (idx === -1) return { success: false, message: 'User not found' };
        if (atob(users[idx].password) !== oldPass) {
            return { success: false, message: 'Current password is incorrect' };
        }
        users[idx].password = btoa(newPass);
        this.saveUsers(users);
        return { success: true };
    },

    requireLogin(callback) {
        if (this.getCurrentUser()) {
            callback();
        } else {
            this.showLoginModal();
        }
    },

    getAddresses() {
        const user = this.getCurrentUser();
        if (!user) return [];
        const all = JSON.parse(localStorage.getItem(this.ADDRESS_KEY) || '{}');
        return all[user.id] || [];
    },

    saveAddresses(addresses) {
        const user = this.getCurrentUser();
        if (!user) return;
        const all = JSON.parse(localStorage.getItem(this.ADDRESS_KEY) || '{}');
        all[user.id] = addresses;
        localStorage.setItem(this.ADDRESS_KEY, JSON.stringify(all));
    },

    addAddress(address) {
        const addresses = this.getAddresses();
        address.id = Date.now();
        if (address.isDefault) {
            addresses.forEach(a => a.isDefault = false);
        }
        addresses.push(address);
        this.saveAddresses(addresses);
        return address;
    },

    updateAddress(id, data) {
        const addresses = this.getAddresses();
        const idx = addresses.findIndex(a => a.id === id);
        if (idx === -1) return false;
        if (data.isDefault) {
            addresses.forEach(a => a.isDefault = false);
        }
        Object.assign(addresses[idx], data);
        this.saveAddresses(addresses);
        return true;
    },

    deleteAddress(id) {
        let addresses = this.getAddresses();
        addresses = addresses.filter(a => a.id !== id);
        this.saveAddresses(addresses);
    },

    getDefaultAddress() {
        return this.getAddresses().find(a => a.isDefault) || this.getAddresses()[0] || null;
    },

    addToRecentlyViewed(productId) {
        let history = JSON.parse(localStorage.getItem(this.HISTORY_KEY) || '[]');
        history = history.filter(id => id !== productId);
        history.unshift(productId);
        if (history.length > 20) history = history.slice(0, 20);
        localStorage.setItem(this.HISTORY_KEY, JSON.stringify(history));
    },

    getRecentlyViewed() {
        return JSON.parse(localStorage.getItem(this.HISTORY_KEY) || '[]');
    },

    toggleWishlist(productId) {
        const user = this.getCurrentUser();
        const key = user ? `shopnext_wishlist_${user.id}` : this.WISHLIST_KEY;
        let list = JSON.parse(localStorage.getItem(key) || '[]');
        if (list.includes(productId)) {
            list = list.filter(id => id !== productId);
        } else {
            list.push(productId);
        }
        localStorage.setItem(key, JSON.stringify(list));
        return list.includes(productId);
    },

    getWishlist() {
        const user = this.getCurrentUser();
        const key = user ? `shopnext_wishlist_${user.id}` : this.WISHLIST_KEY;
        return JSON.parse(localStorage.getItem(key) || '[]');
    },

    getOrders() {
        return JSON.parse(localStorage.getItem(this.ORDERS_KEY) || '[]');
    },

    saveOrder(order) {
        const orders = this.getOrders();
        orders.push(order);
        localStorage.setItem(this.ORDERS_KEY, JSON.stringify(orders));
        this.syncToGitHub('New user order');
    },

    generateAffiliateCode() {
        const user = this.getCurrentUser();
        if (!user) return null;
        let affiliates = JSON.parse(localStorage.getItem(this.AFFILIATE_KEY) || '[]');
        let existing = affiliates.find(a => a.userId === user.id);
        if (existing) return existing.code;
        const code = 'SN' + user.id.toString(36).toUpperCase() + Math.random().toString(36).substring(2, 6).toUpperCase();
        affiliates.push({
            userId: user.id,
            code: code,
            clicks: 0,
            conversions: 0,
            earnings: 0,
            createdAt: new Date().toISOString()
        });
        localStorage.setItem(this.AFFILIATE_KEY, JSON.stringify(affiliates));
        return code;
    },

    trackAffiliateClick(code) {
        let affiliates = JSON.parse(localStorage.getItem(this.AFFILIATE_KEY) || '[]');
        const idx = affiliates.findIndex(a => a.code === code);
        if (idx !== -1) {
            affiliates[idx].clicks++;
            localStorage.setItem(this.AFFILIATE_KEY, JSON.stringify(affiliates));
        }
    },

    trackAffiliateConversion(code, amount) {
        let affiliates = JSON.parse(localStorage.getItem(this.AFFILIATE_KEY) || '[]');
        const idx = affiliates.findIndex(a => a.code === code);
        if (idx !== -1) {
            affiliates[idx].conversions++;
            affiliates[idx].earnings += amount * 0.05;
            localStorage.setItem(this.AFFILIATE_KEY, JSON.stringify(affiliates));
        }
    },

    getAffiliateStats() {
        const user = this.getCurrentUser();
        if (!user) return null;
        const affiliates = JSON.parse(localStorage.getItem(this.AFFILIATE_KEY) || '[]');
        return affiliates.find(a => a.userId === user.id) || null;
    },

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed; top: 20px; right: 20px; z-index: 10001;
            background: ${type === 'success' ? 'linear-gradient(135deg, #27ae60, #2ecc71)' : 'linear-gradient(135deg, #e74c3c, #c0392b)'};
            color: #fff; padding: 15px 25px; border-radius: 12px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.15); font-weight: 500;
            animation: slideInRight 0.3s ease; display: flex; align-items: center; gap: 10px;
        `;
        notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
        document.body.appendChild(notification);
        setTimeout(() => { notification.style.animation = 'slideOutRight 0.3s ease'; setTimeout(() => notification.remove(), 300); }, 3000);
    },

    renderUserMenu() {
        const containers = document.querySelectorAll('.user-menu-container');
        const user = this.getCurrentUser();
        containers.forEach(container => {
            if (user) {
                container.innerHTML = `
                    <div class="user-dropdown">
                        <button class="user-btn" onclick="UserSystem.toggleUserDropdown(event)">
                            <div class="user-avatar">${user.firstName[0]}${user.lastName[0]}</div>
                            <span class="user-name">${user.firstName}</span>
                            <i class="fas fa-chevron-down"></i>
                        </button>
                        <div class="user-dropdown-menu" id="user-dropdown-menu">
                            <a href="user-dashboard.html" class="dropdown-item"><i class="fas fa-user"></i> My Account</a>
                            <a href="user-dashboard.html#orders" class="dropdown-item"><i class="fas fa-box"></i> My Orders</a>
                            <a href="user-dashboard.html#wishlist" class="dropdown-item"><i class="fas fa-heart"></i> Wishlist</a>
                            <a href="user-dashboard.html#addresses" class="dropdown-item"><i class="fas fa-map-marker-alt"></i> Addresses</a>
                            <a href="user-dashboard.html#affiliate" class="dropdown-item"><i class="fas fa-link"></i> Affiliate</a>
                            <div class="dropdown-divider"></div>
                            <button class="dropdown-item" onclick="UserSystem.logout()" style="color:#e74c3c;"><i class="fas fa-sign-out-alt"></i> Logout</button>
                        </div>
                    </div>
                `;
            } else {
                container.innerHTML = `
                    <a href="login.html" class="header-link"><i class="fas fa-sign-in-alt"></i> Login</a>
                    <a href="login.html?mode=register" class="header-link"><i class="fas fa-user-plus"></i> Register</a>
                `;
            }
        });
    },

    toggleUserDropdown(e) {
        e.stopPropagation();
        const menu = document.getElementById('user-dropdown-menu');
        if (menu) menu.classList.toggle('show');
    },

    renderLoginModal() {
        if (document.getElementById('login-modal')) return;
        const modal = document.createElement('div');
        modal.id = 'login-modal';
        modal.className = 'user-modal';
        modal.innerHTML = `
            <div class="user-modal-overlay" onclick="UserSystem.closeLoginModal()"></div>
            <div class="user-modal-content">
                <button class="user-modal-close" onclick="UserSystem.closeLoginModal()">&times;</button>
                <div class="user-modal-header">
                    <div class="user-modal-logo"><i class="fas fa-bolt"></i> ShopNext</div>
                    <h2>Welcome Back</h2>
                    <p>Sign in to your account</p>
                </div>
                <form id="login-form" onsubmit="UserSystem.handleLogin(event)">
                    <div class="form-group">
                        <label>Email Address</label>
                        <div class="input-icon"><i class="fas fa-envelope"></i><input type="email" id="login-email" required placeholder="your@email.com"></div>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <div class="input-icon"><i class="fas fa-lock"></i><input type="password" id="login-password" required placeholder="Enter password"></div>
                    </div>
                    <div class="form-row" style="justify-content:space-between;align-items:center;margin-bottom:20px;">
                        <label style="display:flex;align-items:center;gap:6px;cursor:pointer;font-size:13px;">
                            <input type="checkbox" id="remember-me"> Remember me
                        </label>
                        <a href="#" style="color:#667eea;font-size:13px;" onclick="UserSystem.showForgotPassword()">Forgot password?</a>
                    </div>
                    <button type="submit" class="btn-submit"><i class="fas fa-sign-in-alt"></i> Sign In</button>
                    <div class="form-footer">Don't have an account? <a href="#" onclick="UserSystem.switchToRegister()">Create one</a></div>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
    },

    renderRegisterModal() {
        if (document.getElementById('register-modal')) return;
        const modal = document.createElement('div');
        modal.id = 'register-modal';
        modal.className = 'user-modal';
        modal.innerHTML = `
            <div class="user-modal-overlay" onclick="UserSystem.closeRegisterModal()"></div>
            <div class="user-modal-content">
                <button class="user-modal-close" onclick="UserSystem.closeRegisterModal()">&times;</button>
                <div class="user-modal-header">
                    <div class="user-modal-logo"><i class="fas fa-bolt"></i> ShopNext</div>
                    <h2>Create Account</h2>
                    <p>Join us for exclusive deals</p>
                </div>
                <form id="register-form" onsubmit="UserSystem.handleRegister(event)">
                    <div class="form-row">
                        <div class="form-group">
                            <label>First Name</label>
                            <div class="input-icon"><i class="fas fa-user"></i><input type="text" id="reg-first" required placeholder="First name"></div>
                        </div>
                        <div class="form-group">
                            <label>Last Name</label>
                            <div class="input-icon"><i class="fas fa-user"></i><input type="text" id="reg-last" required placeholder="Last name"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Email Address</label>
                        <div class="input-icon"><i class="fas fa-envelope"></i><input type="email" id="reg-email" required placeholder="your@email.com"></div>
                    </div>
                    <div class="form-group">
                        <label>Phone (optional)</label>
                        <div class="input-icon"><i class="fas fa-phone"></i><input type="tel" id="reg-phone" placeholder="+1 (555) 000-0000"></div>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <div class="input-icon"><i class="fas fa-lock"></i><input type="password" id="reg-password" required minlength="6" placeholder="Min 6 characters"></div>
                    </div>
                    <div class="form-group">
                        <label>Confirm Password</label>
                        <div class="input-icon"><i class="fas fa-lock"></i><input type="password" id="reg-confirm" required placeholder="Confirm password"></div>
                    </div>
                    <label style="display:flex;align-items:flex-start;gap:8px;cursor:pointer;font-size:13px;color:#666;margin-bottom:20px;">
                        <input type="checkbox" id="reg-newsletter" style="margin-top:3px;" checked>
                        <span>Send me exclusive deals, new products and promotions</span>
                    </label>
                    <button type="submit" class="btn-submit"><i class="fas fa-user-plus"></i> Create Account</button>
                    <div class="form-footer">Already have an account? <a href="#" onclick="UserSystem.switchToLogin()">Sign in</a></div>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
    },

    renderUserDashboardModal() {},

    renderAddressModal() {
        if (document.getElementById('address-modal')) return;
        const modal = document.createElement('div');
        modal.id = 'address-modal';
        modal.className = 'user-modal';
        modal.innerHTML = `
            <div class="user-modal-overlay" onclick="UserSystem.closeAddressModal()"></div>
            <div class="user-modal-content" style="max-width:500px;">
                <button class="user-modal-close" onclick="UserSystem.closeAddressModal()">&times;</button>
                <div class="user-modal-header">
                    <h2 id="address-modal-title">Add Address</h2>
                </div>
                <form id="address-form" onsubmit="UserSystem.handleSaveAddress(event)">
                    <input type="hidden" id="addr-edit-id">
                    <div class="form-group">
                        <label>Full Name</label>
                        <input type="text" id="addr-name" required placeholder="John Doe" style="width:100%;padding:10px 12px;border:1px solid #ddd;border-radius:8px;">
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input type="tel" id="addr-phone" required placeholder="+1 (555) 000-0000" style="width:100%;padding:10px 12px;border:1px solid #ddd;border-radius:8px;">
                    </div>
                    <div class="form-group">
                        <label>Address Line 1</label>
                        <input type="text" id="addr-line1" required placeholder="123 Main Street" style="width:100%;padding:10px 12px;border:1px solid #ddd;border-radius:8px;">
                    </div>
                    <div class="form-group">
                        <label>Address Line 2 (optional)</label>
                        <input type="text" id="addr-line2" placeholder="Apt, Suite, Unit, etc." style="width:100%;padding:10px 12px;border:1px solid #ddd;border-radius:8px;">
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>City</label>
                            <input type="text" id="addr-city" required placeholder="Toronto" style="width:100%;padding:10px 12px;border:1px solid #ddd;border-radius:8px;">
                        </div>
                        <div class="form-group">
                            <label>Province</label>
                            <select id="addr-province" required style="width:100%;padding:10px 12px;border:1px solid #ddd;border-radius:8px;">
                                <option value="">Select Province</option>
                                <option>Ontario</option><option>Quebec</option><option>British Columbia</option>
                                <option>Alberta</option><option>Manitoba</option><option>Saskatchewan</option>
                                <option>Nova Scotia</option><option>New Brunswick</option><option>Newfoundland and Labrador</option>
                                <option>Prince Edward Island</option><option>Northwest Territories</option><option>Yukon</option><option>Nunavut</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group">
                            <label>Postal Code</label>
                            <input type="text" id="addr-postal" required placeholder="M5V 2T6" style="width:100%;padding:10px 12px;border:1px solid #ddd;border-radius:8px;">
                        </div>
                        <div class="form-group">
                            <label>Country</label>
                            <input type="text" id="addr-country" value="Canada" readonly style="width:100%;padding:10px 12px;border:1px solid #ddd;border-radius:8px;background:#f5f5f5;">
                        </div>
                    </div>
                    <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:14px;margin-bottom:20px;">
                        <input type="checkbox" id="addr-default"> Set as default address
                    </label>
                    <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-size:14px;margin-bottom:20px;">
                        <input type="checkbox" id="addr-delivery"> Allow delivery instructions
                    </label>
                    <div id="addr-delivery-instructions" style="display:none;margin-bottom:20px;">
                        <textarea id="addr-instructions" rows="2" placeholder="E.g., Leave at front door, ring doorbell..." style="width:100%;padding:10px 12px;border:1px solid #ddd;border-radius:8px;resize:vertical;"></textarea>
                    </div>
                    <button type="submit" class="btn-submit"><i class="fas fa-save"></i> Save Address</button>
                </form>
            </div>
        `;
        document.body.appendChild(modal);
    },

    renderSizeGuideModal() {
        if (document.getElementById('size-guide-modal')) return;
        const modal = document.createElement('div');
        modal.id = 'size-guide-modal';
        modal.className = 'user-modal';
        modal.innerHTML = `
            <div class="user-modal-overlay" onclick="UserSystem.closeSizeGuideModal()"></div>
            <div class="user-modal-content" style="max-width:700px;">
                <button class="user-modal-close" onclick="UserSystem.closeSizeGuideModal()">&times;</button>
                <div class="user-modal-header">
                    <h2>Size & Specification Guide</h2>
                </div>
                <div class="size-guide-tabs">
                    <button class="size-tab active" onclick="UserSystem.switchSizeTab('clothing')">Clothing</button>
                    <button class="size-tab" onclick="UserSystem.switchSizeTab('shoes')">Shoes</button>
                    <button class="size-tab" onclick="UserSystem.switchSizeTab('electronics')">Electronics</button>
                </div>
                <div id="size-guide-content"></div>
            </div>
        `;
        document.body.appendChild(modal);
        this.switchSizeTab('clothing');
    },

    switchSizeTab(tab) {
        document.querySelectorAll('.size-tab').forEach(t => {
            t.classList.remove('active');
            if (t.textContent.trim().toLowerCase() === tab) t.classList.add('active');
        });
        const content = document.getElementById('size-guide-content');
        if (!content) return;
        const sizes = {
            clothing: `
                <table class="size-table"><thead><tr><th>Size</th><th>Chest (cm)</th><th>Waist (cm)</th><th>Hips (cm)</th><th>US</th><th>EU</th><th>UK</th></tr></thead>
                <tbody>
                    <tr><td>XS</td><td>82-86</td><td>62-66</td><td>86-90</td><td>0-2</td><td>32-34</td><td>4-6</td></tr>
                    <tr><td>S</td><td>86-92</td><td>66-72</td><td>90-96</td><td>4-6</td><td>36-38</td><td>8-10</td></tr>
                    <tr><td>M</td><td>92-98</td><td>72-78</td><td>96-102</td><td>8-10</td><td>40-42</td><td>12-14</td></tr>
                    <tr><td>L</td><td>98-106</td><td>78-86</td><td>102-110</td><td>12-14</td><td>44-46</td><td>16-18</td></tr>
                    <tr><td>XL</td><td>106-114</td><td>86-94</td><td>110-118</td><td>16-18</td><td>48-50</td><td>20-22</td></tr>
                    <tr><td>XXL</td><td>114-122</td><td>94-104</td><td>118-126</td><td>20-22</td><td>52-54</td><td>24-26</td></tr>
                </tbody></table>`,
                shoes: `
                <table class="size-table"><thead><tr><th>US</th><th>EU</th><th>UK</th><th>CM</th><th>Gender</th></tr></thead>
                <tbody>
                    <tr><td>6</td><td>38.5</td><td>5.5</td><td>24</td><td>Men</td></tr>
                    <tr><td>7</td><td>40</td><td>6.5</td><td>25</td><td>Men</td></tr>
                    <tr><td>8</td><td>41</td><td>7.5</td><td>26</td><td>Men</td></tr>
                    <tr><td>9</td><td>42.5</td><td>8.5</td><td>27</td><td>Men</td></tr>
                    <tr><td>10</td><td>44</td><td>9.5</td><td>28</td><td>Men</td></tr>
                    <tr><td>5</td><td>36</td><td>3</td><td>22.5</td><td>Women</td></tr>
                    <tr><td>6</td><td>37.5</td><td>4</td><td>23.5</td><td>Women</td></tr>
                    <tr><td>7</td><td>38.5</td><td>5</td><td>24.5</td><td>Women</td></tr>
                    <tr><td>8</td><td>40</td><td>6</td><td>25.5</td><td>Women</td></tr>
                    <tr><td>9</td><td>41</td><td>7</td><td>26.5</td><td>Women</td></tr>
                </tbody></table>`,
                electronics: `
                <table class="size-table"><thead><tr><th>Device</th><th>Screen Size</th><th>Weight</th><th>Dimensions</th><th>Best For</th></tr></thead>
                <tbody>
                    <tr><td>Smartphone (Small)</td><td>5.5-6.1"</td><td>150-180g</td><td>~146x71mm</td><td>Compact users</td></tr>
                    <tr><td>Smartphone (Large)</td><td>6.5-6.9"</td><td>180-230g</td><td>~163x77mm</td><td>Media, gaming</td></tr>
                    <tr><td>Tablet</td><td>10-13"</td><td>400-700g</td><td>~250x175mm</td><td>Reading, work</td></tr>
                    <tr><td>Laptop (13")</td><td>13.3"</td><td>1.2-1.6kg</td><td>~304x212mm</td><td>Portable work</td></tr>
                    <tr><td>Laptop (15")</td><td>15.6"</td><td>1.6-2.2kg</td><td>~360x250mm</td><td>General use</td></tr>
                    <tr><td>Laptop (17")</td><td>17.3"</td><td>2.2-3kg</td><td>~400x280mm</td><td>Gaming, creative</td></tr>
                    <tr><td>TV (32")</td><td>32"</td><td>~5kg</td><td>~730x430mm</td><td>Small rooms</td></tr>
                    <tr><td>TV (55")</td><td>55"</td><td>~14kg</td><td>~1240x720mm</td><td>Living room</td></tr>
                    <tr><td>TV (65")</td><td>65"</td><td>~20kg</td><td>~1460x840mm</td><td>Home theater</td></tr>
                </tbody></table>`
        };
        content.innerHTML = `<div class="size-guide-body">${sizes[tab] || ''}</div>`;
    },

    handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;
        const result = this.login(email, password);
        if (result.success) {
            this.closeLoginModal();
            this.renderUserMenu();
            this.showNotification(`Welcome back, ${result.user.firstName}!`);
            if (typeof updateCheckoutUser === 'function') updateCheckoutUser();
        } else {
            this.showNotification(result.message, 'error');
        }
    },

    handleRegister(e) {
        e.preventDefault();
        const password = document.getElementById('reg-password').value;
        const confirm = document.getElementById('reg-confirm').value;
        if (password !== confirm) {
            this.showNotification('Passwords do not match', 'error');
            return;
        }
        const result = this.register({
            firstName: document.getElementById('reg-first').value,
            lastName: document.getElementById('reg-last').value,
            email: document.getElementById('reg-email').value,
            phone: document.getElementById('reg-phone').value,
            password: password,
            newsletter: document.getElementById('reg-newsletter').checked
        });
        if (result.success) {
            this.closeRegisterModal();
            this.renderUserMenu();
            this.showPromoCodeModal(result.user);
            if (typeof updateCheckoutUser === 'function') updateCheckoutUser();
            if (typeof EmailService !== 'undefined') {
                EmailService.sendWelcomeEmail(result.user).catch(e => console.log('Welcome email error:', e));
            }
            if (typeof EmailNotifications !== 'undefined') {
                EmailNotifications.sendWelcome(result.user.firstName);
            }
        } else {
            this.showNotification(result.message, 'error');
        }
    },

    showPromoCodeModal(user) {
        if (document.getElementById('promo-code-modal')) return;
        const modal = document.createElement('div');
        modal.id = 'promo-code-modal';
        modal.className = 'user-modal show';
        modal.innerHTML = `
            <div class="user-modal-overlay" onclick="document.getElementById('promo-code-modal').remove()"></div>
            <div class="user-modal-content" style="max-width:420px;text-align:center;">
                <button class="user-modal-close" onclick="document.getElementById('promo-code-modal').remove()">&times;</button>
                <div style="padding:20px;">
                    <div style="width:60px;height:60px;background:linear-gradient(135deg,#27ae60,#2ecc71);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;">
                        <i class="fas fa-gift" style="color:#fff;font-size:24px;"></i>
                    </div>
                    <h2 style="margin-bottom:8px;">Welcome, ${user.firstName}!</h2>
                    <p style="color:#666;margin-bottom:20px;">Here's your exclusive welcome gift:</p>
                    <div style="background:#f8f9ff;border:2px dashed #667eea;border-radius:12px;padding:20px;margin:20px 0;">
                        <div style="font-size:13px;color:#666;margin-bottom:8px;">Your Promo Code</div>
                        <div style="font-size:32px;font-weight:800;color:#667eea;letter-spacing:4px;">${user.promoCode}</div>
                        <div style="font-size:14px;color:#27ae60;font-weight:600;margin-top:8px;">10% OFF</div>
                    </div>
                    <p style="font-size:13px;color:#888;margin-bottom:20px;">Use this code at checkout to get 10% off your first order!</p>
                    <button onclick="navigator.clipboard.writeText('${user.promoCode}');this.innerHTML='<i class=\'fas fa-check\'></i> Copied!';this.style.background='#27ae60';" style="width:100%;padding:14px;background:#667eea;color:#fff;border:none;border-radius:10px;font-size:16px;font-weight:600;cursor:pointer;">
                        <i class="fas fa-copy"></i> Copy Code
                    </button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
    },

    handleSaveAddress(e) {
        e.preventDefault();
        const editId = document.getElementById('addr-edit-id').value;
        const addr = {
            fullName: document.getElementById('addr-name').value,
            phone: document.getElementById('addr-phone').value,
            line1: document.getElementById('addr-line1').value,
            line2: document.getElementById('addr-line2').value,
            city: document.getElementById('addr-city').value,
            province: document.getElementById('addr-province').value,
            postalCode: document.getElementById('addr-postal').value,
            country: document.getElementById('addr-country').value,
            isDefault: document.getElementById('addr-default').checked,
            deliveryInstructions: document.getElementById('addr-delivery').checked ? document.getElementById('addr-instructions').value : ''
        };
        if (editId) {
            this.updateAddress(parseInt(editId), addr);
            this.showNotification('Address updated!');
        } else {
            this.addAddress(addr);
            this.showNotification('Address added!');
        }
        this.closeAddressModal();
        if (typeof renderAddressesList === 'function') renderAddressesList();
    },

    openAddressModal(addr = null) {
        if (!this.requireLogin(() => this.openAddressModal(addr))) return;
        const modal = document.getElementById('address-modal');
        const title = document.getElementById('address-modal-title');
        if (addr) {
            title.textContent = 'Edit Address';
            document.getElementById('addr-edit-id').value = addr.id;
            document.getElementById('addr-name').value = addr.fullName || '';
            document.getElementById('addr-phone').value = addr.phone || '';
            document.getElementById('addr-line1').value = addr.line1 || '';
            document.getElementById('addr-line2').value = addr.line2 || '';
            document.getElementById('addr-city').value = addr.city || '';
            document.getElementById('addr-province').value = addr.province || '';
            document.getElementById('addr-postal').value = addr.postalCode || '';
            document.getElementById('addr-default').checked = addr.isDefault || false;
        } else {
            title.textContent = 'Add Address';
            document.getElementById('address-form').reset();
            document.getElementById('addr-edit-id').value = '';
        }
        modal.classList.add('show');
    },

    showLoginModal() {
        document.getElementById('login-modal').classList.add('show');
    },

    showRegisterModal() {
        document.getElementById('register-modal').classList.add('show');
    },

    showSizeGuideModal() {
        document.getElementById('size-guide-modal').classList.add('show');
    },

    closeLoginModal() {
        document.getElementById('login-modal').classList.remove('show');
    },

    closeRegisterModal() {
        document.getElementById('register-modal').classList.remove('show');
    },

    closeAddressModal() {
        document.getElementById('address-modal').classList.remove('show');
    },

    closeSizeGuideModal() {
        document.getElementById('size-guide-modal').classList.remove('show');
    },

    switchToRegister() {
        this.closeLoginModal();
        setTimeout(() => this.showRegisterModal(), 200);
    },

    switchToLogin() {
        this.closeRegisterModal();
        setTimeout(() => this.showLoginModal(), 200);
    },

    showForgotPassword() {
        const email = prompt('Enter your email to reset password:');
        if (email) this.showNotification('Password reset link sent to ' + email);
    },

    setupEventListeners() {
        document.addEventListener('click', (e) => {
            document.querySelectorAll('.user-dropdown-menu.show').forEach(menu => {
                if (!menu.parentElement.contains(e.target)) menu.classList.remove('show');
            });
        });
        const deliveryCheckbox = document.getElementById('addr-delivery');
        if (deliveryCheckbox) {
            deliveryCheckbox.addEventListener('change', function() {
                document.getElementById('addr-delivery-instructions').style.display = this.checked ? 'block' : 'none';
            });
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    UserSystem.init();
});
