const NO_IMG_A = "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 fill=%22%23e9ecef%22%3E%3Crect width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2255%22 font-size=%2214%22 fill=%22%23adb5bd%22 text-anchor=%22middle%22%3EImg%3C/text%3E%3C/svg%3E";
const defaultProducts = [
    {
        id: 1,
        name: "Premium Wireless Noise-Cancelling Headphones",
        category: "Electronics",
        price: 299.99,
        originalPrice: 399.99,
        images: [
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=600&h=600&fit=crop"
        ],
        rating: 4.8,
        reviews: 256,
        badge: "Best Seller",
        description: "Experience crystal-clear audio with active noise cancellation and 30-hour battery life.",
        status: "active",
        stock: 45,
        seller: "AudioTech Official",
        brand: "AudioTech",
        about: ["Active Noise Cancellation", "30-hour battery life", "Premium 40mm drivers"],
        specs: {"Brand": "AudioTech", "Connectivity": "Bluetooth 5.0", "Battery Life": "30 hours"}
    },
    {
        id: 2,
        name: "4K Ultra HD Smart TV 55 inch",
        category: "Electronics",
        price: 499.99,
        originalPrice: 699.99,
        images: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&h=600&fit=crop"
        ],
        rating: 4.6,
        reviews: 189,
        badge: "Sale",
        description: "Stunning 4K picture quality with smart TV features and voice control.",
        status: "active",
        stock: 12,
        seller: "VisionPlus Store",
        about: ["True 4K UHD resolution", "HDR10+ support", "Built-in voice assistant"],
        specs: {"Brand": "VisionPlus", "Resolution": "3840 x 2160", "Screen Size": "55 inches"}
    },
    {
        id: 3,
        name: "Building Blocks Creative Set 1000 Pieces",
        category: "Toys & Hobbies",
        price: 49.99,
        originalPrice: 69.99,
        images: [
            "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=600&fit=crop"
        ],
        rating: 4.9,
        reviews: 412,
        badge: "Top Rated",
        description: "Unleash creativity with 1000 colorful building blocks for endless fun.",
        status: "active",
        stock: 128,
        seller: "PlayTime Toys",
        about: ["1000 pieces in 20+ colors", "Compatible with all major brands", "BPA-free ABS plastic"],
        specs: {"Brand": "BlockMaster", "Piece Count": "1000", "Material": "ABS Plastic"}
    },
    {
        id: 4,
        name: "Remote Control Racing Car",
        category: "Toys & Hobbies",
        price: 79.99,
        originalPrice: 99.99,
        images: [
            "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581235707186-8d1e8f61e101?w=600&h=600&fit=crop"
        ],
        rating: 4.5,
        reviews: 156,
        badge: "New",
        description: "High-speed RC car with realistic controls and durable design.",
        status: "active",
        stock: 34,
        seller: "SpeedZone RC",
        about: ["Speeds up to 30 mph", "2.4GHz frequency", "All-terrain tires"],
        specs: {"Brand": "SpeedZone", "Scale": "1:16", "Speed": "30 mph"}
    },
    {
        id: 5,
        name: "Professional Yoga Mat with Carrying Strap",
        category: "Health & Fitness",
        price: 39.99,
        originalPrice: 59.99,
        images: [
            "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=600&h=600&fit=crop"
        ],
        rating: 4.7,
        reviews: 328,
        badge: "Best Value",
        description: "Non-slip, eco-friendly yoga mat perfect for all types of exercises.",
        status: "active",
        stock: 89,
        seller: "YogaLife Store",
        about: ["6mm thick cushioning", "Non-slip surface", "Eco-friendly TPE material"],
        specs: {"Brand": "YogaLife", "Material": "TPE", "Thickness": "6mm"}
    },
    {
        id: 6,
        name: "Adjustable Dumbbell Set 50 lbs",
        category: "Health & Fitness",
        price: 199.99,
        originalPrice: 299.99,
        images: [
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=600&fit=crop"
        ],
        rating: 4.8,
        reviews: 203,
        badge: "Popular",
        description: "Space-saving adjustable dumbbells for your home gym workouts.",
        status: "active",
        stock: 23,
        seller: "FitGear Pro",
        about: ["Adjustable 5-50 lbs", "Quick-change weight", "Replaces 15 sets"],
        specs: {"Brand": "FitGear", "Weight Range": "5-50 lbs", "Material": "Steel plates"}
    },
    {
        id: 7,
        name: "Indoor Herb Garden Kit with LED Grow Lights",
        category: "Home & Garden",
        price: 59.99,
        originalPrice: 79.99,
        images: [
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=600&fit=crop"
        ],
        rating: 4.6,
        reviews: 167,
        badge: "Trending",
        description: "Grow fresh herbs year-round with this complete indoor garden system.",
        status: "active",
        stock: 56,
        seller: "GreenThumb Co.",
        about: ["Complete kit included", "Full-spectrum LED lights", "Self-watering system"],
        specs: {"Brand": "GreenThumb", "Pod Capacity": "6 pods", "Light Type": "LED"}
    },
    {
        id: 8,
        name: "Smart Home Security Camera System",
        category: "Home & Garden",
        price: 149.99,
        originalPrice: 199.99,
        images: [
            "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=600&fit=crop"
        ],
        rating: 4.7,
        reviews: 289,
        badge: "Editor's Choice",
        description: "Keep your home safe with 24/7 monitoring and mobile alerts.",
        status: "active",
        stock: 67,
        seller: "SecureHome Tech",
        about: ["1080p Full HD video", "Motion detection alerts", "Two-way audio"],
        specs: {"Brand": "SecureHome", "Resolution": "1080p", "Connectivity": "Wi-Fi"}
    }
];

let products = [];
let orders = [];
let customers = [];
let importedProductData = null;

function saveReviewsToStorage(allReviews) {
    localStorage.setItem('shopnext_reviews', JSON.stringify(allReviews));
    saveProducts();
}

function getImages(product) {
    if (product.images && product.images.length > 0) return product.images;
    if (product.image) return [product.image];
    return ["data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 fill=%22%23e9ecef%22%3E%3Crect width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 font-size=%2220%22 fill=%22%23adb5bd%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ENo Image%3C/text%3E%3C/svg%3E"];
}

function getFirstImage(product) {
    return getImages(product)[0];
}

let _syncReady = false;

function loadProducts() {
    try {
        const saved = localStorage.getItem('shopnext_products');
        if (saved) {
            products = JSON.parse(saved);
        } else {
            products = JSON.parse(JSON.stringify(defaultProducts));
        }
    } catch (e) {
        products = JSON.parse(JSON.stringify(defaultProducts));
    }
}

function initAdminData() {
    loadProducts();
    renderProductsTable();
    updateDashboard();
    if (typeof GitHubSync !== 'undefined' && GitHubSync.isConfigured()) {
        GitHubSync.fetchData().then(data => {
            if (data && data.products) {
                products = data.products;
                localStorage.setItem('shopnext_products', JSON.stringify(products));
            }
            if (data && data.orders) { orders = data.orders; localStorage.setItem('shopnext_orders', JSON.stringify(orders)); }
            if (data && data.reviews) { localStorage.setItem('shopnext_reviews', JSON.stringify(data.reviews)); }
            if (data && data.customers) { customers = data.customers; localStorage.setItem('shopnext_customers', JSON.stringify(customers)); }
            _syncReady = true;
            renderProductsTable();
            updateDashboard();
        }).catch(e => { console.warn('GitHub sync failed:', e); _syncReady = true; });
    } else {
        _syncReady = true;
    }
}

function saveProducts() {
    localStorage.setItem('shopnext_products', JSON.stringify(products));
    if (typeof GitHubSync !== 'undefined' && GitHubSync.isConfigured()) {
        const allData = {
            products: products,
            orders: orders,
            reviews: JSON.parse(localStorage.getItem('shopnext_reviews') || '{}'),
            customers: customers,
            users: JSON.parse(localStorage.getItem('shopnext_users') || '[]'),
            settings: JSON.parse(localStorage.getItem('shopnext_settings') || '{}')
        };
        GitHubSync.deployData(allData, 'Update shop data from admin').then(url => {
            if (url) console.log('GitHub deploy OK');
        }).catch(e => console.warn('GitHub deploy failed:', e));
    }
}

function syncCustomersFromFirebase() {
    if (!FirebaseService.isReady()) return;
    FirebaseService.getCustomers().then(fbCustomers => {
        if (fbCustomers && fbCustomers.length > 0) {
            customers = fbCustomers;
            localStorage.setItem('shopnext_customers', JSON.stringify(customers));
            renderCustomers();
        } else if (customers.length > 0) {
            customers.forEach(c => FirebaseService.saveCustomer(c).catch(() => {}));
        }
    }).catch(e => console.warn('Firebase customers sync failed:', e));
}

function syncReviewsFromFirebase() {
    if (!FirebaseService.isReady()) return;
    FirebaseService.getReviews().then(fbReviews => {
        if (fbReviews && fbReviews.length > 0) {
            const allReviews = {};
            fbReviews.forEach(doc => {
                if (doc.reviews) allReviews[doc.productId] = doc.reviews;
            });
            localStorage.setItem('shopnext_reviews', JSON.stringify(allReviews));
            renderReviewsAdmin();
        }
    }).catch(e => console.warn('Firebase reviews sync failed:', e));
}

function loadOrders() {
    try {
        const saved = localStorage.getItem('shopnext_orders');
        orders = saved ? JSON.parse(saved) : [];
    } catch (e) {
        orders = [];
    }
}

function saveOrders() {
    localStorage.setItem('shopnext_orders', JSON.stringify(orders));
    saveProducts();
}

function loadCustomers() {
    try {
        const saved = localStorage.getItem('shopnext_customers');
        customers = saved ? JSON.parse(saved) : [];
    } catch (e) {
        customers = [];
    }
}

function saveCustomers() {
    localStorage.setItem('shopnext_customers', JSON.stringify(customers));
    saveProducts();
}

function addOrder(orderData) {
    const order = {
        id: 'SN' + Date.now().toString().slice(-8),
        ...orderData,
        status: 'pending',
        date: new Date().toISOString()
    };
    orders.unshift(order);
    saveOrders();
    const customer = orderData.shipping;
    if (customer) {
        const existingCustomer = customers.find(c => c.email === customer.email);
        if (existingCustomer) {
            existingCustomer.orders++;
            existingCustomer.totalSpent += orderData.total;
        } else {
            customers.push({
                id: Date.now(),
                name: customer.firstName + ' ' + customer.lastName,
                email: customer.email,
                phone: customer.phone,
                address: customer.address + ', ' + customer.city + ', ' + customer.province,
                orders: 1,
                totalSpent: orderData.total,
                joinDate: new Date().toISOString()
            });
        }
        saveCustomers();
    }
    return order;
}

function updateOrderStatus(orderId, status) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = status;
        saveOrders();
    }
}

function showSection(section) {
    const sections = ['dashboard-section', 'products-section', 'orders-section', 'reviews-section', 'import-section', 'customers-section', 'sync-section'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
    const target = document.getElementById(section + '-section');
    if (target) target.style.display = 'block';
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    const sectionMap = { dashboard: 0, products: 1, orders: 2, reviews: 3, import: 4, customers: 5, sync: 6 };
    if (sectionMap[section] !== undefined && navItems[sectionMap[section]]) {
        navItems[sectionMap[section]].classList.add('active');
    }
    if (section === 'products') renderProductsTable();
    else if (section === 'orders') renderOrdersTable();
    else if (section === 'customers') renderCustomers();
    else if (section === 'reviews') renderReviewsAdmin();
    else if (section === 'dashboard') updateDashboard();
}

function updateDashboard() {
    loadOrders();
    loadCustomers();
    loadProducts();
    loadPromotion();
    const totalRevenue = orders.reduce((sum, order) => sum + (order.total || 0), 0);
    const totalOrders = orders.length;
    const activeProducts = products.filter(p => p.status === 'active').length;
    const totalCustomers = customers.length;
    const statCards = document.querySelectorAll('.stat-card');
    if (statCards.length >= 4) {
        statCards[0].querySelector('.stat-info h3').textContent = '$' + totalRevenue.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        statCards[1].querySelector('.stat-info h3').textContent = totalOrders;
        statCards[2].querySelector('.stat-info h3').textContent = activeProducts;
        statCards[3].querySelector('.stat-info h3').textContent = totalCustomers;
    }
    renderRecentOrders();
    renderTopProducts();
    renderLowStockAlerts();
}

function renderRecentOrders() {
    const tbody = document.querySelector('.recent-orders tbody');
    if (!tbody) return;
    if (orders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" style="text-align: center; color: #888; padding: 20px;">暂无订单</td></tr>';
        return;
    }
    tbody.innerHTML = orders.slice(0, 5).map(order => {
        const date = new Date(order.date);
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const statusClass = order.status === 'delivered' ? 'delivered' : order.status === 'shipped' ? 'shipped' : order.status === 'processing' ? 'processing' : 'pending';
        return `<tr>
            <td>#${order.id}</td>
            <td>${order.shipping ? order.shipping.firstName + ' ' + order.shipping.lastName : 'N/A'}</td>
            <td>$${(order.total || 0).toFixed(2)}</td>
            <td><span class="status ${statusClass}">${order.status || 'pending'}</span></td>
            <td>${dateStr}</td>
        </tr>`;
    }).join('');
}

function renderTopProducts() {
    const container = document.querySelector('.product-list');
    if (!container) return;
    const activeProducts = products.filter(p => p.status === 'active').slice(0, 3);
    if (activeProducts.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-box"></i><p>暂无上架商品</p></div>';
        return;
    }
    container.innerHTML = activeProducts.map(product => {
        const img = getFirstImage(product);
        return `<div class="product-item">
            <img src="${img}" alt="${product.name}" onerror="this.onerror=null;this.src=NO_IMG_A">
            <div class="product-info">
                <h4>${product.name}</h4>
                <p>$${product.price.toFixed(2)}</p>
            </div>
            <span class="sales">${product.reviews || 0} sold</span>
        </div>`;
    }).join('');
}

function renderLowStockAlerts() {
    const container = document.getElementById('low-stock-alerts');
    if (!container) return;
    const lowStock = products.filter(p => p.stock !== undefined && p.stock <= 10 && p.status === 'active');
    if (lowStock.length === 0) {
        container.innerHTML = '<div style="text-align:center;padding:20px;color:#888;"><i class="fas fa-check-circle" style="color:#27ae60;margin-right:8px;"></i>All products are well-stocked</div>';
        return;
    }
    container.innerHTML = lowStock.map(p => {
        const urgency = p.stock === 0 ? '#ef4444' : p.stock <= 5 ? '#f59e0b' : '#f97316';
        const icon = p.stock === 0 ? 'times-circle' : 'exclamation-triangle';
        return `<div style="display:flex;align-items:center;gap:12px;padding:10px 14px;border-left:3px solid ${urgency};background:${urgency}08;border-radius:0 8px 8px 0;margin-bottom:8px;">
            <i class="fas fa-${icon}" style="color:${urgency};font-size:16px;"></i>
            <div style="flex:1;"><div style="font-size:13px;font-weight:600;color:#333;">${p.name}</div><div style="font-size:12px;color:#888;">${p.stock === 0 ? 'Out of stock' : `Only ${p.stock} left`}</div></div>
            <button onclick="editProduct(${p.id})" style="padding:4px 10px;border:1px solid ${urgency};color:${urgency};background:transparent;border-radius:6px;cursor:pointer;font-size:12px;">Restock</button>
        </div>`;
    }).join('');
}

function renderProductsTable() {
    const tbody = document.getElementById('products-table-body');
    if (!tbody) return;
    tbody.innerHTML = products.map(product => {
        const statusClass = product.status === 'active' ? 'delivered' : product.status === 'draft' ? 'pending' : 'processing';
        const statusText = product.status === 'active' ? '上架' : product.status === 'draft' ? '草稿' : '下架';
        const badgeHtml = product.badge ? `<span style="background: var(--accent-color); color: white; padding: 2px 8px; border-radius: 12px; font-size: 11px; margin-left: 8px;">${product.badge}</span>` : '';
        const img = getFirstImage(product);
        const stock = product.stock || 0;
        let stockDisplay = stock;
        let stockStyle = '';
        if (stock === 0) {
            stockDisplay = '<span style="color:#ef4444;font-weight:600;"><i class="fas fa-times-circle"></i> Out</span>';
        } else if (stock <= 5) {
            stockDisplay = `<span style="color:#f59e0b;font-weight:600;"><i class="fas fa-exclamation-triangle"></i> ${stock}</span>`;
        } else if (stock <= 10) {
            stockDisplay = `<span style="color:#f97316;">${stock}</span>`;
        }
        return `<tr>
            <td><img src="${img}" alt="${product.name}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;" onerror="this.onerror=null;this.src=NO_IMG_A"></td>
            <td>${product.name}${badgeHtml}</td>
            <td>${product.category}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>${stockDisplay}</td>
            <td><span class="status ${statusClass}">${statusText}</span></td>
            <td>
                <button class="btn-icon" onclick="toggleProductStatus(${product.id})" title="Toggle Status">
                    <i class="fas fa-${product.status === 'active' ? 'eye-slash' : 'eye'}"></i>
                </button>
                <button class="btn-icon" onclick="editProduct(${product.id})"><i class="fas fa-edit"></i></button>
                <button class="btn-icon" onclick="deleteProduct(${product.id})"><i class="fas fa-trash"></i></button>
            </td>
        </tr>`;
    }).join('');
}

function toggleProductStatus(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    product.status = product.status === 'active' ? 'inactive' : 'active';
    saveProducts();
    renderProductsTable();
    updateDashboard();
    showNotification('商品状态已更新！');
}

function openModal(productId) {
    document.getElementById('product-modal').style.display = 'flex';
    if (!productId) {
        document.getElementById('product-form').reset();
        document.getElementById('product-id').value = '';
        document.getElementById('options-field').style.display = 'none';
    }
}

function closeModal() {
    document.getElementById('product-modal').style.display = 'none';
}

function toggleOptionsField() {
    const hasOptions = document.getElementById('product-has-options').checked;
    document.getElementById('options-field').style.display = hasOptions ? 'block' : 'none';
}

function openBulkReviewModal() {
    document.getElementById('bulk-review-modal').style.display = 'flex';
    const select = document.getElementById('bulk-review-product');
    select.innerHTML = '<option value="all">All Active Products</option>';
    products.filter(p => p.status === 'active').forEach(p => {
        select.innerHTML += `<option value="${p.id}">${p.name}</option>`;
    });
}

function closeBulkReviewModal() {
    document.getElementById('bulk-review-modal').style.display = 'none';
}

const REVIEW_CATEGORIES = {
    phone: {
        keywords: ['smartphone','iphone','samsung','pixel','xiaomi','huawei','oneplus','手机','galaxy','红米','荣耀','华为','小米手机','oppo','vivo','realme','一加','魅族'],
        t5: ['运行非常流畅','性价比超高','超出预期','非常满意','值得推荐','完美体验'],
        t4: ['整体不错','性价比可以','基本满意','还行','中规中矩'],
        r5: [
            '用了一段时间，运行非常流畅，玩游戏也不卡，声音响亮，画质清晰，价格实惠，非常满意！',
            '这个价位能买到这样的手机，性价比超高，系统流畅，屏幕显示效果好，值得推荐。',
            '手机收到了，运行速度快，屏幕色彩好，拍照也不错，比我预期的好太多了。',
            '作为日常使用完全够用，运行流畅不发热，声音大，画面清晰，这个价格很划算。',
            '用了两周了，系统很稳定，没有卡顿，画质清晰，电池耐用，强烈推荐给朋友了。'
        ],
        r4: [
            '手机整体不错，运行流畅，就是偶尔发热，不过这个价位可以接受。',
            '性价比还行，日常使用没问题，声音响亮，画质清晰，但玩游戏偶尔会掉帧。',
            '基本满意，运行速度可以，屏幕显示效果不错，就是充电稍慢。'
        ]
    },
    camera: {
        keywords: ['camera','dslr','mirrorless','摄影','数码相机','单反','微单','镜头','运动相机','gopro','insta360','拍立得','instant camera'],
        t5: ['拍摄画质超清','色彩还原真实','性价比之王','专业级画质','完美相机','强烈推荐'],
        t4: ['画质不错','性价比可以','基本满意','成像清晰','值得入手'],
        r5: [
            '拍摄画质非常清晰，色彩还原很真实，贴近现实原色，性价比真的很高，推荐！',
            '相机收到了，画质清晰细腻，色彩饱满自然，操作简单易上手，非常满意。',
            '用了一个月了，拍照效果非常好，色彩还原度高，对焦快，性价比超高。',
            '作为入门相机非常合适，画质清晰，色彩自然，价格实惠，值得购买。',
            '成像效果超出预期，色彩还原真实，细节丰富，这个价位买到真的很值。'
        ],
        r4: [
            '画质不错，色彩还原比较好，但高感噪点稍多，总体性价比可以。',
            '基本满意，对焦速度可以，画质清晰，但菜单操作稍复杂。',
            '成像效果还行，色彩还原度不错，但电池续航一般。'
        ]
    },
    audio: {
        keywords: ['headphone','earbuds','earphone','speaker','soundbar','音箱','音响','耳麦','蓝牙音箱','蓝牙耳机','降噪耳机','头戴耳机','hifi','功放','amplifier'],
        t5: ['音质清晰无杂音','性价比超高','音效震撼','佩戴舒适','续航给力','强烈推荐'],
        t4: ['音质不错','性价比可以','基本满意','还行','值得购买'],
        r5: [
            '音质非常清晰，没有杂音，低音浑厚，高音通透，价格实惠，性价比超高！',
            '耳机收到了，声音清晰，无杂音，佩戴舒适不夹头，续航时间长，非常满意。',
            '音质超出预期，声音清晰饱满，没有杂音，这个价位能买到这样的品质，太值了。',
            '用了两周，音质一直很稳定，无杂音，连接稳定，性价比很高，推荐购买。',
            '音箱效果很棒，声音清晰响亮，低音有力，价格实惠，放在客厅效果很好。'
        ],
        r4: [
            '音质不错，声音清晰，基本没有杂音，但低音可以再强一些。',
            '整体还行，音质清晰，佩戴舒适，但降噪效果一般。',
            '性价比可以，声音清晰，无明显杂音，但续航比标称的短一些。'
        ]
    },
    peripherals: {
        keywords: ['mouse','keyboard','键盘','鼠标','mechanical keyboard','gaming mouse','外设','机械键盘','游戏鼠标','触控板','trackpad','手柄','gamepad','joystick'],
        t5: ['手感超好','响应速度极快','打字舒适','性价比高','做工精良','强烈推荐'],
        t4: ['手感不错','响应可以','基本满意','性价比还行','值得购买'],
        r5: [
            '手感非常好，按键回弹舒适，响应速度极快，打字效率提升很多，非常满意！',
            '键盘收到了，手感良好，按键灵敏，响应速度快，打字很舒服，性价比高。',
            '鼠标手感舒适，定位精准，响应速度快，长时间使用手不累，值得推荐。',
            '用了半个月，手感一直很好，响应速度快，没有延迟，这个价格很划算。',
            '机械键盘手感超好，按键反馈清晰，响应速度快，打字和游戏都很舒服。'
        ],
        r4: [
            '手感不错，响应速度可以，但按键声音稍大。',
            '整体还行，手感良好，响应速度满意，但做工细节可以再精致一些。',
            '基本满意，手感舒适，响应速度快，就是键帽材质一般。'
        ]
    },
    display: {
        keywords: ['tv','monitor','television','电视','显示器','显示屏','4k monitor','8k monitor','曲面屏','ultrawide','投影仪','projector'],
        t5: ['画质超清晰','色彩饱满丰富','HDR效果震撼','性价比高','色彩还原真实','强烈推荐'],
        t4: ['画质不错','色彩可以','基本满意','性价比还行','值得购买'],
        r5: [
            '画质非常清晰，HDR效果很好，色彩饱满丰富，看电影非常震撼，性价比超高！',
            '显示器收到了，画质清晰细腻，色彩还原准确，HDR效果明显，非常满意。',
            '4K画质真的清晰，色彩饱满丰富，HDR开启后效果更佳，这个价位太值了。',
            '用了一个月，画质一直很稳定，色彩鲜艳自然，HDR表现出色，强烈推荐。',
            '电视画质清晰，色彩饱满，HDR效果好，看比赛和电影都很舒服，值得购买。'
        ],
        r4: [
            '画质不错，色彩饱满，但HDR效果一般，总体性价比可以。',
            '基本满意，画质清晰，色彩还原还行，但可视角度一般。',
            '画质清晰，色彩丰富，但亮度稍低，阳光下看不太清楚。'
        ]
    },
    phone_accessories: {
        keywords: ['case','charger','cable','protector','power bank','powerbank','充电器','数据线','手机壳','保护膜','充电宝','支架','手机支架','车载充电','wireless charger','无线充电','hub','扩展坞','读卡器','card reader','screen protector','钢化膜','手机膜','充电线','usb','type-c','lightning','magback','magsafe'],
        t5: ['价格实惠','做工精良','性价比高','质感很好','完美贴合','值得推荐'],
        t4: ['做工不错','性价比可以','基本满意','还行','值得购买'],
        r5: [
            '价格实惠，做工精良，质感很好，和手机完美贴合，非常满意！',
            '配件收到了，做工精细，手感好，价格实惠，性价比很高，推荐购买。',
            '质量超出预期，做工精细，用料扎实，价格实惠，值得推荐。',
            '用了一段时间，做工良好，没有异味，耐用度不错，性价比高。',
            '完美适配手机，做工精细，手感舒适，价格实惠，非常满意。'
        ],
        r4: [
            '做工不错，价格实惠，但包装稍简陋。',
            '基本满意，做工可以，价格合理，但细节处理一般。',
            '性价比还行，做工良好，价格实惠，就是发货稍慢。'
        ]
    },
    weights: {
        keywords: ['dumbbell','barbell','kettlebell','weight plate','哑铃','杠铃','壶铃','杠铃片','配重','重量训练','strength training'],
        t5: ['握感舒适','重量精准','涂层牢固','做工精良','性价比高','强烈推荐'],
        t4: ['握感还行','重量基本准','做工不错','性价比可以','值得购买'],
        r5: [
            '握感非常舒适，重量精准，涂层牢固不脱落，做工精良，非常满意！',
            '哑铃收到了，握感舒适防滑，重量准确，涂层光滑耐用，性价比很高。',
            '做工精良，握感舒适，重量精准，涂层没有异味，这个价位很值。',
            '用了一个月，握感一直很好，重量准确，涂层没有掉漆，强烈推荐。',
            '壶铃质量很好，握感舒适，重量精准，涂层牢固，适合家庭健身。'
        ],
        r4: [
            '握感还行，重量基本准确，但涂层有轻微瑕疵。',
            '整体不错，握感舒适，重量精准，但包装一般。',
            '基本满意，握感可以，重量准确，但个别地方涂层稍薄。'
        ]
    },
    yoga: {
        keywords: ['yoga','yoga mat','stretch','foam roller','瑜伽','拉伸','泡沫轴','瑜伽垫','拉伸带','瑜伽砖','yoga block','yoga strap'],
        t5: ['缓冲效果好','防滑性能强','厚度适中','材质环保','性价比高','强烈推荐'],
        t4: ['缓冲还行','防滑可以','厚度合适','基本满意','值得购买'],
        r5: [
            '缓冲效果非常好，防滑性能强，厚度适中，做瑜伽很舒服，非常满意！',
            '瑜伽垫收到了，缓冲好，防滑效果强，厚度合适，材质没有异味，推荐。',
            '防滑性能很棒，即使出汗也不滑，缓冲效果好，厚度适中，性价比高。',
            '用了一个月，缓冲效果一直很好，防滑性能强，厚度合适，值得购买。',
            '垫子质量很好，缓冲舒适，防滑效果强，厚度适中，做拉伸很合适。'
        ],
        r4: [
            '缓冲还行，防滑可以，但边缘处理稍粗糙。',
            '基本满意，厚度合适，防滑效果一般，但价格实惠。',
            '缓冲效果不错，防滑还行，但刚买来有轻微气味。'
        ]
    },
    bands: {
        keywords: ['resistance band','pull up band','push up band','弹力带','拉力带','阻力带','拉伸带','健身带','训练带'],
        t5: ['阻力等级合适','弹性好','手柄舒适','耐用度高','性价比高','强烈推荐'],
        t4: ['阻力还行','弹性可以','基本满意','性价比不错','值得购买'],
        r5: [
            '阻力等级合适，弹性很好，手柄舒适不勒手，耐用度高，非常满意！',
            '弹力带收到了，阻力等级准确，弹性好，手柄舒适，性价比很高。',
            '弹性非常好，阻力等级合适，手柄握感舒适，用了两个月没有变形。',
            '阻力等级选择多，弹性好，手柄舒适，这个价位买到真的很值。',
            '用了半个月，弹性一直很好，阻力合适，手柄舒适，强烈推荐。'
        ],
        r4: [
            '阻力还行，弹性可以，但手柄材质稍硬。',
            '基本满意，阻力等级合适，弹性不错，但包装一般。',
            '弹性可以，阻力合适，但手柄握感一般。'
        ]
    },
    cardio: {
        keywords: ['treadmill','spin bike','exercise bike','elliptical','rowing machine','跑步机','动感单车','椭圆机','划船机','健身车','踏步机','stepper'],
        t5: ['运行安静','程序丰富','显示屏清晰','做工扎实','性价比高','强烈推荐'],
        t4: ['还算安静','程序够用','基本满意','性价比可以','值得购买'],
        r5: [
            '运行非常安静，程序丰富实用，显示屏清晰易读，做工扎实，非常满意！',
            '跑步机收到了，运行安静，程序丰富，显示屏清晰，性价比很高。',
            '静音效果很好，晚上运动也不会吵到家人，程序丰富，显示屏清晰。',
            '用了一个月，运行一直很安静，程序丰富，显示屏清晰，值得购买。',
            '动感单车质量很好，运行安静，程序丰富，显示屏清晰，强烈推荐。'
        ],
        r4: [
            '还算安静，程序够用，但显示屏亮度稍低。',
            '基本满意，运行声音可以，程序丰富，但安装稍复杂。',
            '静音效果还行，程序不错，但座椅舒适度一般。'
        ]
    },
    security: {
        keywords: ['security camera','cctv','surveillance','alarm','sensor','监控','摄像头','安防','报警器','门铃','video doorbell','smart doorbell','dash cam','行车记录仪'],
        t5: ['画质清晰','报警灵敏','夜视效果好','安装简单','性价比高','强烈推荐'],
        t4: ['画质不错','报警可以','基本满意','性价比还行','值得购买'],
        r5: [
            '画质非常清晰，报警灵敏，夜视效果好，安装简单，性价比很高！',
            '摄像头收到了，画质清晰，报警灵敏及时，夜视效果出色，非常满意。',
            '监控画质清晰，报警功能灵敏，夜视效果好，这个价位太值了。',
            '用了一个月，画质一直清晰，报警灵敏，夜视效果好，强烈推荐。',
            '安防摄像头效果很好，画质清晰，报警灵敏，安装简单，值得购买。'
        ],
        r4: [
            '画质不错，报警灵敏，但夜视距离稍短。',
            '基本满意，画质清晰，报警可以，但APP操作稍复杂。',
            '画质还行，报警灵敏，但偶尔有误报。'
        ]
    },
    kitchen: {
        keywords: ['kitchen','blender','coffee','toaster','oven','air fryer','microwave','kettle','pot','pan','厨房','料理机','咖啡机','烤箱','空气炸锅','电饭煲','电热水壶','锅','平底锅','搅拌机','榨汁机'],
        t5: ['使用体验好','做工精良','操作简单','清洁方便','性价比高','强烈推荐'],
        t4: ['使用还行','做工不错','基本满意','性价比可以','值得购买'],
        r5: [
            '使用体验非常好，做工精良，操作简单，清洁方便，性价比很高！',
            '厨房用品收到了，使用体验好，做工精细，操作简单，非常满意。',
            '用了半个月，使用体验一直很好，做工精良，清洁方便，值得推荐。',
            '操作简单，使用体验好，做工精细，清洁方便，这个价位很划算。',
            '使用体验超出预期，做工精良，操作简单，清洁方便，强烈推荐。'
        ],
        r4: [
            '使用还行，做工不错，但清洁稍麻烦。',
            '基本满意，使用体验可以，做工良好，但噪音稍大。',
            '使用体验还行，做工不错，但操作稍复杂。'
        ]
    },
    travel: {
        keywords: ['travel','luggage','suitcase','trolley','旅行','行李箱','拉杆箱','出差','travel adapter','旅行转换器','packing cube','收纳袋','行李秤','luggage scale','passport holder','护照包'],
        t5: ['外观时尚','价格实惠','便携性好','做工精良','容量大','强烈推荐'],
        t4: ['外观不错','价格合理','基本满意','做工可以','值得购买'],
        r5: [
            '外观时尚好看，价格实惠，便携性好，做工精良，出差旅行必备！',
            '旅行用品收到了，外观好看，价格实惠，便携性好，非常满意。',
            '外观时尚，价格实惠，便携性好，做工精细，容量也够大。',
            '用了几次，外观依然好看，便携性好，价格实惠，值得推荐。',
            '行李箱外观时尚，价格实惠，便携性好，做工精良，容量大，强烈推荐。'
        ],
        r4: [
            '外观不错，价格合理，但拉链稍紧。',
            '基本满意，外观可以，便携性好，但做工细节一般。',
            '外观还行，价格实惠，便携性可以，但轮子顺滑度一般。'
        ]
    },
    car: {
        keywords: ['car','vehicle','auto','车载','汽车','car charger','车载充电','car mount','车载支架','car vacuum','车载吸尘器','tire inflator','充气泵','jump starter','应急启动电源','dashcam','行车记录仪','car cover','车衣','seat cover','座垫','steering wheel cover','方向盘套'],
        t5: ['价格实惠','使用体验好','做工精良','安装简单','性价比高','强烈推荐'],
        t4: ['价格合理','使用还行','基本满意','做工可以','值得购买'],
        r5: [
            '价格实惠，使用体验好，做工精良，安装简单，性价比很高！',
            '车载用品收到了，价格实惠，使用体验好，做工精细，非常满意。',
            '价格实惠，使用体验好，做工精良，安装方便，值得推荐。',
            '用了半个月，价格实惠，使用体验一直很好，做工精良，强烈推荐。',
            '车品质量很好，价格实惠，使用体验好，做工精良，性价比高。'
        ],
        r4: [
            '价格合理，使用还行，但做工细节一般。',
            '基本满意，价格实惠，使用体验可以，但安装稍复杂。',
            '价格实惠，使用还行，做工不错，但兼容性一般。'
        ]
    },
    camping: {
        keywords: ['camping','tent','sleeping bag','hiking','outdoor','camping stove','headlamp','flashlight','露营','帐篷','睡袋','户外','野营','徒步','头灯','手电筒','登山杖','trekking pole','camping chair','折叠椅','cool box','保温箱'],
        t5: ['价格实惠','便携性好','做工精良','实用性强','性价比高','强烈推荐'],
        t4: ['价格合理','便携还行','基本满意','做工可以','值得购买'],
        r5: [
            '价格实惠，便携性好，做工精良，实用性强，露营必备！',
            '露营用品收到了，价格实惠，便携性好，做工精细，非常满意。',
            '价格实惠，便携性好，做工精良，实用性强，性价比很高。',
            '用了几次，价格实惠，便携性好，做工精良，值得推荐。',
            '户外装备质量很好，价格实惠，便携性好，做工精良，强烈推荐。'
        ],
        r4: [
            '价格合理，便携还行，但做工细节一般。',
            '基本满意，价格实惠，便携性可以，但耐用度一般。',
            '价格实惠，便携还行，做工不错，但重量稍重。'
        ]
    },
    general: {
        keywords: [],
        t5: ['质量很好','性价比高','做工精良','超出预期','非常满意','强烈推荐'],
        t4: ['质量不错','性价比可以','基本满意','还行','值得购买'],
        r5: [
            '质量非常好，做工精良，性价比高，超出预期，非常满意！',
            '商品收到了，质量很好，做工精细，性价比高，值得推荐。',
            '质量超出预期，做工精良，性价比高，用了一段时间很满意。',
            '做工精良，质量很好，性价比高，强烈推荐给朋友了。',
            '非常满意，质量很好，做工精细，性价比高，会回购。'
        ],
        r4: [
            '质量不错，性价比可以，但包装稍简陋。',
            '基本满意，质量还行，做工可以，但细节处理一般。',
            '性价比还行，质量不错，做工良好，但发货稍慢。'
        ]
    }
};

function detectReviewCategory(product) {
    const raw = ((product.name || '') + ' ' + (product.description || '') + ' ' + (product.category || '')).toLowerCase();
    
    const specificRules = [
        { pattern: /power\s*bank|充电宝|移动电源|portable\s*charg|应急电源/, cat: 'phone_accessories' },
        { pattern: /headphone|earbuds|earphone|headset|head\s*phone|耳机|耳麦|入耳|头戴/, cat: 'audio' },
        { pattern: /speaker|soundbar|音箱|音响|蓝牙音箱/, cat: 'audio' },
        { pattern: /smart\s*phone|iphone|samsung|galaxy|pixel|手机(?!壳|套|膜|支架|充电|配件)/, cat: 'phone' },
        { pattern: /dslr|mirrorless|数码相机|单反|微单|运动相机|gopro/, cat: 'camera' },
        { pattern: /monitor|显示器|显示屏|曲面屏|ultrawide|投影仪/, cat: 'display' },
        { pattern: /\btv\b|电视/, cat: 'display' },
        { pattern: /keyboard|键盘|机械键盘/, cat: 'peripherals' },
        { pattern: /mouse|鼠标|游戏鼠标/, cat: 'peripherals' },
        { pattern: /dumbbell|哑铃/, cat: 'weights' },
        { pattern: /barbell|杠铃/, cat: 'weights' },
        { pattern: /kettlebell|壶铃/, cat: 'weights' },
        { pattern: /yoga|瑜伽垫|瑜伽砖|瑜伽带/, cat: 'yoga' },
        { pattern: /foam\s*roller|泡沫轴/, cat: 'yoga' },
        { pattern: /resistance\s*band|弹力带|拉力带|阻力带/, cat: 'bands' },
        { pattern: /treadmill|跑步机/, cat: 'cardio' },
        {pattern: /spin\s*bike|exercise\s*bike|动感单车|健身车/, cat: 'cardio' },
        { pattern: /elliptical|椭圆机/, cat: 'cardio' },
        { pattern: /rowing\s*machine|划船机/, cat: 'cardio' },
        { pattern: /security\s*camera|cctv|监控|安防摄像头|video\s*doorbell/, cat: 'security' },
        { pattern: /dash\s*cam|行车记录仪/, cat: 'security' },
        { pattern: /air\s*fryer|空气炸锅/, cat: 'kitchen' },
        { pattern: /coffee|咖啡机|coffee\s*maker/, cat: 'kitchen' },
        { pattern: /blender|料理机|搅拌机|榨汁机/, cat: 'kitchen' },
        { pattern: /toaster|烤箱|oven|微波炉/, cat: 'kitchen' },
        { pattern: /luggage|suitcase|trolley|行李箱|拉杆箱/, cat: 'travel' },
        { pattern: /travel\s*adapter|旅行转换器|passport\s*holder|护照包/, cat: 'travel' },
        { pattern: /camping|tent|帐篷|露营|睡袋|sleeping\s*bag/, cat: 'camping' },
        { pattern: /headlamp|flashlight|头灯|手电筒|登山杖/, cat: 'camping' },
        { pattern: /car\s*charger|车载充电|车载支架|car\s*mount|车载吸尘器/, cat: 'car' },
        { pattern: /tire\s*inflator|充气泵|应急启动|jump\s*starter/, cat: 'car' },
        { pattern: /charger|充电器|数据线|cable|usb|type-c|lightning/, cat: 'phone_accessories' },
        { pattern: /case|手机壳|保护套|钢化膜|screen\s*protector|手机膜/, cat: 'phone_accessories' },
        { pattern: /wireless\s*charger|无线充电|magsafe|magback/, cat: 'phone_accessories' },
        { pattern: /hub|扩展坞|读卡器|card\s*reader/, cat: 'phone_accessories' },
        { pattern: /gaming\s*手柄|gamepad|joystick|手柄/, cat: 'peripherals' },
    ];
    
    for (const rule of specificRules) {
        if (rule.pattern.test(raw)) return rule.cat;
    }
    
    return 'general';
}

function buildReviewTemplates(product) {
    const cat = detectReviewCategory(product);
    return REVIEW_CATEGORIES[cat];
}

function executeBulkReview() {
    const target = document.getElementById('bulk-review-product').value;
    const count = parseInt(document.getElementById('bulk-review-count').value) || 10;
    const replaceMode = document.getElementById('bulk-review-replace').checked;
    const names = ['John D.','Sarah M.','Mike R.','Emily K.','David L.','Lisa T.','James W.','Anna P.','Robert C.','Jennifer H.','Chris B.','Amanda S.','Daniel F.','Michelle G.','Kevin O.','Sophie Z.','Ryan W.','Olivia P.','Ethan J.','Mia C.'];
    const targetProducts = target === 'all' ? products.filter(p => p.status === 'active') : products.filter(p => p.id === parseInt(target));
    let totalGenerated = 0;
    let allReviews = JSON.parse(localStorage.getItem('shopnext_reviews') || '{}');
    targetProducts.forEach(product => {
        const pid = String(product.id);
        if (replaceMode) allReviews[pid] = [];
        if (!allReviews[pid]) allReviews[pid] = [];
        const templates = buildReviewTemplates(product);
        for (let i = 0; i < count; i++) {
            const is5 = Math.random() > 0.35;
            const rating = is5 ? 5 : 4;
            const titlePool = is5 ? templates.t5 : templates.t4;
            const textPool = is5 ? templates.r5 : templates.r4;
            const daysAgo = Math.floor(Math.random() * 90);
            const date = new Date();
            date.setDate(date.getDate() - daysAgo);
            allReviews[pid].push({
                rating,
                title: titlePool[Math.floor(Math.random() * titlePool.length)],
                text: textPool[Math.floor(Math.random() * textPool.length)],
                author: names[Math.floor(Math.random() * names.length)],
                date: date.toISOString(),
                helpful: Math.floor(Math.random() * 20),
                id: Date.now() + i
            });
            totalGenerated++;
        }
    });
    saveReviewsToStorage(allReviews);
    closeBulkReviewModal();
    renderReviewsAdmin();
    showNotification(`已为 ${targetProducts.length} 个商品生成 ${totalGenerated} 条评论！${replaceMode ? '（已替换旧评论）' : ''}`);
}

function parseProductUrl() {
    startImport();
}

function parseHtmlSource() {
    const html = document.getElementById('import-html-paste').value.trim();
    const url = document.getElementById('import-url').value.trim();
    if (!html) {
        alert('Please paste the product page content first');
        return;
    }
    if (html.length < 50) {
        alert('绮樿创鐨勫唴瀹瑰お鐭紝璇峰鍒跺畬鏁寸殑鍟嗗搧椤甸潰鍐呭');
        return;
    }
    document.getElementById('import-loading').style.display = 'block';
    document.getElementById('import-error').style.display = 'none';
    document.getElementById('import-preview').style.display = 'none';
    setTimeout(() => {
        document.getElementById('import-loading').style.display = 'none';
        parseProductHtml(html, url || 'https://manual-import');
    }, 300);
}

function openUrlSource() {
    const url = document.getElementById('import-url').value.trim();
    if (!url) {
        alert('璇峰厛杈撳叆鍟嗗搧URL');
        return;
    }
    window.open('view-source:' + url, '_blank');
}

function saveProduct() {
    const id = document.getElementById('product-id').value;
    const name = document.getElementById('product-name').value;
    const category = document.getElementById('product-category').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const originalPrice = parseFloat(document.getElementById('product-original-price').value);
    const imageUrl = document.getElementById('product-image').value;
    const description = document.getElementById('product-description').value;
    const stock = parseInt(document.getElementById('product-stock').value) || 0;
    const status = document.getElementById('product-status').value;
    const badge = document.getElementById('product-badge').value;
    const rating = parseFloat(document.getElementById('product-rating').value) || 0;
    const hasOptions = document.getElementById('product-has-options').checked;
    const optionsStr = document.getElementById('product-options').value;
    const options = hasOptions && optionsStr ? optionsStr.split(',').map(o => o.trim()).filter(o => o) : [];

    if (!name || !price) {
        alert('Please fill in all required fields');
        return;
    }

    const images = imageUrl ? imageUrl.split('\n').map(u => u.trim()).filter(u => u) : [];

    if (id) {
        const index = products.findIndex(p => p.id === parseInt(id));
        if (index !== -1) {
            products[index] = {
                ...products[index],
                name, category, price, originalPrice: originalPrice || price,
                images: images.length > 0 ? images : products[index].images,
                description, stock, status, badge, rating, options
            };
        }
    } else {
        const newProduct = {
            id: Date.now(),
            name, category, price, originalPrice: originalPrice || price,
            images: images.length > 0 ? images : ["data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 fill=%22%23e9ecef%22%3E%3Crect width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 font-size=%2220%22 fill=%22%23adb5bd%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ENo Image%3C/text%3E%3C/svg%3E"],
            description, stock, status, badge, rating,
            reviews: 0, options, about: [], specs: {},
            seller: '', brand: ''
        };
        products.push(newProduct);
    }

    saveProducts();
    renderProductsTable();
    updateDashboard();
    closeModal();
    showNotification(id ? '商品已更新！' : '商品已添加！');
}

function editProduct(id) {
    const product = products.find(p => p.id === id);
    if (!product) return;
    document.getElementById('product-id').value = product.id;
    document.getElementById('product-name').value = product.name;
    document.getElementById('product-category').value = product.category;
    document.getElementById('product-price').value = product.price;
    document.getElementById('product-original-price').value = product.originalPrice || '';
    document.getElementById('product-image').value = getImages(product).join('\n');
    document.getElementById('product-description').value = product.description || '';
    document.getElementById('product-stock').value = product.stock || 0;
    document.getElementById('product-status').value = product.status || 'draft';
    document.getElementById('product-badge').value = product.badge || '';
    document.getElementById('product-rating').value = product.rating || 0;
    const hasOptions = product.options && product.options.length > 0;
    document.getElementById('product-has-options').checked = hasOptions;
    document.getElementById('product-options').value = hasOptions ? product.options.join(', ') : '';
    document.getElementById('options-field').style.display = hasOptions ? 'block' : 'none';
    openModal(id);
}

function deleteProduct(id) {
    if (!confirm('确定要删除此商品吗？')) return;
    products = products.filter(p => p.id !== id);
    saveProducts();
    renderProductsTable();
    updateDashboard();
    showNotification('商品已删除！');
}

function clearAllProducts() {
    if (!confirm('确定要清空所有商品吗？此操作不可撤销。')) return;
    products = [];
    localStorage.removeItem('shopnext_products');
    saveProducts();
    renderProductsTable();
    updateDashboard();
    showNotification('所有商品已清空！');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function renderOrdersTable() {
    const tbody = document.querySelector('.orders-table tbody');
    if (!tbody) return;
    loadOrders();
    if (orders.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" style="text-align: center; color: #888; padding: 20px;">暂无订单</td></tr>';
        return;
    }
    tbody.innerHTML = orders.map(order => {
        const date = new Date(order.date);
        const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
        const statusClass = order.status === 'delivered' ? 'delivered' : order.status === 'shipped' ? 'shipped' : order.status === 'processing' ? 'processing' : 'pending';
        return `<tr>
            <td>#${order.id}</td>
            <td>${order.shipping ? order.shipping.firstName + ' ' + order.shipping.lastName : 'N/A'}</td>
            <td>${order.items ? order.items.length + ' items' : 'N/A'}</td>
            <td>$${(order.total || 0).toFixed(2)}</td>
            <td><span class="status ${statusClass}">${order.status || 'pending'}</span></td>
            <td>
                <select onchange="updateOrderStatus('${order.id}', this.value); renderOrdersTable();" style="padding:5px;border-radius:4px;border:1px solid #ddd;">
                    <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
                    <option value="processing" ${order.status === 'processing' ? 'selected' : ''}>Processing</option>
                    <option value="shipped" ${order.status === 'shipped' ? 'selected' : ''}>Shipped</option>
                    <option value="delivered" ${order.status === 'delivered' ? 'selected' : ''}>Delivered</option>
                </select>
            </td>
        </tr>`;
    }).join('');
}

function renderCustomers() {
    const container = document.querySelector('.customers-grid');
    if (!container) return;
    loadCustomers();
    const registeredUsers = JSON.parse(localStorage.getItem('shopnext_users') || '[]');
    const allCustomers = [...registeredUsers.map(u => ({
        id: u.id,
        name: u.firstName + ' ' + u.lastName,
        email: u.email,
        phone: u.phone || '',
        type: 'registered',
        orders: 0,
        totalSpent: 0,
        createdAt: u.createdAt
    })), ...customers.map(c => ({
        id: c.id || Date.now(),
        name: c.name,
        email: c.email,
        phone: '',
        type: 'guest',
        orders: c.orders || 0,
        totalSpent: c.totalSpent || 0,
        createdAt: ''
    }))];
    const uniqueCustomers = [];
    const emailSet = new Set();
    allCustomers.forEach(c => {
        if (!emailSet.has(c.email)) {
            emailSet.add(c.email);
            uniqueCustomers.push(c);
        }
    });
    if (uniqueCustomers.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-users"></i><p>暂无客户</p></div>';
        return;
    }
    container.innerHTML = `
        <div style="margin-bottom:16px;display:flex;gap:16px;font-size:14px;color:#666;">
            <span><strong style="color:#333;">${registeredUsers.length}</strong> Registered Users</span>
            <span><strong style="color:#333;">${customers.length}</strong> Guest Customers</span>
        </div>
        ${uniqueCustomers.map(customer => {
            const initials = customer.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
            const typeBadge = customer.type === 'registered'
                ? '<span style="background:#d1fae5;color:#065f46;padding:2px 8px;border-radius:10px;font-size:11px;margin-left:6px;">Registered</span>'
                : '<span style="background:#fef3c7;color:#b45309;padding:2px 8px;border-radius:10px;font-size:11px;margin-left:6px;">Guest</span>';
            const dateStr = customer.createdAt ? new Date(customer.createdAt).toLocaleDateString() : '-';
            return `<div class="customer-card">
                <div class="customer-avatar">${initials}</div>
                <div class="customer-info">
                    <h4>${customer.name}${typeBadge}</h4>
                    <p style="font-size:12px;color:#888;">ID: ${customer.id}</p>
                    <p>${customer.email}</p>
                    ${customer.phone ? '<p style="font-size:12px;color:#888;"><i class="fas fa-phone" style="width:14px;"></i> ' + customer.phone + '</p>' : ''}
                    <span class="orders-count">${customer.orders || 0} orders - $${(customer.totalSpent || 0).toFixed(2)}</span>
                    ${dateStr !== '-' ? '<br><span style="font-size:11px;color:#aaa;">Joined: ' + dateStr + '</span>' : ''}
                </div>
            </div>`;
        }).join('')}
    `;
}

function renderReviewsAdmin() {
    const container = document.getElementById('reviews-admin-list');
    if (!container) return;
    let allReviews = {};
    try {
        allReviews = JSON.parse(localStorage.getItem('shopnext_reviews') || '{}');
    } catch (e) { allReviews = {}; }
    const entries = Object.entries(allReviews);
    if (entries.length === 0) {
        container.innerHTML = '<div class="empty-state"><i class="fas fa-star"></i><p>暂无评论。点击上方"自动生成评论"按钮为商品生成智能评论。</p></div>';
        return;
    }
    let html = '<div style="margin-bottom:15px;display:flex;gap:10px;align-items:center;">';
    html += '<button class="btn-primary" style="background:#ef4444;font-size:13px;padding:8px 16px;" onclick="deleteAllReviews()"><i class="fas fa-trash"></i> 删除所有评论</button>';
    html += '</div>';
    entries.forEach(([productId, reviews]) => {
        if (!reviews || reviews.length === 0) return;
        const product = products.find(p => p.id === parseInt(productId));
        const productName = product ? product.name : 'Product #' + productId;
        const avg = (reviews.reduce((s, r) => s + (r.rating || 5), 0) / reviews.length).toFixed(1);
        const cat = product ? detectReviewCategory(product) : 'general';
        const catLabels = {phone:'手机',camera:'数码相机',audio:'耳机音箱',peripherals:'鼠标键盘',display:'电视显示器',phone_accessories:'手机配件',weights:'健身器材',yoga:'瑜伽拉伸',bands:'弹力带',cardio:'有氧器材',security:'安防摄像头',kitchen:'厨房用品',travel:'旅行用品',car:'车辆用品',camping:'露营用品',general:'通用'};
        const catLabel = catLabels[cat] || '通用';
        html += `<div class="review-admin-card" style="border-left:3px solid #667eea;margin-top:20px;">
            <div class="review-admin-header" style="display:flex;justify-content:space-between;align-items:center;">
                <div>
                    <h4 style="margin:0;">${productName} <span style="background:#eef2ff;color:#667eea;padding:2px 8px;border-radius:10px;font-size:11px;margin-left:6px;">${catLabel}</span></h4>
                    <span style="color:#888;font-size:13px;">${reviews.length} 条评论 · 平均评分: ${avg} ★</span>
                </div>
                <button class="btn-remove-item" style="background:#fee2e2;color:#ef4444;padding:6px 12px;border:none;border-radius:6px;cursor:pointer;font-size:12px;" onclick="deleteAllReviewsForProduct('${productId}')">
                    <i class="fas fa-trash"></i> 清空该商品评论
                </button>
            </div>
        </div>`;
        reviews.forEach((review, i) => {
            html += `<div class="review-admin-card">
                <div class="review-admin-header">
                    <h4>${review.title || 'Review'}</h4>
                    <span class="review-admin-stars">${'★'.repeat(review.rating || 5)}${'★'.repeat(5 - (review.rating || 5))}</span>
                </div>
                <p style="color:#888;font-size:12px;margin:2px 0;">by ${review.author || 'Anonymous'} · ${review.date ? new Date(review.date).toLocaleDateString() : ''}</p>
                <p class="review-admin-text">${review.text || ''}</p>
                ${review.image ? '<img src="' + review.image + '" style="max-width:120px;border-radius:8px;margin-top:8px;">' : ''}
                <div class="review-admin-actions" style="margin-top:8px;">
                    <button class="btn-remove-item" style="background:#fee2e2;color:#ef4444;padding:4px 10px;border:1px solid #fecaca;border-radius:6px;cursor:pointer;font-size:12px;" onclick="deleteSingleReview('${productId}', ${i})"><i class="fas fa-trash"></i> 删除此评论</button>
                </div>
            </div>`;
        });
    });
    container.innerHTML = html;
}

function deleteSingleReview(productId, index) {
    const pid = String(productId);
    let allReviews = JSON.parse(localStorage.getItem('shopnext_reviews') || '{}');
        if (allReviews[pid]) {
        allReviews[pid].splice(index, 1);
        if (allReviews[pid].length === 0) delete allReviews[pid];
        saveReviewsToStorage(allReviews);
    }
    renderReviewsAdmin();
    showNotification('评论已删除！');
}

function deleteAllReviewsForProduct(productId) {
    if (!confirm('确定清空该商品的所有评论吗？')) return;
    const pid = String(productId);
    let allReviews = JSON.parse(localStorage.getItem('shopnext_reviews') || '{}');
    delete allReviews[pid];
    saveReviewsToStorage(allReviews);
    if (typeof FirebaseService !== 'undefined' && FirebaseService.isReady()) {
        FirebaseService.deleteReviewsForProduct(pid).catch(() => {});
    }
    renderReviewsAdmin();
    showNotification('该商品的所有评论已删除！');
}

function deleteAllReviews() {
    if (!confirm('确定删除所有商品的所有评论吗？此操作不可撤销。')) return;
    localStorage.removeItem('shopnext_reviews');
    if (typeof FirebaseService !== 'undefined' && FirebaseService.isReady()) {
        FirebaseService.getReviews().then(fbReviews => {
            fbReviews.forEach(doc => {
                FirebaseService.deleteReviewsForProduct(doc.productId).catch(() => {});
            });
        }).catch(() => {});
    }
    renderReviewsAdmin();
    showNotification('所有评论已删除！');
}

function openImageReviewModal() {
    document.getElementById('image-review-modal').style.display = 'flex';
    const select = document.getElementById('img-review-product');
    select.innerHTML = '';
    products.filter(p => p.status === 'active').forEach(p => {
        select.innerHTML += `<option value="${p.id}">${p.name}</option>`;
    });
}

function closeImageReviewModal() {
    document.getElementById('image-review-modal').style.display = 'none';
}

function previewImgReviewImage() {
    const url = document.getElementById('img-review-url').value;
    const preview = document.getElementById('img-review-preview');
    const img = preview.querySelector('img');
    if (url) {
        img.src = url;
        preview.style.display = 'block';
    } else {
        preview.style.display = 'none';
    }
}

function submitImageReview() {
    const productId = document.getElementById('img-review-product').value;
    const rating = parseInt(document.getElementById('img-review-rating').value);
    const title = document.getElementById('img-review-title').value;
    const text = document.getElementById('img-review-body').value;
    const imageUrl = document.getElementById('img-review-url').value;
    if (!productId || !imageUrl) { alert('Product and image URL are required'); return; }
    let allReviews = JSON.parse(localStorage.getItem('shopnext_reviews') || '{}');
    const pid = String(productId);
    if (!allReviews[pid]) allReviews[pid] = [];
    allReviews[pid].push({ rating, title, text, image: imageUrl, date: new Date().toISOString(), author: 'Admin', id: Date.now(), helpful: 0 });
    saveReviewsToStorage(allReviews);
    closeImageReviewModal();
    showNotification('图片评论已添加！');
}

function generateReviewForProduct(productId) {
    const product = products.find(p => p.id === parseInt(productId));
    if (!product) return;
    const templates = buildReviewTemplates(product);
    const names = ['John D.','Sarah M.','Mike R.','Emily K.','David L.','Lisa T.','James W.','Anna P.','Robert C.','Jennifer H.'];
    const is5 = Math.random() > 0.3;
    const rating = is5 ? 5 : 4;
    const titlePool = is5 ? templates.t5 : templates.t4;
    const textPool = is5 ? templates.r5 : templates.r4;
    let allReviews = JSON.parse(localStorage.getItem('shopnext_reviews') || '{}');
    const pid = String(productId);
    if (!allReviews[pid]) allReviews[pid] = [];
    allReviews[pid].push({
        rating,
        title: titlePool[Math.floor(Math.random() * titlePool.length)],
        text: textPool[Math.floor(Math.random() * textPool.length)],
        author: names[Math.floor(Math.random() * names.length)],
        date: new Date().toISOString(),
        id: Date.now(),
        helpful: 0
    });
    saveReviewsToStorage(allReviews);
    showNotification('已为 ' + product.name + ' 生成评论');
}

function startImport() {
    const url = document.getElementById('import-url').value.trim();
    if (!url) { alert('Please enter a URL'); return; }
    document.getElementById('import-loading').style.display = 'block';
    document.getElementById('import-error').style.display = 'none';
    document.getElementById('import-preview').style.display = 'none';
    const proxies = [
        'https://api.allorigins.win/raw?url=',
        'https://corsproxy.io/?',
        'https://api.codetabs.com/v1/proxy?quest=',
        'https://crossorigin.me/'
    ];
    tryFetchWithProxy(url, 0, proxies);
}

function tryFetchWithProxy(url, proxyIndex, proxies) {
    if (proxyIndex >= proxies.length) {
        document.getElementById('import-loading').style.display = 'none';
        showImportError('Amazon and similar sites block auto-scraping. Use Paste Source Code below to import.');
        return;
    }
    const proxyUrl = proxies[proxyIndex] + encodeURIComponent(url);
    fetch(proxyUrl)
        .then(res => {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.text();
        })
        .then(html => {
            if (!html || html.length < 500) throw new Error('Empty response');
            document.getElementById('import-loading').style.display = 'none';
            parseProductHtml(html, url);
        })
        .catch(() => {
            console.log(`Proxy ${proxyIndex + 1} failed, trying next...`);
            tryFetchWithProxy(url, proxyIndex + 1, proxies);
        });
}

function parseProductHtml(html, originalUrl) {
    const parser = new DOMParser();
    let doc;
    try {
        doc = parser.parseFromString(html, 'text/html');
    } catch (e) {
        showImportError('瑙ｆ瀽HTML澶辫触锛岃妫€鏌ョ矘璐寸殑鍐呭');
        return;
    }
    let productData = {
        name: '', price: '', originalPrice: '', images: [], description: '',
        about: [], specs: {}, category: guessCategory(originalUrl + ' ' + (doc.title || '')),
        badge: 'New', seller: '', brand: '', brandStory: '', mediaFeatures: [],
        certifications: [], productVideos: []
    };

    // --- Try JSON-LD first (most reliable for e-commerce) ---
    let jsonLdData = null;
    doc.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
        try {
            let d = JSON.parse(script.textContent);
            if (d['@type'] === 'Product' || (Array.isArray(d['@graph']) && d['@graph'].find(g => g['@type'] === 'Product'))) {
                jsonLdData = d['@type'] === 'Product' ? d : d['@graph'].find(g => g['@type'] === 'Product');
            }
        } catch(e) {}
    });

    if (jsonLdData) {
        productData.name = jsonLdData.name || '';
        productData.description = jsonLdData.description || '';
        productData.brand = typeof jsonLdData.brand === 'object' ? (jsonLdData.brand.name || '') : (jsonLdData.brand || '');
        if (jsonLdData.image) {
            const imgs = Array.isArray(jsonLdData.image) ? jsonLdData.image : [jsonLdData.image];
            productData.images = imgs.filter(s => s && s.startsWith('http')).slice(0, 6);
        }
        if (jsonLdData.offers) {
            const offers = Array.isArray(jsonLdData.offers) ? jsonLdData.offers[0] : jsonLdData.offers;
            productData.price = parseFloat(offers.price) || '';
            productData.seller = offers.seller?.name || '';
        }
        if (jsonLdData.aggregateRating) {
            productData.rating = parseFloat(jsonLdData.aggregateRating.ratingValue) || 0;
            productData.reviews = parseInt(jsonLdData.aggregateRating.reviewCount) || 0;
        }
    }

    // --- Try OpenGraph meta tags ---
    if (!productData.name) {
        const ogTitle = doc.querySelector('meta[property="og:title"]');
        productData.name = ogTitle?.getAttribute('content') || '';
    }
    if (!productData.description) {
        const ogDesc = doc.querySelector('meta[property="og:description"]');
        productData.description = ogDesc?.getAttribute('content') || '';
    }
    if (!productData.images.length) {
        const ogImg = doc.querySelector('meta[property="og:image"]');
        if (ogImg) {
            const src = ogImg.getAttribute('content');
            if (src) productData.images.push(src);
        }
    }
    if (!productData.price) {
        const ogPrice = doc.querySelector('meta[property="product:price:amount"]');
        if (ogPrice) productData.price = parseFloat(ogPrice.getAttribute('content')) || '';
    }
    if (!productData.brand) {
        const ogBrand = doc.querySelector('meta[property="product:brand"]');
        productData.brand = ogBrand?.getAttribute('content') || '';
    }

    // --- Try Microdata itemprop ---
    if (!productData.name) {
        const itempropName = doc.querySelector('[itemprop="name"]');
        productData.name = itempropName?.getAttribute('content') || itempropName?.textContent?.trim() || '';
    }
    if (!productData.price) {
        const itempropPrice = doc.querySelector('[itemprop="price"]');
        productData.price = parseFloat(itempropPrice?.getAttribute('content') || itempropPrice?.textContent?.replace(/[^0-9.]/g, '') || '') || '';
    }
    if (!productData.images.length) {
        const itempropImg = doc.querySelector('[itemprop="image"]');
        if (itempropImg) {
            const src = itempropImg.getAttribute('src') || itempropImg.getAttribute('content');
            if (src) productData.images.push(src);
        }
    }
    if (!productData.description) {
        const itempropDesc = doc.querySelector('[itemprop="description"]');
        productData.description = itempropDesc?.getAttribute('content') || itempropDesc?.textContent?.trim() || '';
    }

    // --- Amazon-specific selectors (as fallback) ---
    if (!productData.name) {
        productData.name = doc.querySelector('h1')?.textContent?.trim() ||
                           doc.querySelector('#productTitle')?.textContent?.trim() || '';
    }
    if (!productData.name) {
        productData.name = doc.title?.split('|')[0]?.split('-')[0]?.trim() || '';
    }

    if (!productData.price) {
        const priceSelectors = [
            '.a-price .a-offscreen',
            '.priceToPay .a-offscreen',
            '#priceblock_ourprice',
            '#priceblock_dealprice',
            '.product-price',
            '.price-current',
            '.a-price-whole'
        ];
        for (const sel of priceSelectors) {
            const el = doc.querySelector(sel);
            if (el) {
                const t = (el.textContent || el.getAttribute('content') || '').replace(/[^0-9.,]/g, '');
                if (t) { productData.price = parseFloat(t.replace(',', '')) || ''; break; }
            }
        }
    }

    if (!productData.originalPrice) {
        const origPriceSelectors = [
            '.a-price.a-text-price .a-offscreen',
            '.basisPrice .a-offscreen',
            '.a-text-price .a-offscreen'
        ];
        for (const sel of origPriceSelectors) {
            const el = doc.querySelector(sel);
            if (el) {
                const t = (el.textContent || '').replace(/[^0-9.,]/g, '');
                if (t) { productData.originalPrice = parseFloat(t.replace(',', '')) || ''; break; }
            }
        }
    }

    if (!productData.images.length) {
        const colorImages = doc.querySelector('#colorImages');
        if (colorImages) {
            colorImages.querySelectorAll('img').forEach(img => {
                let src = img.getAttribute('data-old-hires') || img.getAttribute('data-dynamic-image') || img.getAttribute('data-src') || img.src || '';
                if (src && !src.includes('player') && !src.includes('sprite')) {
                    src = src.replace(/\._[A-Z]+\d+_/, '');
                    if (!productData.images.includes(src)) productData.images.push(src);
                }
            });
        }
    }
    if (!productData.images.length) {
        const mainImg = doc.querySelector('#landingImage, #imgBlkFront, #main-image');
        if (mainImg) {
            let src = mainImg.getAttribute('data-old-hires') || mainImg.getAttribute('data-dynamic-image') || mainImg.src || '';
            if (src) productData.images.push(src);
        }
    }

    // --- Generic image extraction fallback ---
    if (!productData.images.length) {
        const skipPatterns = ['logo', 'icon', 'sprite', 'avatar', 'banner', 'pixel', 'track', 'analytics', 'badge', 'button', 'arrow', 'close', 'search', 'cart', 'facebook', 'twitter', 'google', 'play-store', 'app-store'];
        const largeImgPatterns = ['m.media-amazon', 'images-na.ssl-images-amazon', 'images-eu.ssl-images-amazon', 'ecx.images-amazon', 'unsplash.com', 'images.unsplash', 'ibb.co', 'imgur.com', 'cloudinary.com', 'shopify'];
        doc.querySelectorAll('img').forEach(img => {
            const src = img.getAttribute('src') || img.getAttribute('data-src') || img.getAttribute('data-lazy-src') || '';
            if (!src || src.startsWith('data:')) return;
            const lower = src.toLowerCase();
            const isLarge = largeImgPatterns.some(p => lower.includes(p));
            const isSkip = skipPatterns.some(p => lower.includes(p));
            if (isLarge && !isSkip && !productData.images.includes(src)) {
                productData.images.push(src);
            }
        });
        // Last resort: any large-looking image
        if (!productData.images.length) {
            doc.querySelectorAll('img').forEach(img => {
                const src = img.getAttribute('src') || img.getAttribute('data-src') || '';
                const w = parseInt(img.getAttribute('width') || '0');
                const h = parseInt(img.getAttribute('height') || '0');
                if (src && src.startsWith('http') && (w >= 200 || h >= 200) && !productData.images.includes(src)) {
                    productData.images.push(src);
                }
            });
        }
    }
    productData.images = productData.images.slice(0, 6);

    if (!productData.brand) {
        productData.brand = doc.querySelector('#bylineInfo')?.textContent?.trim()
            ?.replace(/^Brand:\s*/i, '')?.replace(/^Visit the\s*/i, '')?.replace(/\s*Store$/i, '') || '';
    }
    if (!productData.seller) {
        productData.seller = doc.querySelector('#sellerProfileTriggerId')?.textContent?.trim() ||
                             doc.querySelector('#merchant-info')?.textContent?.trim() || '';
    }

    // --- About this item ---
    if (!productData.about.length) {
        const featureBullets = doc.querySelector('#feature-bullets');
        if (featureBullets) {
            featureBullets.querySelectorAll('li span.a-list-item').forEach(el => {
                let t = el.textContent?.trim();
                if (t && t.length > 10 && !t.includes('var ') && !t.includes('function(') &&
                    !t.includes('window.') && !t.includes('dpAcr') && !t.includes('ClickAction') &&
                    !t.includes('star') && !t.includes('%') && t.charAt(0) !== '#' &&
                    !t.includes('Customer Reviews') && !t.includes('Made for') &&
                    !t.includes('feedback') && !t.includes('Sending') &&
                    !t.includes('report') && !t.includes('cookie')) {
                    productData.about.push(t);
                }
            });
        }
    }
    // Generic bullet points fallback
    if (!productData.about.length) {
        doc.querySelectorAll('ul li').forEach(li => {
            const t = li.textContent?.trim();
            if (t && t.length > 15 && t.length < 300 && !t.includes('script') && !t.includes('function(')) {
                if (productData.about.length < 10) productData.about.push(t);
            }
        });
    }

    // --- Specs ---
    if (!Object.keys(productData.specs).length) {
        const specTable = doc.querySelector('#productDetails_techSpec_section_1, #detailBullets_feature_div, table.a-keyvalue');
        if (specTable) {
            specTable.querySelectorAll('tr, .a-row').forEach(row => {
                const key = row.querySelector('th, td:first-child, .a-text-bold')?.textContent?.trim()?.replace(/[:\s]+$/, '');
                const val = row.querySelector('td:last-child, .a-text-bold + td')?.textContent?.trim();
                if (key && val && key.length < 50 && val.length < 200) {
                    productData.specs[key] = val;
                }
            });
        }
        if (Object.keys(productData.specs).length === 0) {
            doc.querySelectorAll('#detailBullets_feature_div li, .detail-bullet-list .a-list-item').forEach(li => {
                const text = li.textContent?.trim();
                if (text && text.includes(' : ')) {
                    const parts = text.split(' : ');
                    if (parts.length === 2) {
                        const key = parts[0].trim().replace(/^\u200E/, '').replace(/^\u200F/, '');
                        const val = parts[1].trim();
                        if (key && val && key.length < 50) productData.specs[key] = val;
                    }
                }
            });
        }
        // Generic table fallback
        if (!Object.keys(productData.specs).length) {
            doc.querySelectorAll('table tr').forEach(row => {
                const cells = row.querySelectorAll('td, th');
                if (cells.length >= 2) {
                    const key = cells[0]?.textContent?.trim();
                    const val = cells[1]?.textContent?.trim();
                    if (key && val && key.length < 50 && val.length < 200 && !key.includes('function')) {
                        productData.specs[key] = val;
                    }
                }
            });
        }
    }

    if (!productData.description) {
        const descEl = doc.querySelector('#productDescription p, #productDescription');
        if (descEl) productData.description = descEl.textContent?.trim() || '';
    }
    if (!productData.description) {
        const metaDesc = doc.querySelector('meta[name="description"]');
        productData.description = metaDesc?.getAttribute('content') || '';
    }

    // --- Brand Story (aplus) ---
    const aplus = doc.querySelector('#aplus, [data-feature-name="aplus"]');
    if (aplus) {
        const brandText = aplus.textContent?.trim();
        if (brandText && brandText.length > 50) {
            productData.brandStory = brandText.substring(0, 800);
        }
    }

    const pageText = html.toLowerCase();
    if (pageText.includes('climate pledge friendly')) {
        productData.certifications.push('Climate Pledge Friendly');
    }

    doc.querySelectorAll('video source, video[src]').forEach(v => {
        const src = v.src || v.getAttribute('src');
        if (src && !productData.productVideos.includes(src)) productData.productVideos.push(src);
    });

    if (productData.about.length === 0) {
        productData.about = generateAboutSection(productData);
    }

    if (!productData.name && !productData.price) {
        showImportError('Could not parse product info. Make sure you pasted the full product page, or use Manual Input below.');
        return;
    }
    importedProductData = productData;
    showImportPreview(productData);
}

function guessCategory(text) {
    const t = text.toLowerCase();
    if (t.includes('electronic') || t.includes('tech') || t.includes('phone') || t.includes('laptop') || t.includes('headphone') || t.includes('recorder') || t.includes('audio')) return 'Electronics';
    if (t.includes('toy') || t.includes('game') || t.includes('puzzle') || t.includes('block')) return 'Toys & Hobbies';
    if (t.includes('health') || t.includes('fitness') || t.includes('yoga') || t.includes('gym')) return 'Health & Fitness';
    if (t.includes('garden') || t.includes('home') || t.includes('kitchen')) return 'Home & Garden';
    if (t.includes('sport') || t.includes('outdoor')) return 'Sports';
    return 'Electronics';
}

function generateAboutSection(data) {
    const about = [];
    if (data.brand) about.push(`Premium quality product from ${data.brand}`);
    about.push('High-quality construction and materials');
    about.push('Designed for durability and long-term use');
    about.push('Easy to set up and use right out of the box');
    return about;
}

function showImportPreview(data) {
    document.getElementById('preview-img').src = getFirstImage(data) || "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 fill=%22%23e9ecef%22%3E%3Crect width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 font-size=%2220%22 fill=%22%23adb5bd%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ENo Image%3C/text%3E%3C/svg%3E";
    document.getElementById('preview-name').value = data.name;
    document.getElementById('preview-price').value = data.price || '';
    document.getElementById('preview-original-price').value = data.originalPrice || '';
    document.getElementById('preview-image-url').value = (data.images || []).join('\n');
    document.getElementById('preview-description').value = data.description || '';
    document.getElementById('preview-category').value = data.category;
    document.getElementById('preview-stock').value = '50';
    document.getElementById('preview-badge').value = data.badge || 'New';
    document.getElementById('preview-brand').value = data.brand || '';
    document.getElementById('preview-seller').value = data.seller || '';
    const aboutContainer = document.getElementById('preview-about-list');
    if (data.about && data.about.length > 0) {
        aboutContainer.innerHTML = data.about.map((item, i) => `
            <div class="about-item-edit">
                <input type="text" class="about-item-input" value="${escapeHtml(item)}" data-index="${i}">
                <button type="button" class="btn-remove-item" onclick="removeAboutItem(${i})">脳</button>
            </div>
        `).join('');
    } else {
        aboutContainer.innerHTML = '<p style="color:#999;font-size:13px;">No features extracted</p>';
    }
    const specsContainer = document.getElementById('preview-specs-list');
    if (data.specs && Object.keys(data.specs).length > 0) {
        specsContainer.innerHTML = Object.entries(data.specs).map(([key, value], i) => `
            <div class="spec-item-edit">
                <input type="text" class="spec-key-input" value="${escapeHtml(key)}" placeholder="Key">
                <input type="text" class="spec-value-input" value="${escapeHtml(value)}" placeholder="Value">
                <button type="button" class="btn-remove-item" onclick="removeSpecItem(${i})">脳</button>
            </div>
        `).join('');
    } else {
        specsContainer.innerHTML = '<p style="color:#999;font-size:13px;">No specifications extracted</p>';
    }
    const brandStoryEl = document.getElementById('preview-brand-story');
    if (brandStoryEl) brandStoryEl.value = data.brandStory || '';
    const mediaEl = document.getElementById('preview-media-features');
    if (mediaEl) mediaEl.value = (data.mediaFeatures || []).join(', ');
    const certsEl = document.getElementById('preview-certifications');
    if (certsEl) certsEl.value = (data.certifications || []).join(', ');
    const videosEl = document.getElementById('preview-product-videos');
    if (videosEl) videosEl.value = (data.productVideos || []).join('\n');
    const detailedDescEl = document.getElementById('preview-detailed-description');
    if (detailedDescEl) detailedDescEl.value = data.description || '';
    document.getElementById('import-preview').style.display = 'block';
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML.replace(/"/g, '&quot;');
}

function showImportError(message) {
    document.getElementById('import-loading').style.display = 'none';
    document.getElementById('import-error-text').textContent = message;
    document.getElementById('import-error').style.display = 'block';
}

function saveImportedProduct() {
    const name = document.getElementById('preview-name').value.trim();
    const price = parseFloat(document.getElementById('preview-price').value);
    if (!name) { alert('Product name is required'); return; }
    if (!price || price <= 0) { alert('Please enter a valid price'); return; }
    const aboutInputs = document.querySelectorAll('.about-item-input');
    const about = Array.from(aboutInputs).map(input => input.value).filter(v => v.trim());
    const specKeys = document.querySelectorAll('.spec-key-input');
    const specValues = document.querySelectorAll('.spec-value-input');
    const specs = {};
    specKeys.forEach((keyInput, i) => {
        const key = keyInput.value.trim();
        const value = specValues[i]?.value.trim();
        if (key && value) specs[key] = value;
    });
    const imageUrl = document.getElementById('preview-image-url').value || '';
    const images = imageUrl.split('\n').map(u => u.trim()).filter(u => u);
    const newProduct = {
        id: Date.now(),
        name: name,
        category: document.getElementById('preview-category').value,
        price: price,
        originalPrice: parseFloat(document.getElementById('preview-original-price').value) || price,
        images: images.length > 0 ? images : ["data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 fill=%22%23e9ecef%22%3E%3Crect width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22200%22 font-size=%2220%22 fill=%22%23adb5bd%22 text-anchor=%22middle%22 dominant-baseline=%22middle%22%3ENo Image%3C/text%3E%3C/svg%3E"],
        description: document.getElementById('preview-description').value || '',
        detailedDescription: document.getElementById('preview-detailed-description')?.value || '',
        status: 'active',
        stock: parseInt(document.getElementById('preview-stock').value) || 50,
        rating: 0,
        reviews: 0,
        badge: document.getElementById('preview-badge').value,
        brand: document.getElementById('preview-brand').value || '',
        brandStory: document.getElementById('preview-brand-story')?.value || '',
        mediaFeatures: (document.getElementById('preview-media-features')?.value || '').split(',').map(s => s.trim()).filter(v => v),
        certifications: (document.getElementById('preview-certifications')?.value || '').split(',').map(s => s.trim()).filter(v => v),
        productVideos: (document.getElementById('preview-product-videos')?.value || '').split('\n').map(s => s.trim()).filter(v => v),
        seller: document.getElementById('preview-seller').value || '',
        about: about,
        specs: specs
    };
    products.push(newProduct);
    saveProducts();
    renderProductsTable();
    updateDashboard();
    document.getElementById('import-url').value = '';
    document.getElementById('import-preview').style.display = 'none';
    document.getElementById('import-error').style.display = 'none';
    showNotification('商品导入成功！');
}

function cancelImport() {
    document.getElementById('import-url').value = '';
    document.getElementById('import-preview').style.display = 'none';
    document.getElementById('import-error').style.display = 'none';
    document.getElementById('import-loading').style.display = 'none';
    importedProductData = null;
}

function manualImport() {
    const url = document.getElementById('import-url').value.trim();
    let productName = '';
    let category = 'Electronics';
    
    // Try to extract product name from URL
    if (url) {
        const urlParts = url.split('/');
        // Amazon URLs like /dp/B0XXX/ or /product-name/dp/B0XXX/
        const dpIndex = urlParts.findIndex(p => p === 'dp');
        if (dpIndex > 0) {
            productName = urlParts[dpIndex - 1]?.replace(/-/g, ' ')?.replace(/\b\w/g, c => c.toUpperCase()) || '';
        }
        category = guessCategory(url);
    }

    importedProductData = {
        name: productName,
        price: '',
        originalPrice: '',
        images: [],
        description: '',
        detailedDescription: '',
        category: category,
        badge: 'New',
        brand: '',
        brandStory: '',
        mediaFeatures: [],
        certifications: [],
        productVideos: [],
        seller: '',
        about: [],
        specs: {}
    };
    showImportPreview(importedProductData);
}

function addAboutItem(value = '') {
    const container = document.getElementById('preview-about-list');
    const index = container.querySelectorAll('.about-item-edit').length;
    const div = document.createElement('div');
    div.className = 'about-item-edit';
    div.innerHTML = `
        <input type="text" class="about-item-input" value="${escapeHtml(value)}" placeholder="Enter feature">
        <button type="button" class="btn-remove-item" onclick="removeAboutItem(${index})">脳</button>
    `;
    container.appendChild(div);
}

function removeAboutItem(index) {
    const container = document.getElementById('preview-about-list');
    const items = container.querySelectorAll('.about-item-edit');
    if (items[index]) items[index].remove();
}

function addSpecItem(key = '', value = '') {
    const container = document.getElementById('preview-specs-list');
    const index = container.querySelectorAll('.spec-item-edit').length;
    const div = document.createElement('div');
    div.className = 'spec-item-edit';
    div.innerHTML = `
        <input type="text" class="spec-key-input" value="${escapeHtml(key)}" placeholder="Key">
        <input type="text" class="spec-value-input" value="${escapeHtml(value)}" placeholder="Value">
        <button type="button" class="btn-remove-item" onclick="removeSpecItem(${index})">脳</button>
    `;
    container.appendChild(div);
}

function removeSpecItem(index) {
    const container = document.getElementById('preview-specs-list');
    const items = container.querySelectorAll('.spec-item-edit');
    if (items[index]) items[index].remove();
}

document.addEventListener('DOMContentLoaded', () => {
    loadOrders();
    loadCustomers();
    loadGitHubConfig();
    initAdminData();
    
    // Add reset data button
    const header = document.querySelector('.header-right');
    if (header) {
        const resetBtn = document.createElement('button');
        resetBtn.className = 'btn-icon';
        resetBtn.title = 'Reset all data to defaults';
        resetBtn.innerHTML = '<i class="fas fa-undo"></i>';
        resetBtn.style.cssText = 'background:#fee2e2;color:#ef4444;width:35px;height:35px;border:none;border-radius:8px;cursor:pointer;';
        resetBtn.onclick = function() {
            if (confirm('这将重置所有商品为默认值，导入的商品将丢失。确定继续吗？')) {
                localStorage.removeItem('shopnext_products');
                localStorage.removeItem('shopnext_orders');
                localStorage.removeItem('shopnext_customers');
                loadProducts();
                loadOrders();
                loadCustomers();
                updateDashboard();
                renderProductsTable();
                showNotification('所有数据已重置！');
            }
        };
        header.appendChild(resetBtn);
    }
});

function loadPromotion() {
    let promo = null;
    try { promo = JSON.parse(localStorage.getItem('shopnext_promotions') || 'null'); } catch(e) {}
    if (promo && promo.title) {
        document.getElementById('promo-tag').value = promo.tag || '';
        document.getElementById('promo-title').value = promo.title || '';
        document.getElementById('promo-desc').value = promo.description || '';
        document.getElementById('promo-link').value = promo.link || '';
    }
}

function savePromotion() {
    const tag = document.getElementById('promo-tag').value.trim();
    const title = document.getElementById('promo-title').value.trim();
    const description = document.getElementById('promo-desc').value.trim();
    const link = document.getElementById('promo-link').value.trim();
    if (!title) { alert('Title is required'); return; }
    const promo = { tag: tag || 'Limited Time', title, description, link };
    localStorage.setItem('shopnext_promotions', JSON.stringify(promo));
    const status = document.getElementById('promo-status');
    status.textContent = 'Saved!';
    setTimeout(() => { status.textContent = ''; }, 2000);
}

function clearPromotion() {
    localStorage.removeItem('shopnext_promotions');
    document.getElementById('promo-tag').value = '';
    document.getElementById('promo-title').value = '';
    document.getElementById('promo-desc').value = '';
    document.getElementById('promo-link').value = '';
    const status = document.getElementById('promo-status');
    status.textContent = 'Cleared!';
    status.style.color = '#ef4444';
    setTimeout(() => { status.textContent = ''; status.style.color = '#27ae60'; }, 2000);
}

function saveGitHubConfig() {
    if (typeof GitHubSync === 'undefined') { alert('github-sync.js 未加载'); return; }
    const token = document.getElementById('github-token').value.trim();
    const repo = document.getElementById('github-repo').value.trim();
    const branch = document.getElementById('github-branch').value.trim();
    if (token) GitHubSync.setConfig(token, null, null);
    if (repo) GitHubSync.setConfig(null, repo, null);
    if (branch) GitHubSync.setConfig(null, null, branch);
    const st = document.getElementById('github-status');
    st.textContent = '✓ 配置已保存';
    st.style.color = '#16a34a';
    setTimeout(() => { st.textContent = ''; }, 3000);
}

function loadGitHubConfig() {
    if (typeof GitHubSync === 'undefined') return;
    const c = GitHubSync.getConfig();
    const tokenEl = document.getElementById('github-token');
    const repoEl = document.getElementById('github-repo');
    const branchEl = document.getElementById('github-branch');
    if (tokenEl) tokenEl.value = c.token;
    if (repoEl) repoEl.value = c.repo;
    if (branchEl) branchEl.value = c.branch;
}

function testGitHubDeploy() {
    if (typeof GitHubSync === 'undefined') { alert('github-sync.js 未加载'); return; }
    if (!GitHubSync.isConfigured()) { alert('请先填写 GitHub Token 和仓库地址'); return; }
    const st = document.getElementById('github-status');
    st.textContent = '部署中...';
    st.style.color = '#0369a1';
    GitHubSync.deployData({
        products: products,
        orders: orders,
        reviews: JSON.parse(localStorage.getItem('shopnext_reviews') || '{}'),
        customers: customers,
        users: JSON.parse(localStorage.getItem('shopnext_users') || '[]'),
        settings: JSON.parse(localStorage.getItem('shopnext_settings') || '{}')
    }, 'Test deploy from admin panel').then(url => {
        st.textContent = '✓ 部署成功！';
        st.style.color = '#16a34a';
        setTimeout(() => { st.textContent = ''; }, 5000);
    }).catch(e => {
        st.textContent = '✗ 部署失败: ' + e.message;
        st.style.color = '#ef4444';
    });
}
