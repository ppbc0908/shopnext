const defaultProducts = [
    {
        id: 1,
        name: "Premium Wireless Noise-Cancelling Headphones",
        category: "Electronics",
        price: 299.99,
        originalPrice: 399.99,
        images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop"],
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
        images: ["https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop"],
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
        images: ["https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=600&h=600&fit=crop"],
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
        images: ["https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&h=600&fit=crop"],
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
        images: ["https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop"],
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
        images: ["https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop"],
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
        images: ["https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop"],
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
        images: ["https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop"],
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
        } else if (products.length > 0) {
            FirebaseService.saveAllProducts(products).catch(e => console.warn('Firebase seed failed:', e));
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
