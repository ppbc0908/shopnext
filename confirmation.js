function loadOrderConfirmation() {
    const orderData = JSON.parse(localStorage.getItem('shopnext_last_order'));
    
    if (!orderData) {
        window.location.href = 'index.html';
        return;
    }

    document.getElementById('order-number').textContent = orderData.orderNumber;
    
    const orderDate = new Date(orderData.date);
    document.getElementById('order-date').textContent = orderDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('payment-method').textContent = 
        `${orderData.payment.method.charAt(0).toUpperCase() + orderData.payment.method.slice(1)} ending in ${orderData.payment.last4}`;

    const shipping = orderData.shipping;
    document.getElementById('shipping-address').textContent = 
        `${shipping.address}, ${shipping.city}, ${shipping.province} ${shipping.postalCode}`;

    document.getElementById('total-amount').textContent = `$${orderData.total.toFixed(2)}`;

    const itemsContainer = document.getElementById('order-items');
    itemsContainer.innerHTML = orderData.items.map(item => {
        const imgSrc = (item.images && item.images[0]) || item.image || "data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 fill=%22%23e9ecef%22%3E%3Crect width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2255%22 font-size=%2212%22 fill=%22%23adb5bd%22 text-anchor=%22middle%22%3EImg%3C/text%3E%3C/svg%3E";
        return `
        <div class="order-item">
            <div class="order-item-image">
                <img src="${imgSrc}" alt="${item.name}">
            </div>
            <div class="order-item-info">
                <h4>${item.name}</h4>
                <p>Qty: ${item.quantity} x $${item.price.toFixed(2)}</p>
            </div>
            <div class="order-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        </div>`;
    }).join('');

    const emailStatus = document.getElementById('email-status');
    if (emailStatus) {
        if (orderData.emailSent && !orderData.emailSimulated) {
            emailStatus.style.display = 'flex';
            emailStatus.style.background = '#d4edda';
            emailStatus.style.color = '#155724';
            emailStatus.style.border = '1px solid #c3e6cb';
            emailStatus.innerHTML = '<i class="fas fa-check-circle" style="font-size:18px;"></i> <div><strong>Email sent successfully!</strong><br><span style="font-size:12px;">A confirmation email has been sent to ' + shipping.email + '</span></div>';
        } else if (orderData.emailSent && orderData.emailSimulated) {
            emailStatus.style.display = 'flex';
            emailStatus.style.background = '#fff3cd';
            emailStatus.style.color = '#856404';
            emailStatus.style.border = '1px solid #ffeeba';
            emailStatus.innerHTML = '<i class="fas fa-info-circle" style="font-size:18px;"></i> <div><strong>Email notification logged</strong><br><span style="font-size:12px;">EmailJS is not configured yet. Set up at <a href="https://www.emailjs.com/" target="_blank" style="color:#856404;text-decoration:underline;">emailjs.com</a> to send real emails.</span></div>';
        } else {
            emailStatus.style.display = 'flex';
            emailStatus.style.background = '#f8d7da';
            emailStatus.style.color = '#721c24';
            emailStatus.style.border = '1px solid #f5c6cb';
            emailStatus.innerHTML = '<i class="fas fa-exclamation-circle" style="font-size:18px;"></i> <div><strong>Email could not be sent</strong><br><span style="font-size:12px;">Error: ' + (orderData.emailError || 'Unknown error') + '</span></div>';
        }
    }

    localStorage.removeItem('shopnext_last_order');
}

document.addEventListener('DOMContentLoaded', loadOrderConfirmation);
