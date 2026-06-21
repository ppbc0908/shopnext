const NO_IMG_P = "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22 fill=%22%23e9ecef%22%3E%3Crect width=%22400%22 height=%22400%22/%3E%3Ctext x=%22200%22 y=%22210%22 font-size=%2222%22 fill=%22%23adb5bd%22 text-anchor=%22middle%22%3ENo Image%3C/text%3E%3C/svg%3E";
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
        description: "Experience crystal-clear audio with active noise cancellation and 30-hour battery life. Perfect for commuting, working, or relaxing at home.",
        detailedDescription: "The Premium Wireless Noise-Cancelling Headphones represent the pinnacle of audio engineering. Featuring our proprietary Hybrid ANC technology, these headphones deliver an unparalleled listening experience. The custom-tuned 40mm drivers reproduce every nuance of your music with stunning clarity, while the advanced noise cancellation blocks out the world around you. Whether you're on a busy commute, in a noisy office, or simply want to immerse yourself in your favorite music, these headphones provide the perfect sanctuary of sound.",
        status: "active",
        stock: 45,
        seller: "AudioTech Official",
        brand: "AudioTech",
        brandStory: "AudioTech has been at the forefront of audio innovation since 2010. Our mission is to create premium audio products that combine cutting-edge technology with exceptional comfort. Every product undergoes rigorous testing to ensure it meets our exacting standards for sound quality and durability.",
        mediaFeatures: ["TechRadar", "Wired", "Engadget"],
        certifications: ["ISO 27001", "SOC 2"],
        productVideos: [],
        about: [
            "Active Noise Cancellation blocks external sounds for immersive listening",
            "30-hour battery life with quick charge (5 min = 3 hours playback)",
            "Premium 40mm drivers deliver rich, detailed sound",
            "Comfortable over-ear design with memory foam cushions",
            "Built-in microphone for crystal-clear hands-free calls",
            "Foldable design with carrying case for easy travel"
        ],
        specs: {
            "Brand": "AudioTech",
            "Model": "AT-NC500",
            "Connectivity": "Bluetooth 5.0",
            "Battery Life": "30 hours",
            "Weight": "250g",
            "Driver Size": "40mm",
            "Frequency Response": "20Hz - 20kHz",
            "Noise Cancellation": "Hybrid ANC"
        }
    },
    {
        id: 2,
        name: "4K Ultra HD Smart TV 55 inch",
        category: "Electronics",
        price: 499.99,
        originalPrice: 699.99,
        images: [
            "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=600&h=600&fit=crop"
        ],
        rating: 4.6,
        reviews: 189,
        badge: "Sale",
        description: "Stunning 4K picture quality with smart TV features and voice control. Experience entertainment like never before.",
        status: "active",
        stock: 12,
        seller: "VisionPlus Store",
        about: [
            "True 4K UHD resolution (3840 x 2160) for stunning clarity",
            "HDR10+ support for vibrant colors and deep contrast",
            "Built-in voice assistant with remote control",
            "Access to 500+ streaming apps including Netflix, Disney+",
            "3 HDMI ports and 2 USB ports for connectivity",
            "Sleek bezel-less design enhances any room"
        ],
        specs: {
            "Brand": "VisionPlus",
            "Resolution": "3840 x 2160 (4K)",
            "Screen Size": "55 inches",
            "HDR": "HDR10+",
            "Smart TV": "Yes",
            "HDMI Ports": "3",
            "Refresh Rate": "120Hz",
            "Audio": "20W Dolby Atmos"
        }
    },
    {
        id: 3,
        name: "Building Blocks Creative Set 1000 Pieces",
        category: "Toys & Hobbies",
        price: 49.99,
        originalPrice: 69.99,
        images: [
            "https://images.unsplash.com/photo-1587654780291-39c9404d7dd0?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=600&fit=crop"
        ],
        rating: 4.9,
        reviews: 412,
        badge: "Top Rated",
        description: "Unleash creativity with 1000 colorful building blocks for endless fun. Compatible with all major brands.",
        status: "active",
        stock: 128,
        seller: "PlayTime Toys",
        about: [
            "1000 pieces in 20+ vibrant colors for maximum creativity",
            "Compatible with all major building block brands",
            "Made from BPA-free, non-toxic ABS plastic",
            "Compatible with baseplates for stable constructions",
            "Includes idea booklet with 15 starter designs",
            "Perfect for ages 4 and up - great for family bonding"
        ],
        specs: {
            "Brand": "BlockMaster",
            "Piece Count": "1000",
            "Material": "ABS Plastic",
            "Age Range": "4+",
            "Colors": "20+",
            "Compatible": "All major brands",
            "Weight": "1.2 kg",
            "Includes": "Idea booklet"
        }
    },
    {
        id: 4,
        name: "Remote Control Racing Car",
        category: "Toys & Hobbies",
        price: 79.99,
        originalPrice: 99.99,
        images: [
            "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1581235707186-8d1e8f61e101?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?w=600&h=600&fit=crop"
        ],
        rating: 4.5,
        reviews: 156,
        badge: "New",
        description: "High-speed RC car with realistic controls and durable design. Perfect for indoor and outdoor racing.",
        status: "active",
        stock: 34,
        seller: "SpeedZone RC",
        about: [
            "Reaches speeds up to 30 mph for thrilling racing action",
            "2.4GHz frequency for interference-free control",
            "All-terrain tires for indoor and outdoor use",
            "Rechargeable battery provides 20+ minutes of play",
            "Shock-absorbing suspension for smooth rides",
            "Durable construction survives crashes and bumps"
        ],
        specs: {
            "Brand": "SpeedZone",
            "Scale": "1:16",
            "Speed": "30 mph",
            "Control": "2.4GHz",
            "Battery": "Li-ion 7.4V",
            "Run Time": "20+ minutes",
            "Charge Time": "2 hours",
            "Range": "100m"
        }
    },
    {
        id: 5,
        name: "Professional Yoga Mat with Carrying Strap",
        category: "Health & Fitness",
        price: 39.99,
        originalPrice: 59.99,
        images: [
            "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=600&fit=crop"
        ],
        rating: 4.7,
        reviews: 328,
        badge: "Best Value",
        description: "Non-slip, eco-friendly yoga mat perfect for all types of exercises. Includes carrying strap for easy transport.",
        status: "active",
        stock: 89,
        seller: "YogaLife Store",
        about: [
            "6mm thick provides excellent cushioning for joints",
            "Non-slip surface ensures stability during poses",
            "Made from eco-friendly TPE material (PVC-free)",
            "Lightweight and easy to roll up for transport",
            "Includes adjustable carrying strap",
            "Easy to clean - just wipe with damp cloth"
        ],
        specs: {
            "Brand": "YogaLife",
            "Material": "TPE",
            "Thickness": "6mm",
            "Dimensions": "183cm x 61cm",
            "Weight": "1.2 kg",
            "Eco-Friendly": "Yes (PVC-free)",
            "Non-Slip": "Yes",
            "Includes": "Carrying strap"
        }
    },
    {
        id: 6,
        name: "Adjustable Dumbbell Set 50 lbs",
        category: "Health & Fitness",
        price: 199.99,
        originalPrice: 299.99,
        images: [
            "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=600&h=600&fit=crop"
        ],
        rating: 4.8,
        reviews: 203,
        badge: "Popular",
        description: "Space-saving adjustable dumbbells for your home gym workouts. Quick weight adjustment system.",
        status: "active",
        stock: 23,
        seller: "FitGear Pro",
        about: [
            "Adjustable from 5 to 50 lbs per dumbbell",
            "Quick-change weight selection system",
            "Replaces 15 sets of traditional dumbbells",
            "Compact design saves home gym space",
            "Ergonomic grip for comfortable workouts",
            "Includes storage trays for easy organization"
        ],
        specs: {
            "Brand": "FitGear",
            "Weight Range": "5-50 lbs each",
            "Increments": "5 lbs",
            "Grip": "Textured rubber",
            "Dimensions": "16\" x 8\" x 9\"",
            "Replaces": "15 dumbbell pairs",
            "Material": "Steel plates",
            "Includes": "2 storage trays"
        }
    },
    {
        id: 7,
        name: "Indoor Herb Garden Kit with LED Grow Lights",
        category: "Home & Garden",
        price: 59.99,
        originalPrice: 79.99,
        images: [
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=600&h=600&fit=crop"
        ],
        rating: 4.6,
        reviews: 167,
        badge: "Trending",
        description: "Grow fresh herbs year-round with this complete indoor garden system. Includes LED grow lights and seeds.",
        status: "active",
        stock: 56,
        seller: "GreenThumb Co.",
        about: [
            "Complete kit with everything you need to start growing",
            "Full-spectrum LED lights for healthy plant growth",
            "Self-watering system reduces maintenance",
            "Includes 6 herb seed pods (basil, mint, cilantro, etc.)",
            "Compact design fits on any countertop",
            "Grows herbs 3x faster than traditional methods"
        ],
        specs: {
            "Brand": "GreenThumb",
            "Pod Capacity": "6 pods",
            "Light Type": "Full-spectrum LED",
            "Light Timer": "Adjustable (8/12/16 hours)",
            "Water Capacity": "1.5 liters",
            "Dimensions": "13\" x 7\" x 12\"",
            "Power": "20W",
            "Includes": "6 seed pods, nutrients"
        }
    },
    {
        id: 8,
        name: "Smart Home Security Camera System",
        category: "Home & Garden",
        price: 149.99,
        originalPrice: 199.99,
        images: [
            "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=600&h=600&fit=crop",
            "https://images.unsplash.com/photo-1549317661-bd32c8ce0afa?w=600&h=600&fit=crop"
        ],
        rating: 4.7,
        reviews: 289,
        badge: "Editor's Choice",
        description: "Keep your home safe with 24/7 monitoring and mobile alerts. Easy installation and setup.",
        status: "active",
        stock: 67,
        seller: "SecureHome Tech",
        about: [
            "1080p Full HD video with night vision",
            "Motion detection with smart alerts to your phone",
            "Two-way audio for communication",
            "Weather-resistant for indoor/outdoor use",
            "Cloud and local storage options",
            "Easy DIY installation in minutes"
        ],
        specs: {
            "Brand": "SecureHome",
            "Resolution": "1080p Full HD",
            "Night Vision": "Yes (30ft range)",
            "Field of View": "140掳",
            "Connectivity": "Wi-Fi 2.4GHz",
            "Storage": "Cloud + microSD",
            "Power": "USB or battery",
            "Weather Rating": "IP65"
        }
    }
];

let products = [];
let cart = JSON.parse(localStorage.getItem('shopnext_cart')) || [];
let currentProduct = null;
let quantity = 1;

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

function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const bgColor = type === 'success' ? 'linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)' : 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: #fff;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 500;
    `;
    notification.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function updateQuantity(change) {
    quantity = Math.max(1, Math.min(99, quantity + change));
    document.getElementById('quantity-input').value = quantity;
}

function renderProductDetail(product) {
    if (!product) return;

    const images = product.images || [product.image];
    
    let reviewCount = 0;
    let avgRating = product.rating || 0;
    try {
        const allReviews = JSON.parse(localStorage.getItem('shopnext_reviews') || '{}');
        const pid = String(product.id);
        if (allReviews[pid] && allReviews[pid].length > 0) {
            reviewCount = allReviews[pid].length;
            avgRating = (allReviews[pid].reduce((s, r) => s + r.rating, 0) / reviewCount).toFixed(1);
        }
    } catch (e) {}
    
    document.title = `${product.name} - ShopNext`;
    
    document.getElementById('breadcrumb-product').textContent = product.name;
    document.getElementById('product-badge').textContent = product.badge || 'New';
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-stars').textContent = '★'.repeat(Math.floor(avgRating)) + '★'.repeat(5 - Math.floor(avgRating));
    document.getElementById('product-rating-text').textContent = `${avgRating} (${reviewCount} reviews)`;
    document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;
    document.getElementById('product-original-price').textContent = `$${(product.originalPrice || product.price).toFixed(2)}`;
    
    const savings = (product.originalPrice || product.price) - product.price;
    document.getElementById('product-save').textContent = `You save $${savings.toFixed(2)}`;
    document.getElementById('product-description').textContent = product.description || '';
    document.getElementById('main-product-image').src = images[0];
    document.getElementById('main-product-image').alt = product.name;
    document.getElementById('main-product-image').onerror = function() { this.onerror=null; this.src = NO_IMG_P; };

    const thumbnailList = document.getElementById('thumbnail-list');
    if (thumbnailList) {
        thumbnailList.innerHTML = images.map((img, index) => `
            <div class="thumbnail ${index === 0 ? 'active' : ''}" onclick="changeImage(${index})">
                <img src="${img}" alt="${product.name} ${index + 1}">
            </div>
        `).join('');
    }

    renderDeliveryInfo(product);
    renderSellerInfo(product);
    renderOptionsSection(product);
    renderBrandStory(product);
    renderProductDescription(product);
    renderProductVideos(product);
    renderAboutSection(product);
    renderSpecsTable(product);
    renderBoughtTogether(product);
    renderCompareSection(product);
    checkWishlist(product.id);
    renderMagnifier();
    renderVideoBtn(product);
    renderCouponBadge(product);
    renderSocialProof(product);
    renderBrandLink(product);
    renderShippingCost(product);
    renderWarrantySection(product);
    renderBrowseHistory(product);
    saveToBrowseHistory(product.id);
}

function renderOptionsSection(product) {
    const optionsContainer = document.querySelector('.product-options');
    if (!optionsContainer) return;
    
    if (product.options && product.options.length > 0) {
        optionsContainer.style.display = 'block';
        const select = document.getElementById('option-select');
        select.innerHTML = product.options.map((opt, i) => 
            `<option value="${opt.toLowerCase().replace(/\s+/g, '-')}">${opt}</option>`
        ).join('');
    } else {
        optionsContainer.style.display = 'none';
    }
}

function renderDeliveryInfo(product) {
    const today = new Date();
    const deliveryDays = product.stock > 20 ? 3 : 5;
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + deliveryDays);
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    
    document.getElementById('delivery-date').textContent = 
        `Get it by ${deliveryDate.toLocaleDateString('en-US', options)}`;
    
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 0);
    const hoursLeft = Math.floor((endOfDay - now) / (1000 * 60 * 60));
    const minutesLeft = Math.floor(((endOfDay - now) % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('time-left').textContent = `${hoursLeft}h ${minutesLeft}m`;
}

function renderStockStatus(product) {
    const stockEl = document.getElementById('stock-status');
    const stockText = document.getElementById('stock-text');
    
    if (product.stock > 20) {
        stockEl.className = 'stock-status in-stock';
        stockText.textContent = `In Stock (${product.stock} available)`;
    } else if (product.stock > 0) {
        stockEl.className = 'stock-status low-stock';
        stockText.textContent = `Only ${product.stock} left in stock - order soon`;
    } else {
        stockEl.className = 'stock-status out-of-stock';
        stockText.textContent = 'Out of Stock';
    }
}

function renderSellerInfo(product) {
    document.getElementById('seller-name').textContent = product.seller || 'ShopNext Direct';
}

function renderAboutSection(product) {
    const aboutList = document.getElementById('about-items');
    if (product.about && product.about.length > 0) {
        aboutList.innerHTML = product.about.map(item => `<li>${item}</li>`).join('');
    } else {
        aboutList.innerHTML = `<li>${product.description}</li>`;
    }
}

function renderBrandStory(product) {
    const section = document.getElementById('brand-story-section');
    const storyText = document.getElementById('brand-story-text');
    const logoDisplay = document.getElementById('brand-logo-display');
    const mediaDisplay = document.getElementById('media-features-display');
    const certsDisplay = document.getElementById('certifications-display');

    if (product.brandStory || product.brandLogo || (product.mediaFeatures && product.mediaFeatures.length > 0) || (product.certifications && product.certifications.length > 0)) {
        section.style.display = 'block';
        
        if (product.brandLogo) {
            logoDisplay.innerHTML = `<img src="${product.brandLogo}" alt="${product.brand} logo" style="max-height:60px;margin-bottom:15px;">`;
        } else {
            logoDisplay.innerHTML = '';
        }

        if (product.brandStory) {
            storyText.textContent = product.brandStory;
        } else {
            storyText.textContent = `Discover the quality and innovation behind ${product.brand || 'this product'}. Trusted by thousands of customers worldwide.`;
        }

        if (product.mediaFeatures && product.mediaFeatures.length > 0) {
            mediaDisplay.innerHTML = `<div class="media-badges">${product.mediaFeatures.map(m => `<span class="media-badge">Featured in ${m}</span>`).join('')}</div>`;
        } else {
            mediaDisplay.innerHTML = '';
        }

        if (product.certifications && product.certifications.length > 0) {
            certsDisplay.innerHTML = `<div class="cert-badges">${product.certifications.map(c => `<span class="cert-badge"><i class="fas fa-shield-alt"></i> ${c}</span>`).join('')}</div>`;
        } else {
            certsDisplay.innerHTML = '';
        }
    } else {
        section.style.display = 'none';
    }
}

function renderProductDescription(product) {
    const section = document.getElementById('product-description-section');
    const content = document.getElementById('detailed-description-content');

    if (product.detailedDescription) {
        section.style.display = 'block';
        content.innerHTML = product.detailedDescription;
    } else if (product.description) {
        section.style.display = 'block';
        content.innerHTML = `<p>${product.description}</p>`;
    } else {
        section.style.display = 'none';
    }
}

function renderProductVideos(product) {
    const section = document.getElementById('product-videos-section');
    const grid = document.getElementById('product-videos-grid');

    if (product.productVideos && product.productVideos.length > 0) {
        section.style.display = 'block';
        grid.innerHTML = product.productVideos.map(video => {
            if (video.includes('youtube') || video.includes('youtu.be')) {
                const videoId = video.match(/(?:v=|\/)([a-zA-Z0-9_-]{11})/)?.[1] || '';
                return `<div class="video-item"><iframe src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe></div>`;
            } else {
                return `<div class="video-item"><video controls src="${video}"></video></div>`;
            }
        }).join('');
    } else {
        section.style.display = 'none';
    }
}

function renderSpecsTable(product) {
    const specsTable = document.getElementById('specs-table');
    if (product.specs && Object.keys(product.specs).length > 0) {
        specsTable.innerHTML = Object.entries(product.specs).map(([key, value]) => `
            <tr><td>${key}</td><td>${value}</td></tr>
        `).join('');
    } else {
        specsTable.innerHTML = `
            <tr><td>Category</td><td>${product.category}</td></tr>
            <tr><td>Availability</td><td>${product.stock > 0 ? 'In Stock' : 'Out of Stock'}</td></tr>
            <tr><td>Shipping</td><td>Free shipping on orders over $50</td></tr>
        `;
    }
}

function renderBoughtTogether(product) {
    const container = document.getElementById('bought-together-list');
    const sameCategory = products.filter(p => 
        p.category === product.category && p.id !== product.id && p.status === 'active'
    ).slice(0, 2);
    
    const extraProducts = sameCategory.length >= 2 ? sameCategory : 
        products.filter(p => p.id !== product.id && p.status === 'active').slice(0, 2);
    
    let totalPrice = product.price;
    let items = [{ ...product, current: true }, ...extraProducts];
    extraProducts.forEach(p => totalPrice += p.price);
    
    container.innerHTML = items.map(item => `
        <div class="bought-together-item">
            <img src="${(item.images && item.images[0]) || item.image}" alt="${item.name}">
            <div class="bought-together-info">
                <h4>${item.name}</h4>
                <div class="rating">${'★'.repeat(Math.floor(item.rating))}${'★'.repeat(5 - Math.floor(item.rating))} (${item.reviews})</div>
                <div class="price">$${item.price.toFixed(2)}</div>
            </div>
        </div>
    `).join('');
    
    document.getElementById('bought-together-price').textContent = `$${totalPrice.toFixed(2)}`;
    
    document.getElementById('add-all-cart-btn').onclick = function() {
        extraProducts.forEach(p => {
            const existingItem = cart.find(item => item.id === p.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    image: (p.images && p.images[0]) || p.image,
                    quantity: 1
                });
            }
        });
        saveCart();
        showNotification('All items added to cart!');
    };
}

function renderCompareSection(product) {
    const container = document.getElementById('compare-table');
    const similar = products.filter(p => 
        p.category === product.category && p.status === 'active'
    ).slice(0, 4);
    
    if (!similar.find(p => p.id === product.id)) {
        similar.unshift(product);
    }
    
    container.innerHTML = similar.map(item => `
        <div class="compare-card ${item.id === product.id ? 'current' : ''}">
            <img src="${(item.images && item.images[0]) || item.image}" alt="${item.name}">
            <h4>${item.name}</h4>
            <div class="rating">${'★'.repeat(Math.floor(item.rating))}${'★'.repeat(5 - Math.floor(item.rating))} (${item.reviews})</div>
            <div class="price">$${item.price.toFixed(2)}</div>
            <button class="btn-compare" onclick="window.location.href='product.html?id=${item.id}'">
                ${item.id === product.id ? 'Current' : 'View Details'}
            </button>
        </div>
    `).join('');
}

function checkWishlist(productId) {
    const wishlist = JSON.parse(localStorage.getItem('shopnext_wishlist') || '[]');
    const btn = document.getElementById('wishlist-btn');
    if (wishlist.includes(productId)) {
        btn.innerHTML = '<i class="fas fa-heart"></i> In Wishlist';
        btn.classList.add('active');
    } else {
        btn.innerHTML = '<i class="far fa-heart"></i> Add to Wishlist';
        btn.classList.remove('active');
    }
}

function toggleWishlist() {
    if (!currentProduct) return;
    const wishlist = JSON.parse(localStorage.getItem('shopnext_wishlist') || '[]');
    const index = wishlist.indexOf(currentProduct.id);
    
    if (index === -1) {
        wishlist.push(currentProduct.id);
        showNotification('Added to Wishlist!');
    } else {
        wishlist.splice(index, 1);
        showNotification('Removed from Wishlist');
    }
    
    localStorage.setItem('shopnext_wishlist', JSON.stringify(wishlist));
    checkWishlist(currentProduct.id);
}

function shareProduct() {
    if (!currentProduct) return;
    const url = window.location.href;
    const title = currentProduct.name;
    const text = 'Check out this product: ' + currentProduct.name;
    
    const modal = document.getElementById('share-modal');
    if (modal) {
        document.getElementById('share-product-name').textContent = title;
        document.getElementById('share-url-input').value = url;
        document.getElementById('share-whatsapp').href = 'https://wa.me/?text=' + encodeURIComponent(text + ' ' + url);
        document.getElementById('share-facebook').href = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(url);
        document.getElementById('share-twitter').href = 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(text) + '&url=' + encodeURIComponent(url);
        document.getElementById('share-pinterest').href = 'https://pinterest.com/pin/create/button/?url=' + encodeURIComponent(url) + '&description=' + encodeURIComponent(text);
        document.getElementById('share-email').href = 'mailto:?subject=' + encodeURIComponent(title) + '&body=' + encodeURIComponent(text + '\n\n' + url);
        modal.style.display = 'flex';
    }
}

function closeShareModal() {
    document.getElementById('share-modal').style.display = 'none';
}

function toggleCompare() {
    if (!currentProduct) return;
    let list = JSON.parse(localStorage.getItem('shopnext_compare_list') || '[]');
    const idx = list.indexOf(currentProduct.id);
    if (idx === -1) {
        if (list.length >= 5) {
            showNotification('Maximum 5 products for comparison', 'error');
            return;
        }
        list.push(currentProduct.id);
        showNotification('Added to comparison!');
    } else {
        list.splice(idx, 1);
        showNotification('Removed from comparison');
    }
    localStorage.setItem('shopnext_compare_list', JSON.stringify(list));
    updateCompareButton(currentProduct.id);
}

function updateCompareButton(productId) {
    const btn = document.getElementById('compare-btn');
    if (!btn) return;
    const list = JSON.parse(localStorage.getItem('shopnext_compare_list') || '[]');
    const isInCompare = list.includes(productId);
    btn.innerHTML = isInCompare ?
        '<i class="fas fa-check"></i> In Compare' :
        '<i class="fas fa-columns"></i> Compare';
    btn.style.color = isInCompare ? '#27ae60' : '';
}

function shareToWechat() {
    const url = window.location.href;
    const qrCanvas = document.createElement('canvas');
    const qrUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(url);
    document.getElementById('share-qr-img').src = qrUrl;
    document.getElementById('share-qr-section').style.display = 'block';
}

function copyShareLink() {
    const input = document.getElementById('share-url-input');
    input.select();
    navigator.clipboard.writeText(input.value).then(() => {
        const btn = document.getElementById('copy-link-btn');
        btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        btn.style.background = '#27ae60';
        btn.style.color = '#fff';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
            btn.style.background = '';
            btn.style.color = '';
        }, 2000);
    });
}

function changeImage(index) {
    if (!currentProduct) return;
    
    const images = currentProduct.images || [currentProduct.image];
    document.getElementById('main-product-image').src = images[index];
    
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
}

function addToCart() {
    if (!currentProduct) return;

    const img = (currentProduct.images && currentProduct.images[0]) || currentProduct.image;
    const existingItem = cart.find(item => item.id === currentProduct.id);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: currentProduct.id,
            name: currentProduct.name,
            price: currentProduct.price,
            image: img,
            quantity: quantity
        });
    }

    saveCart();
    showNotification(`Added ${quantity} ${currentProduct.name} to cart!`);
}

function buyNow() {
    addToCart();
    window.location.href = 'checkout.html';
}

window.addEventListener('storage', function(e) {
    if (e.key === 'shopnext_products') {
        loadProducts();
        const productId = parseInt(getUrlParam('id'));
        currentProduct = products.find(p => p.id === productId);
        if (currentProduct) {
            renderProductDetail(currentProduct);
        }
    }
});

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    
    const productId = parseInt(getUrlParam('id'));
    currentProduct = products.find(p => p.id === productId);
    
    if (currentProduct) {
        renderProductDetail(currentProduct);
        const iframe = document.getElementById('reviews-iframe');
        if (iframe) {
            iframe.src = 'reviews.html?productId=' + productId;
        }
        if (typeof UserSystem !== 'undefined') {
            UserSystem.addToRecentlyViewed(productId);
        }
        updateCompareButton(productId);
    } else {
        document.querySelector('.product-detail-container').innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px;">
                <i class="fas fa-exclamation-triangle" style="font-size: 60px; color: #ddd; margin-bottom: 20px;"></i>
                <h2 style="color: #333; margin-bottom: 10px;">Product Not Found</h2>
                <p style="color: #888; margin-bottom: 20px;">The product you're looking for doesn't exist or has been removed.</p>
                <a href="index.html" style="display: inline-block; padding: 12px 30px; background: #e74c3c; color: #fff; border-radius: 8px; text-decoration: none;">Back to Home</a>
            </div>
        `;
    }

    updateCartCount();

    document.getElementById('add-to-cart-btn').addEventListener('click', addToCart);
    document.getElementById('buy-now-btn').addEventListener('click', buyNow);
    document.getElementById('wishlist-btn').addEventListener('click', toggleWishlist);
    document.getElementById('share-btn').addEventListener('click', shareProduct);
    document.getElementById('quantity-input').addEventListener('change', (e) => {
        quantity = Math.max(1, Math.min(99, parseInt(e.target.value) || 1));
        e.target.value = quantity;
    });

    document.getElementById('share-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) closeShareModal();
    });

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

// ========== Image Magnifier ==========
function renderMagnifier() {
    const container = document.getElementById('main-image-container');
    const img = document.getElementById('main-product-image');
    const lens = document.getElementById('magnifier-lens');
    const result = document.getElementById('magnifier-result');
    
    if (!container || !img || !lens || !result) return;
    
    container.addEventListener('mouseenter', () => {
        lens.style.display = 'block';
        result.style.display = 'block';
        result.style.backgroundImage = `url(${img.src})`;
    });
    
    container.addEventListener('mouseleave', () => {
        lens.style.display = 'none';
        result.style.display = 'none';
    });
    
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        
        let lensX = x - 75;
        let lensY = y - 75;
        
        lensX = Math.max(0, Math.min(lensX, rect.width - 150));
        lensY = Math.max(0, Math.min(lensY, rect.height - 150));
        
        lens.style.left = lensX + 'px';
        lens.style.top = lensY + 'px';
        
        const zoom = 2.5;
        lens.style.backgroundImage = `url(${img.src})`;
        lens.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
        lens.style.backgroundPosition = `-${x * zoom - 75}px -${y * zoom - 75}px`;
        
        result.style.backgroundSize = `${rect.width * zoom}px ${rect.height * zoom}px`;
        result.style.backgroundPosition = `-${x * zoom - 200}px -${y * zoom - 200}px`;
    });
}

// ========== Video Button ==========
function renderVideoBtn(product) {
    const btn = document.getElementById('video-btn');
    if (btn && product.videoUrl) {
        btn.style.display = 'flex';
    }
}

function playVideo() {
    if (!currentProduct || !currentProduct.videoUrl) return;
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('product-video');
    video.src = currentProduct.videoUrl;
    modal.classList.add('active');
}

function closeVideo() {
    const modal = document.getElementById('video-modal');
    const video = document.getElementById('product-video');
    video.pause();
    modal.classList.remove('active');
}

// ========== Coupon Badge ==========
function renderCouponBadge(product) {
    const badge = document.getElementById('coupon-badge');
    if (!badge) return;
    
    if (product.coupon) {
        badge.style.display = 'flex';
        document.getElementById('coupon-text').textContent = product.coupon;
    } else if (product.originalPrice && product.price < product.originalPrice) {
        const discount = Math.round((1 - product.price / product.originalPrice) * 100);
        if (discount >= 10) {
            badge.style.display = 'flex';
            document.getElementById('coupon-text').textContent = `Save ${discount}% - Limited Time Offer`;
        }
    }
}

function claimCoupon() {
    const badge = document.getElementById('coupon-badge');
    badge.classList.add('claimed');
    badge.querySelector('button').textContent = '鉁?Claimed';
    badge.querySelector('button').disabled = true;
    showNotification('Coupon claimed! Discount applied at checkout.');
}

// ========== Social Proof ==========
function renderSocialProof(product) {
    const el = document.getElementById('bought-count');
    if (!el) return;
    
    const bought = product.boughtCount || Math.floor(Math.random() * 200) + 50;
    const days = Math.floor(Math.random() * 7) + 1;
    el.textContent = `${bought}+ bought in past ${days} days`;
}

// ========== Brand Link ==========
function renderBrandLink(product) {
    const el = document.getElementById('brand-link');
    if (!el || !product.brand) return;
    
    el.style.display = 'block';
    document.getElementById('brand-name').textContent = product.brand;
    document.getElementById('brand-name').href = `brand.html?brand=${encodeURIComponent(product.brand)}`;
}

// ========== Shipping Cost ==========
function renderShippingCost(product) {
    const el = document.getElementById('shipping-text');
    const detail = document.getElementById('shipping-detail');
    if (!el) return;
    
    if (product.price >= 50) {
        el.textContent = 'FREE Shipping';
        detail.textContent = 'on orders over $50';
    } else {
        const shippingCost = product.category === 'Electronics' ? 9.99 : 5.99;
        el.textContent = `$${shippingCost} Shipping`;
        detail.textContent = 'FREE shipping on orders over $50';
    }
}

// ========== Warranty Section ==========
function renderWarrantySection(product) {
    const container = document.getElementById('warranty-container');
    if (!container) return;
    
    const price = product.price || 0;
    const warrantyMonths = price > 200 ? 24 : price > 100 ? 18 : 12;
    const returnDays = price > 100 ? 30 : 15;

    container.innerHTML = `
        <div class="warranty-header">
            <div class="warranty-header-icon"><i class="fas fa-shield-alt"></i></div>
            <div>
                <h4>Warranty & Returns</h4>
                <p>Reliable after-sales protection for your purchase</p>
            </div>
        </div>
        <div class="warranty-grid">
            <div class="warranty-card">
                <div class="warranty-card-icon"><i class="fas fa-clock"></i></div>
                <h5>Warranty Period</h5>
                <p>This product is covered by a <strong>${warrantyMonths}-month</strong> manufacturer warranty from the date of purchase, covering major components and functionality.</p>
            </div>
            <div class="warranty-card">
                <div class="warranty-card-icon"><i class="fas fa-undo-alt"></i></div>
                <h5>Return & Exchange Policy</h5>
                <p>We offer a <strong>${returnDays}-day hassle-free return & exchange</strong> policy. Items must be in original packaging and condition.</p>
            </div>
        </div>
        <ul class="warranty-list">
            <li><i class="fas fa-check-circle"></i> This product comes with a <strong>${warrantyMonths}-month</strong> warranty from the date of purchase.</li>
            <li><i class="fas fa-check-circle"></i> Manufacturing defects and quality issues are covered under warranty for free repair or replacement.</li>
            <li><i class="fas fa-check-circle"></i> <strong>${returnDays}-day return & exchange</strong> policy applies. Product must be in original packaging with all accessories.</li>
            <li><i class="fas fa-check-circle"></i> Warranty does not cover damage caused by misuse, unauthorized modifications, or natural disasters.</li>
        </ul>
        <div class="warranty-note">
            <i class="fas fa-exclamation-triangle"></i>
            <strong>Please Note:</strong> Warranty does not cover damage caused by misuse, unauthorized repairs, or force majeure. For returns, items must be in original packaging with all accessories intact. Contact customer support for further assistance.
        </div>
    `;
}

// ========== Browse History ==========
function renderBrowseHistory(product) {
    const grid = document.getElementById('browse-history-grid');
    if (!grid) return;
    
    const history = JSON.parse(localStorage.getItem('shopnext_browse_history') || '[]');
    const related = products.filter(p => 
        p.id !== product.id && 
        p.status === 'active' && 
        (p.category === product.category || history.includes(p.id))
    ).slice(0, 6);
    
    if (related.length === 0) {
        grid.innerHTML = products.filter(p => p.id !== product.id && p.status === 'active').slice(0, 6).map(p => `
            <div class="history-card" onclick="window.location.href='product.html?id=${p.id}'">
                <img src="${p.images ? p.images[0] : (p.image || NO_IMG_P)}" alt="${p.name}" onerror="this.onerror=null;this.src=NO_IMG_P">
                <div class="history-card-info">
                    <h4>${p.name}</h4>
                    <div class="price">$${p.price.toFixed(2)}</div>
                </div>
            </div>
        `).join('');
        return;
    }
    
    grid.innerHTML = related.map(p => `
        <div class="history-card" onclick="window.location.href='product.html?id=${p.id}'">
            <img src="${p.images ? p.images[0] : (p.image || NO_IMG_P)}" alt="${p.name}" onerror="this.onerror=null;this.src=NO_IMG_P">
            <div class="history-card-info">
                <h4>${p.name}</h4>
                <div class="price">$${p.price.toFixed(2)}</div>
            </div>
        </div>
    `).join('');
}

function saveToBrowseHistory(productId) {
    let history = JSON.parse(localStorage.getItem('shopnext_browse_history') || '[]');
    history = history.filter(id => id !== productId);
    history.unshift(productId);
    if (history.length > 20) history = history.slice(0, 20);
    localStorage.setItem('shopnext_browse_history', JSON.stringify(history));
}
