const defaultProducts = [];
const NO_IMG = "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 fill=%22%23e9ecef%22%3E%3Crect width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22210%22 font-size=%2222%22 fill=%22%23adb5bd%22 text-anchor=%22middle%22%3ENo Image%3C/text%3E%3C/svg%3E";

let products = [];
let cart = JSON.parse(localStorage.getItem('shopnext_cart')) || [];
let currentSlide = 0;

function loadProducts() {
    try {
        const saved = localStorage.getItem('shopnext_products');
        if (saved) {
            products = JSON.parse(saved);
        } else {
            products = defaultProducts;
            localStorage.setItem('shopnext_products', JSON.stringify(products));
        }
    } catch (e) {
        products = defaultProducts;
    }
}

function syncProductsFromFirebase() {
    if (typeof FirebaseService === 'undefined' || !FirebaseService.init()) return;
    FirebaseService.getProducts().then(fbProducts => {
        if (fbProducts && fbProducts.length > 0) {
            products = fbProducts;
            localStorage.setItem('shopnext_products', JSON.stringify(products));
            renderProducts(products);
            renderRecentlyViewedHome();
        }
    }).catch(e => console.warn('Firebase sync failed:', e));
}

function syncReviewsFromFirebase() {
    if (typeof FirebaseService === 'undefined' || !FirebaseService.isReady()) return;
    FirebaseService.getReviews().then(fbReviews => {
        if (fbReviews && fbReviews.length > 0) {
            const allReviews = {};
            fbReviews.forEach(doc => {
                if (doc.reviews) allReviews[doc.productId] = doc.reviews;
            });
            localStorage.setItem('shopnext_reviews', JSON.stringify(allReviews));
        }
    }).catch(e => console.warn('Firebase reviews sync failed:', e));
}

function getActiveProducts() {
    return products.filter(p => p.status === 'active');
}

function saveCart() {
    localStorage.setItem('shopnext_cart', JSON.stringify(cart));
    updateCartCount();
}

function addToCart(productId, e) {
    if (e) e.stopPropagation();
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: (product.images && product.images[0]) || product.image,
            quantity: 1
        });
    }

    saveCart();
    showNotification(`${product.name} added to cart!`);
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('#cart-count').forEach(el => {
        el.textContent = count;
    });
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #27ae60 0%, #2ecc71 100%);
        color: #fff;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(39, 174, 96, 0.3);
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

function renderProducts(productsToRender) {
    const container = document.getElementById('featured-products');
    if (!container) return;

    const activeProducts = productsToRender.filter(p => p.status === 'active').slice(0, 4);
    
    if (activeProducts.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #888; grid-column: 1/-1; padding: 40px;">No products available yet. Check back soon!</p>';
        return;
    }

    container.innerHTML = activeProducts.map(product => {
        const discount = Math.round((1 - product.price / product.originalPrice) * 100);
        const img = (product.images && product.images[0]) || product.image || '';
        
        return `
            <div class="product-card">
                <a href="product.html?id=${product.id}" class="product-link">
                    <div class="product-image">
                        <img src="${img}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src=NO_IMG">
                        <span class="product-badge">${product.badge || 'New'}</span>
                        <button class="product-wishlist" onclick="event.preventDefault(); event.stopPropagation();">
                            <i class="far fa-heart"></i>
                        </button>
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        <div class="product-rating">
                            <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span>
                            <span class="rating-count">(${product.reviews})</span>
                        </div>
                        <div class="product-price">
                            <span class="current-price">$${product.price.toFixed(2)}</span>
                            <span class="original-price">$${product.originalPrice.toFixed(2)}</span>
                            <span class="discount-badge">-${discount}%</span>
                        </div>
                    </div>
                </a>
                <div class="product-actions">
                    <button class="add-to-cart" onclick="addToCart(${product.id}, event)">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                    <a href="product.html?id=${product.id}" class="view-details-btn">
                        <i class="fas fa-eye"></i> View
                    </a>
                </div>
            </div>
        `;
    }).join('');
}

function renderPromotions() {
    const banner = document.getElementById('promotions-banner');
    if (!banner) return;
    let promo = null;
    try { promo = JSON.parse(localStorage.getItem('shopnext_promotions') || 'null'); } catch(e) {}
    if (!promo || !promo.title) {
        banner.innerHTML = '<div class="promotions-banner-empty"><h3>Welcome to ShopNext</h3><p>Amazing deals coming soon — stay tuned!</p></div>';
        return;
    }
    banner.innerHTML = `
        <div class="promotions-banner-content">
            <span class="promotions-banner-tag">${promo.tag || 'Limited Time'}</span>
            <h3>${promo.title}</h3>
            <p>${promo.description || ''}</p>
        </div>
        ${promo.link ? '<a href="' + promo.link + '" class="promotions-banner-btn">Shop Now</a>' : '<span class="promotions-banner-btn">Shop Now</span>'}
    `;
}

function startHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length <= 1) return;

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        slides.forEach((slide, index) => {
            slide.style.opacity = index === currentSlide ? '1' : '0';
            slide.style.zIndex = index === currentSlide ? '1' : '0';
        });
    }, 5000);
}

function initAnimations() {
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
        @keyframes fadeInUp {
            from { transform: translateY(30px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
}

function performSearch() {
    const input = document.getElementById('search-input');
    if (!input) return;
    const query = input.value.trim();
    if (query) {
        window.location.href = 'search.html?q=' + encodeURIComponent(query);
    }
}

function renderRecentlyViewedHome() {
    const container = document.getElementById('recently-viewed-home');
    const grid = document.getElementById('recently-viewed-grid');
    if (!container || !grid) return;
    let history = [];
    try { history = JSON.parse(localStorage.getItem('shopnext_recently_viewed') || '[]'); } catch(e) {}
    const prods = history.map(id => products.find(p => p.id === id)).filter(Boolean).slice(0, 8);
    if (prods.length === 0) { container.style.display = 'none'; return; }
    container.style.display = 'block';
    grid.innerHTML = prods.map(p => {
        const discount = Math.round((1 - p.price / p.originalPrice) * 100);
        return `<div class="product-card"><a href="product.html?id=${p.id}" class="product-link"><div class="product-image"><img src="${p.images ? p.images[0] : p.image}" alt="${p.name}" loading="lazy" onerror="this.onerror=null;this.src=NO_IMG"><span class="product-badge">${p.badge || 'Viewed'}</span></div><div class="product-info"><h3 class="product-title">${p.name}</h3><div class="product-price"><span class="current-price">$${p.price.toFixed(2)}</span><span class="original-price">$${p.originalPrice.toFixed(2)}</span><span class="discount-badge">-${discount}%</span></div></div></a></div>`;
    }).join('');
}

window.addEventListener('storage', function(e) {
    if (e.key === 'shopnext_products') {
        loadProducts();
        renderProducts(products);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    renderProducts(products);
    renderPromotions();
    updateCartCount();
    startHeroSlider();
    initAnimations();
    renderRecentlyViewedHome();
    syncProductsFromFirebase();
    syncReviewsFromFirebase();
});
