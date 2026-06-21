let cart = JSON.parse(localStorage.getItem('shopnext_cart')) || [];

const NO_IMG_CART = "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 fill=%22%23e9ecef%22%3E%3Crect width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2255%22 font-size=%2212%22 fill=%22%23adb5bd%22 text-anchor=%22middle%22%3EImg%3C/text%3E%3C/svg%3E";

function getCartItemImage(item) {
    if (item.image && item.image !== 'undefined' && item.image !== 'null') return item.image;
    if (item.images && item.images[0]) return item.images[0];
    try {
        const products = JSON.parse(localStorage.getItem('shopnext_products') || '[]');
        const product = products.find(p => p.id === item.id);
        if (product) {
            if (product.images && product.images[0]) return product.images[0];
            if (product.image) return product.image;
        }
    } catch(e) {}
    return NO_IMG_CART;
}

function saveCart() {
    localStorage.setItem('shopnext_cart', JSON.stringify(cart));
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('#cart-count').forEach(el => {
        el.textContent = count;
    });
}

function updateQuantity(itemId, change) {
    const item = cart.find(item => item.id === itemId);
    if (!item) return;

    item.quantity = Math.max(1, item.quantity + change);
    saveCart();
    renderCart();
}

function removeItem(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCart();
    renderCart();
    showNotification('Item removed from cart');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
        color: #fff;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(231, 76, 60, 0.3);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
    `;
    notification.innerHTML = `<i class="fas fa-check-circle"></i> ${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function renderCart() {
    const container = document.getElementById('cart-items');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added anything to your cart yet.</p>
                <a href="index.html">Start Shopping</a>
            </div>
        `;
        updateSummary();
        return;
    }

    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-product">
                <div class="cart-product-image">
                    <img src="${getCartItemImage(item)}" alt="${item.name}" onerror="this.src='${NO_IMG_CART}'">
                </div>
                <div class="cart-product-info">
                    <h4>${item.name}</h4>
                    <p>SKU: ${String(item.id).padStart(6, '0')}</p>
                </div>
            </div>
            <div class="cart-price">$${item.price.toFixed(2)}</div>
            <div class="cart-quantity">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <input type="number" class="qty-input" value="${item.quantity}" min="1" max="99" onchange="updateQuantity(${item.id}, this.value - ${item.quantity})">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <div class="cart-subtotal">$${(item.price * item.quantity).toFixed(2)}</div>
            <button class="cart-remove" onclick="removeItem(${item.id})">
                <i class="fas fa-trash-alt"></i>
            </button>
        </div>
    `).join('');

    updateSummary();
}

function updateSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 9.99;
    const tax = subtotal * 0.13;
    const total = subtotal + shipping + tax;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
    updateCartCount();

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100px); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});
