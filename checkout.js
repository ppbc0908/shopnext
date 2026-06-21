let cart = JSON.parse(localStorage.getItem('shopnext_cart')) || [];
let selectedPayment = 'visa';
let appliedPromo = null;
let addressSelectedFromMaps = false;

const NO_IMG = "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 fill=%22%23e9ecef%22%3E%3Crect width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2255%22 font-size=%2212%22 fill=%22%23adb5bd%22 text-anchor=%22middle%22%3EImg%3C/text%3E%3C/svg%3E";

function getItemImage(item) {
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
    return NO_IMG;
}

function selectPayment(method) {
    selectedPayment = method;
    document.querySelectorAll('.payment-method').forEach(el => {
        el.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

function formatCardNumber(e) {
    let value = e.target.value.replace(/\s/g, '').replace(/\D/g, '');
    let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
    e.target.value = formattedValue;
}

function formatExpiry(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2);
    }
    e.target.value = value;
}

function applyPromoCode() {
    const input = document.getElementById('promo-input');
    const messageEl = document.getElementById('promo-message');
    const code = input.value.trim();
    
    if (!code) {
        messageEl.innerHTML = '<span style="color:#e74c3c;">Please enter a promo code</span>';
        return;
    }
    
    if (typeof UserSystem === 'undefined') {
        messageEl.innerHTML = '<span style="color:#e74c3c;">System error. Please refresh the page.</span>';
        return;
    }
    
    try {
        const result = UserSystem.validatePromoCode(code);
        if (result.valid) {
            appliedPromo = code.toUpperCase();
            messageEl.innerHTML = '<span style="color:#27ae60;"><i class="fas fa-check-circle"></i> ' + result.message + '</span>';
            input.disabled = true;
            input.style.background = '#e8f5e9';
        } else {
            messageEl.innerHTML = '<span style="color:#e74c3c;"><i class="fas fa-times-circle"></i> ' + result.message + '</span>';
            appliedPromo = null;
        }
        updateSummary();
    } catch (e) {
        messageEl.innerHTML = '<span style="color:#e74c3c;">Error validating code. Please try again.</span>';
        console.error('Promo code error:', e);
    }
}

function renderOrderItems() {
    const container = document.getElementById('order-items');
    
    if (cart.length === 0) {
        window.location.href = 'cart.html';
        return;
    }

    container.innerHTML = cart.map(function(item) {
        var imgSrc = getItemImage(item);
        return '<div class="order-item">' +
            '<div class="order-item-image">' +
            '<img src="' + imgSrc + '" alt="' + item.name + '" onerror="this.src=\'' + NO_IMG + '\'">' +
            '</div>' +
            '<div class="order-item-info">' +
            '<h4>' + item.name + '</h4>' +
            '<p>Qty: ' + item.quantity + '</p>' +
            '</div>' +
            '<div class="order-item-price">$' + (item.price * item.quantity).toFixed(2) + '</div>' +
            '</div>';
    }).join('');

    var promoInfo = document.getElementById('user-promo-info');
    if (promoInfo && typeof UserSystem !== 'undefined') {
        try {
            var userPromo = UserSystem.getUserPromoCode();
            if (userPromo) {
                if (userPromo.used) {
                    promoInfo.innerHTML = '<i class="fas fa-info-circle" style="color:#999;"></i> Your promo code has been used';
                } else {
                    promoInfo.innerHTML = '<i class="fas fa-tag" style="color:#667eea;"></i> Your promo code: <strong style="color:#667eea;cursor:pointer;" onclick="document.getElementById(\'promo-input\').value=\'' + userPromo.code + '\';applyPromoCode();">' + userPromo.code + '</strong> (10% off)';
                }
            }
        } catch (e) {
            console.error('Error loading promo code:', e);
        }
    }

    updateSummary();
}

function updateSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 9.99;
    let discount = 0;
    
    if (appliedPromo) {
        discount = subtotal * 0.1;
        document.getElementById('discount-row').style.display = 'flex';
        document.getElementById('discount').textContent = `-$${discount.toFixed(2)}`;
    } else {
        document.getElementById('discount-row').style.display = 'none';
    }
    
    const discountedSubtotal = subtotal - discount;
    const tax = discountedSubtotal * 0.13;
    const total = discountedSubtotal + shipping + tax;

    document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

const Validators = {
    name(value) {
        if (!value || value.trim().length < 2) return 'Name must be at least 2 characters';
        if (/\d/.test(value)) return 'Name cannot contain numbers';
        if (/[!@#$%^&*()_+=\[\]{};':"\\|,.<>\/?]/.test(value)) return 'Name cannot contain special characters';
        return '';
    },
    email(value) {
        if (!value) return 'Email is required';
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!re.test(value)) return 'Please enter a valid email address';
        return '';
    },
    phone(value) {
        if (!value) return 'Phone number is required';
        const cleaned = value.replace(/[\s\-\(\)\.]/g, '');
        if (!/^\+?\d{10,15}$/.test(cleaned)) return 'Please enter a valid phone number (10-15 digits)';
        return '';
    },
    address(value) {
        if (!value || value.trim().length < 5) return 'Address must be at least 5 characters';
        if (!addressSelectedFromMaps) {
            if (typeof CanadaPostConfig !== 'undefined' && CanadaPostConfig.isConfigured()) {
                return 'Please select your address from the dropdown suggestions';
            }
            if (!/\d/.test(value)) return 'Address must contain a street number';
            const cleaned = value.trim().toLowerCase();
            const streetSuffixes = 'street|st|avenue|ave|road|rd|boulevard|blvd|drive|dr|lane|ln|court|ct|place|pl|way|circle|crescent|cres|terrace|ter|parkway|pkwy|highway|hwy|trail|trl|row|loop|rancho';
            const hasSuffix = new RegExp('\\b(' + streetSuffixes + ')\\b', 'i').test(cleaned);
            if (!hasSuffix) return 'Address must include a street type (e.g. St, Ave, Blvd, Dr, Rd)';
            const afterNumber = cleaned.replace(/^\d+\s+/, '');
            if (afterNumber.length < 3) return 'Please enter a valid street name';
        }
        return '';
    },
    city(value) {
        if (!value || value.trim().length < 2) return 'City must be at least 2 characters';
        if (/\d/.test(value)) return 'City cannot contain numbers';
        return '';
    },
    postalCode(value) {
        if (!value) return 'Postal code is required';
        const cleaned = value.replace(/\s/g, '').toUpperCase();
        if (!/^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(cleaned)) {
            return 'Please enter a valid Canadian postal code (e.g. A1A 1A1)';
        }
        if (typeof PostalCodeDB !== 'undefined') {
            const province = document.getElementById('province');
            const city = document.getElementById('city');
            const provinceVal = province ? province.value : '';
            const cityVal = city ? city.value : '';
            const result = PostalCodeDB.validate(cleaned, provinceVal, cityVal);
            if (!result.valid) return result.error;
        }
        return '';
    },
    cardNumber(value) {
        const cleaned = value.replace(/\s/g, '');
        if (cleaned.length < 13 || cleaned.length > 19) return 'Card number must be 13-19 digits';
        if (!/^\d+$/.test(cleaned)) return 'Card number must contain only digits';
        let sum = 0, alternate = false;
        for (let i = cleaned.length - 1; i >= 0; i--) {
            let n = parseInt(cleaned[i], 10);
            if (alternate) { n *= 2; if (n > 9) n -= 9; }
            sum += n;
            alternate = !alternate;
        }
        if (sum % 10 !== 0) return 'Invalid card number';
        return '';
    },
    expiry(value) {
        if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(value)) return 'Please use MM/YY format';
        const [month, year] = value.split('/');
        const expDate = new Date(2000 + parseInt(year), parseInt(month));
        if (expDate <= new Date()) return 'Card has expired';
        return '';
    },
    cvv(value) {
        if (!/^\d{3,4}$/.test(value)) return 'CVV must be 3 or 4 digits';
        return '';
    }
};

function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return '';
    const value = field.value;
    if (fieldId === 'cardNumber') return Validators.cardNumber(value);
    if (fieldId === 'expiry') return Validators.expiry(value);
    if (fieldId === 'cvv') return Validators.cvv(value);
    if (fieldId === 'postalCode') return Validators.postalCode(value);
    if (fieldId === 'phone') return Validators.phone(value);
    if (fieldId === 'email') return Validators.email(value);
    if (fieldId === 'address') return Validators.address(value);
    if (fieldId === 'city') return Validators.city(value);
    if (fieldId === 'firstName' || fieldId === 'lastName' || fieldId === 'cardName') return Validators.name(value);
    if (fieldId === 'province') {
        const postalCode = document.getElementById('postalCode');
        if (postalCode && postalCode.value.trim()) {
            return Validators.postalCode(postalCode.value);
        }
    }
    return '';
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    let errorEl = field.parentElement.querySelector('.field-error');
    if (message) {
        field.style.borderColor = '#e74c3c';
        if (!errorEl) {
            errorEl = document.createElement('span');
            errorEl.className = 'field-error';
            errorEl.style.cssText = 'color:#e74c3c;font-size:12px;margin-top:4px;display:block;';
            field.parentElement.appendChild(errorEl);
        }
        errorEl.textContent = message;
    } else {
        field.style.borderColor = '#27ae60';
        if (errorEl) errorEl.remove();
    }
}

function clearFieldError(fieldId) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    field.style.borderColor = '';
    const errorEl = field.parentElement.querySelector('.field-error');
    if (errorEl) errorEl.remove();
}

function validateForm() {
    const fields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'postalCode', 'cardNumber', 'expiry', 'cvv', 'cardName'];

    for (const fieldId of fields) {
        const field = document.getElementById(fieldId);
        if (!field) continue;
        if (!field.value.trim()) {
            field.focus();
            showNotification(`Please fill in ${field.previousElementSibling ? field.previousElementSibling.textContent : fieldId}`, 'error');
            return false;
        }
    }

    for (const fieldId of fields) {
        const error = validateField(fieldId);
        if (error) {
            showFieldError(fieldId, error);
            document.getElementById(fieldId).focus();
            showNotification(error, 'error');
            return false;
        } else {
            clearFieldError(fieldId);
        }
    }

    return true;
}

async function placeOrder() {
    if (!validateForm()) return;

    const placeBtn = document.querySelector('.place-order-btn');
    if (placeBtn) {
        placeBtn.disabled = true;
        placeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    }

    const orderId = 'SN' + Date.now().toString().slice(-8);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const discount = appliedPromo ? subtotal * 0.1 : 0;
    
    const orderData = {
        id: orderId,
        orderNumber: orderId,
        items: cart,
        subtotal: subtotal,
        discount: discount,
        promoCode: appliedPromo || null,
        total: subtotal - discount,
        status: 'pending',
        shipping: {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            province: document.getElementById('province').value,
            postalCode: document.getElementById('postalCode').value,
            country: document.getElementById('country').value
        },
        payment: {
            method: selectedPayment,
            last4: document.getElementById('cardNumber').value.slice(-4)
        },
        date: new Date().toISOString()
    };

    if (appliedPromo) {
        UserSystem.usePromoCode(appliedPromo);
    }

    localStorage.setItem('shopnext_last_order', JSON.stringify(orderData));
    
    let orders = [];
    try {
        const saved = localStorage.getItem('shopnext_orders');
        orders = saved ? JSON.parse(saved) : [];
    } catch (e) { orders = []; }
    orders.unshift(orderData);
    localStorage.setItem('shopnext_orders', JSON.stringify(orders));
    
    let customers = [];
    try {
        const saved = localStorage.getItem('shopnext_customers');
        customers = saved ? JSON.parse(saved) : [];
    } catch (e) { customers = []; }
    const existingCustomer = customers.find(c => c.email === orderData.shipping.email);
    if (existingCustomer) {
        existingCustomer.orders++;
        existingCustomer.totalSpent += orderData.total;
    } else {
        customers.push({
            id: Date.now(),
            name: orderData.shipping.firstName + ' ' + orderData.shipping.lastName,
            email: orderData.shipping.email,
            phone: orderData.shipping.phone,
            address: orderData.shipping.address + ', ' + orderData.shipping.city + ', ' + orderData.shipping.province,
            orders: 1,
            totalSpent: orderData.total,
            joinDate: new Date().toISOString()
        });
    }
    localStorage.setItem('shopnext_customers', JSON.stringify(customers));
    
    cart = [];
    localStorage.setItem('shopnext_cart', JSON.stringify(cart));

    let emailResult = { success: false, simulated: true };
    try {
        if (typeof EmailService !== 'undefined') {
            emailResult = await EmailService.sendOrderConfirmation(orderData);
        }
    } catch (e) {
        console.error('Email sending error:', e);
    }

    if (typeof EmailNotifications !== 'undefined') {
        EmailNotifications.addNotification('order_confirmation', {
            orderId: orderId,
            total: orderData.total.toFixed(2),
            items: orderData.items.length
        });
    }

    orderData.emailSent = emailResult.success;
    orderData.emailSimulated = emailResult.simulated;
    orderData.emailError = emailResult.error || null;
    localStorage.setItem('shopnext_last_order', JSON.stringify(orderData));
    
    showNotification('Order placed successfully!', 'success');
    
    setTimeout(() => {
        window.location.href = 'confirmation.html';
    }, 1500);
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

document.addEventListener('DOMContentLoaded', () => {
    renderOrderItems();

    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', formatCardNumber);
    }

    const expiryInput = document.getElementById('expiry');
    if (expiryInput) {
        expiryInput.addEventListener('input', formatExpiry);
    }

    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
        });
    }

    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let v = e.target.value.replace(/\D/g, '');
            if (v.length > 0 && v.length <= 10) {
                if (v.length > 6) v = '(' + v.substring(0, 3) + ') ' + v.substring(3, 6) + '-' + v.substring(6);
                else if (v.length > 3) v = '(' + v.substring(0, 3) + ') ' + v.substring(3);
                else v = '(' + v;
            }
            e.target.value = v;
        });
    }

    const postalInput = document.getElementById('postalCode');
    if (postalInput) {
        postalInput.addEventListener('input', (e) => {
            let v = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
            if (v.length > 3) v = v.substring(0, 3) + ' ' + v.substring(3, 6);
            e.target.value = v;
        });
    }

    const validateFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'province', 'postalCode', 'cardNumber', 'expiry', 'cvv', 'cardName'];
    validateFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('blur', () => {
                if (field.value.trim()) {
                    const error = validateField(fieldId);
                    if (error) showFieldError(fieldId, error);
                    else { field.style.borderColor = '#27ae60'; clearFieldError(fieldId); }
                }
            });
            field.addEventListener('focus', () => clearFieldError(fieldId));
        }
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
        input:focus, select:focus {
            outline: none;
            border-color: #667eea !important;
        }
    `;
    document.head.appendChild(style);
});

const PROVINCE_MAP = {
    'Ontario': 'ON', 'Quebec': 'QC', 'British Columbia': 'BC', 'Alberta': 'AB',
    'Manitoba': 'MB', 'Saskatchewan': 'SK', 'Nova Scotia': 'NS',
    'New Brunswick': 'NB', 'Newfoundland and Labrador': 'NL',
    'Prince Edward Island': 'PE', 'Northwest Territories': 'NT',
    'Yukon': 'YT', 'Nunavut': 'NU'
};

let addressDropdown = null;
let addressDropdownTimer = null;

function createAddressDropdown() {
    if (addressDropdown) return addressDropdown;
    addressDropdown = document.createElement('div');
    addressDropdown.id = 'address-suggestions';
    addressDropdown.style.cssText = 'display:none;position:absolute;left:0;right:0;top:100%;background:#fff;border:1px solid #e0e0e0;border-radius:0 0 8px 8px;box-shadow:0 8px 24px rgba(0,0,0,0.12);z-index:10000;max-height:250px;overflow-y:auto;';
    const addressInput = document.getElementById('address');
    if (addressInput) {
        addressInput.parentElement.style.position = 'relative';
        addressInput.parentElement.appendChild(addressDropdown);
    }
    return addressDropdown;
}

function showAddressSuggestions(results) {
    const dropdown = createAddressDropdown();
    if (!results || results.length === 0) {
        dropdown.style.display = 'none';
        return;
    }
    dropdown.innerHTML = results.map((item, idx) =>
        `<div class="addr-option" data-idx="${idx}" style="padding:10px 14px;cursor:pointer;border-bottom:1px solid #f5f5f5;font-size:13px;color:#333;">` +
        `<i class="fas fa-map-marker-alt" style="color:#667eea;margin-right:8px;"></i>${item.Text}` +
        `</div>`
    ).join('');
    dropdown.style.display = 'block';

    dropdown.querySelectorAll('.addr-option').forEach(el => {
        el.addEventListener('mouseenter', function() { this.style.background = '#f0f4ff'; });
        el.addEventListener('mouseleave', function() { this.style.background = ''; });
        el.addEventListener('click', async function() {
            const idx = parseInt(this.dataset.idx);
            const item = results[idx];
            await selectAddress(item.Next, item.Text);
        });
    });
}

async function selectAddress(id, text) {
    const dropdown = createAddressDropdown();
    dropdown.style.display = 'none';

    const detail = await CanadaPostAddress.retrieve(id);
    if (!detail) return;

    addressSelectedFromMaps = true;

    document.getElementById('address').value = detail.Line1 + (detail.Line2 ? ' ' + detail.Line2 : '');

    const city = detail.City || '';
    document.getElementById('city').value = city;

    const provinceCode = detail.ProvinceCode || '';
    const provinceSelect = document.getElementById('province');
    if (provinceSelect) {
        for (let i = 0; i < provinceSelect.options.length; i++) {
            if (provinceSelect.options[i].value === provinceCode) {
                provinceSelect.selectedIndex = i;
                break;
            }
        }
    }

    const postalCode = detail.PostalCode || '';
    document.getElementById('postalCode').value = postalCode.replace(/(.{3})(.+)/, '$1 $2');

    document.getElementById('address').style.borderColor = '#27ae60';
    document.getElementById('city').style.borderColor = '#27ae60';
    document.getElementById('postalCode').style.borderColor = '#27ae60';
    clearFieldError('address');
    clearFieldError('city');
    clearFieldError('postalCode');
}

function initCanadaPostAutocomplete() {
    const addressInput = document.getElementById('address');
    if (!addressInput) return;

    createAddressDropdown();

    addressInput.addEventListener('input', function() {
        addressSelectedFromMaps = false;
        const val = this.value.trim();
        clearTimeout(addressDropdownTimer);
        if (val.length < 3 || !CanadaPostConfig.isConfigured()) {
            const dropdown = document.getElementById('address-suggestions');
            if (dropdown) dropdown.style.display = 'none';
            return;
        }
        addressDropdownTimer = setTimeout(async () => {
            const results = await CanadaPostAddress.search(val);
            showAddressSuggestions(results);
        }, 300);
    });

    addressInput.addEventListener('blur', function() {
        setTimeout(() => {
            const dropdown = document.getElementById('address-suggestions');
            if (dropdown) dropdown.style.display = 'none';
        }, 200);
    });

    addressInput.addEventListener('focus', function() {
        const dropdown = document.getElementById('address-suggestions');
        if (dropdown && dropdown.children.length > 0) {
            dropdown.style.display = 'block';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    if (typeof CanadaPostConfig !== 'undefined' && CanadaPostConfig.isConfigured()) {
        initCanadaPostAutocomplete();
    }
});
