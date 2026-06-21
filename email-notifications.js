const EmailNotifications = {
    STORAGE_KEY: 'shopnext_email_notifications',
    TEMPLATES: {
        order_confirmation: {
            subject: 'Order Confirmation - #{orderId}',
            icon: 'fa-check-circle',
            color: '#27ae60'
        },
        order_shipped: {
            subject: 'Your Order #{orderId} Has Been Shipped!',
            icon: 'fa-truck',
            color: '#667eea'
        },
        order_delivered: {
            subject: 'Your Order #{orderId} Has Been Delivered',
            icon: 'fa-box-open',
            color: '#27ae60'
        },
        welcome: {
            subject: 'Welcome to ShopNext!',
            icon: 'fa-hand-sparkles',
            color: '#f59e0b'
        },
        password_reset: {
            subject: 'Password Reset Request',
            icon: 'fa-key',
            color: '#667eea'
        },
        low_stock: {
            subject: 'Low Stock Alert - {productName}',
            icon: 'fa-exclamation-triangle',
            color: '#ef4444'
        },
        price_drop: {
            subject: 'Price Drop Alert - {productName}',
            icon: 'fa-tag',
            color: '#10b981'
        },
        wishlist_back_in_stock: {
            subject: 'Back in Stock - {productName}',
            icon: 'fa-bell',
            color: '#667eea'
        },
        affiliate_commission: {
            subject: 'You Earned ${amount} Commission!',
            icon: 'fa-dollar-sign',
            color: '#10b981'
        },
        review_reminder: {
            subject: 'How was your purchase?',
            icon: 'fa-star',
            color: '#f59e0b'
        }
    },

    init() {
        this.renderNotificationBell();
        this.setupStockAlerts();
        this.setupPriceDropAlerts();
    },

    getNotifications() {
        return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
    },

    saveNotifications(notifications) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(notifications));
    },

    addNotification(type, data = {}) {
        const template = this.TEMPLATES[type];
        if (!template) return;
        const notifications = this.getNotifications();
        let subject = template.subject;
        Object.keys(data).forEach(key => {
            subject = subject.replace(`{${key}}`, data[key]).replace(`#{${key}}`, data[key]);
        });
        const notification = {
            id: Date.now(),
            type: type,
            subject: subject,
            icon: template.icon,
            color: template.color,
            data: data,
            read: false,
            createdAt: new Date().toISOString()
        };
        notifications.unshift(notification);
        if (notifications.length > 50) notifications.splice(50);
        this.saveNotifications(notifications);
        this.renderNotificationBell();
        this.showToast(notification);
        return notification;
    },

    markAsRead(id) {
        const notifications = this.getNotifications();
        const n = notifications.find(n => n.id === id);
        if (n) {
            n.read = true;
            this.saveNotifications(notifications);
            this.renderNotificationBell();
        }
    },

    markAllAsRead() {
        const notifications = this.getNotifications();
        notifications.forEach(n => n.read = true);
        this.saveNotifications(notifications);
        this.renderNotificationBell();
    },

    getUnreadCount() {
        return this.getNotifications().filter(n => !n.read).length;
    },

    deleteNotification(id) {
        let notifications = this.getNotifications();
        notifications = notifications.filter(n => n.id !== id);
        this.saveNotifications(notifications);
        this.renderNotificationBell();
    },

    clearAll() {
        this.saveNotifications([]);
        this.renderNotificationBell();
    },

    showToast(notification) {
        const toast = document.createElement('div');
        toast.style.cssText = `
            position: fixed; top: 80px; right: 20px; z-index: 10002;
            background: #fff; border-radius: 12px; padding: 16px 20px;
            box-shadow: 0 8px 30px rgba(0,0,0,0.15); max-width: 360px;
            border-left: 4px solid ${notification.color};
            animation: slideInRight 0.3s ease; cursor: pointer;
        `;
        toast.innerHTML = `
            <div style="display:flex;align-items:flex-start;gap:12px;">
                <div style="width:36px;height:36px;border-radius:8px;background:${notification.color}15;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <i class="fas ${notification.icon}" style="color:${notification.color};"></i>
                </div>
                <div style="flex:1;min-width:0;">
                    <div style="font-weight:600;font-size:14px;color:#333;margin-bottom:4px;">${notification.subject}</div>
                    <div style="font-size:12px;color:#999;">Just now</div>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" style="border:none;background:none;cursor:pointer;color:#ccc;font-size:16px;padding:0;">&times;</button>
            </div>
        `;
        toast.onclick = () => {
            toast.remove();
            window.location.href = 'user-dashboard.html#notifications';
        };
        document.body.appendChild(toast);
        setTimeout(() => { if (toast.parentElement) toast.remove(); }, 5000);
    },

    renderNotificationBell() {
        const bells = document.querySelectorAll('.notification-bell-container');
        const count = this.getUnreadCount();
        bells.forEach(container => {
            container.innerHTML = `
                <div style="position:relative;">
                    <button onclick="EmailNotifications.toggleNotifications(event)" style="background:none;border:none;cursor:pointer;position:relative;padding:8px;">
                        <i class="fas fa-bell" style="font-size:18px;color:#555;"></i>
                        ${count > 0 ? `<span style="position:absolute;top:0;right:0;background:#ef4444;color:#fff;font-size:10px;font-weight:700;width:18px;height:18px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid #fff;">${count > 9 ? '9+' : count}</span>` : ''}
                    </button>
                    <div id="notifications-panel" style="display:none;position:absolute;right:0;top:100%;margin-top:8px;width:360px;background:#fff;border-radius:12px;box-shadow:0 8px 30px rgba(0,0,0,0.15);z-index:10001;overflow:hidden;">
                        <div style="padding:16px 20px;border-bottom:1px solid #f0f0f0;display:flex;justify-content:space-between;align-items:center;">
                            <strong>Notifications</strong>
                            <div style="display:flex;gap:10px;">
                                ${count > 0 ? `<button onclick="EmailNotifications.markAllAsRead()" style="border:none;background:none;color:#667eea;cursor:pointer;font-size:13px;">Mark all read</button>` : ''}
                                <button onclick="EmailNotifications.clearAll()" style="border:none;background:none;color:#999;cursor:pointer;font-size:13px;">Clear all</button>
                            </div>
                        </div>
                        <div id="notifications-list" style="max-height:400px;overflow-y:auto;"></div>
                    </div>
                </div>
            `;
        });
        this.renderNotificationsList();
    },

    toggleNotifications(e) {
        e.stopPropagation();
        const panel = document.getElementById('notifications-panel');
        if (panel) panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    },

    renderNotificationsList() {
        const list = document.getElementById('notifications-list');
        if (!list) return;
        const notifications = this.getNotifications().slice(0, 20);
        if (notifications.length === 0) {
            list.innerHTML = '<div style="text-align:center;padding:40px 20px;color:#999;"><i class="fas fa-bell-slash" style="font-size:30px;margin-bottom:10px;display:block;"></i>No notifications</div>';
            return;
        }
        list.innerHTML = notifications.map(n => `
            <div onclick="EmailNotifications.markAsRead(${n.id})" style="padding:14px 20px;border-bottom:1px solid #f8f8f8;cursor:pointer;display:flex;gap:12px;align-items:flex-start;${!n.read ? 'background:#f8f9ff;' : ''}">
                <div style="width:32px;height:32px;border-radius:8px;background:${n.color}15;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <i class="fas ${n.icon}" style="color:${n.color};font-size:14px;"></i>
                </div>
                <div style="flex:1;min-width:0;">
                    <div style="font-size:13px;color:#333;${!n.read ? 'font-weight:600;' : ''}">${n.subject}</div>
                    <div style="font-size:11px;color:#aaa;margin-top:4px;">${this.timeAgo(n.createdAt)}</div>
                </div>
                ${!n.read ? '<div style="width:8px;height:8px;border-radius:50%;background:#667eea;flex-shrink:0;margin-top:6px;"></div>' : ''}
            </div>
        `).join('');
    },

    timeAgo(dateStr) {
        const diff = Date.now() - new Date(dateStr).getTime();
        const mins = Math.floor(diff / 60000);
        if (mins < 1) return 'Just now';
        if (mins < 60) return mins + 'm ago';
        const hours = Math.floor(mins / 60);
        if (hours < 24) return hours + 'h ago';
        const days = Math.floor(hours / 24);
        if (days < 7) return days + 'd ago';
        return new Date(dateStr).toLocaleDateString();
    },

    sendOrderConfirmation(order) {
        this.addNotification('order_confirmation', {
            orderId: order.orderId,
            total: order.total.toFixed(2),
            items: order.items.length
        });
    },

    sendOrderShipped(orderId) {
        this.addNotification('order_shipped', { orderId });
    },

    sendOrderDelivered(orderId) {
        this.addNotification('order_delivered', { orderId });
    },

    sendWelcome(firstName) {
        this.addNotification('welcome', { name: firstName });
    },

    sendLowStockAlert(productName, stock) {
        this.addNotification('low_stock', {
            productName: productName,
            stock: stock
        });
    },

    sendPriceDrop(productName, oldPrice, newPrice) {
        this.addNotification('price_drop', {
            productName: productName,
            oldPrice: oldPrice.toFixed(2),
            newPrice: newPrice.toFixed(2)
        });
    },

    sendBackInStock(productName) {
        this.addNotification('wishlist_back_in_stock', {
            productName: productName
        });
    },

    sendAffiliateCommission(amount) {
        this.addNotification('affiliate_commission', {
            amount: amount.toFixed(2)
        });
    },

    sendReviewReminder(orderId) {
        this.addNotification('review_reminder', { orderId });
    },

    setupStockAlerts() {
        const products = JSON.parse(localStorage.getItem('shopnext_products') || '[]');
        const lowStockProducts = products.filter(p => p.stock !== undefined && p.stock > 0 && p.stock <= 5);
        if (lowStockProducts.length > 0) {
            const lastCheck = localStorage.getItem('shopnext_stock_alert_check');
            const now = Date.now();
            if (!lastCheck || now - parseInt(lastCheck) > 3600000) {
                lowStockProducts.forEach(p => this.sendLowStockAlert(p.name, p.stock));
                localStorage.setItem('shopnext_stock_alert_check', now.toString());
            }
        }
    },

    setupPriceDropAlerts() {
        const priceHistory = JSON.parse(localStorage.getItem('shopnext_price_history') || '{}');
        const products = JSON.parse(localStorage.getItem('shopnext_products') || '[]');
        const lastCheck = localStorage.getItem('shopnext_price_drop_check');
        const now = Date.now();
        if (!lastCheck || now - parseInt(lastCheck) > 3600000) {
            products.forEach(p => {
                const oldPrice = priceHistory[p.id];
                if (oldPrice && p.price < oldPrice) {
                    this.sendPriceDrop(p.name, oldPrice, p.price);
                }
                priceHistory[p.id] = p.price;
            });
            localStorage.setItem('shopnext_price_history', JSON.stringify(priceHistory));
            localStorage.setItem('shopnext_price_drop_check', now.toString());
        }
    }
};

document.addEventListener('click', () => {
    const panel = document.getElementById('notifications-panel');
    if (panel) panel.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', () => EmailNotifications.init());
