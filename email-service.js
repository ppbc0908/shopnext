const EmailService = {
    SENT_LOG_KEY: 'shopnext_sent_emails',

    init() {
        if (typeof EmailJSConfig !== 'undefined') {
            EmailJSConfig.init();
        }
    },

    getSentEmails() {
        return JSON.parse(localStorage.getItem(this.SENT_LOG_KEY) || '[]');
    },

    logSentEmail(type, to, data) {
        const emails = this.getSentEmails();
        emails.unshift({
            id: Date.now(),
            type: type,
            to: to,
            data: data,
            sentAt: new Date().toISOString()
        });
        if (emails.length > 100) emails.splice(100);
        localStorage.setItem(this.SENT_LOG_KEY, JSON.stringify(emails));
    },

    async sendOrderConfirmation(order) {
        const itemsList = order.items.map(item =>
            `${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`
        ).join('\n');

        const templateParams = {
            to_name: order.shipping.firstName + ' ' + order.shipping.lastName,
            to_email: order.shipping.email,
            order_id: order.id || order.orderNumber,
            order_date: new Date(order.date).toLocaleDateString('en-US', {
                year: 'numeric', month: 'long', day: 'numeric'
            }),
            items_list: itemsList,
            subtotal: '$' + order.subtotal.toFixed(2),
            discount: order.discount > 0 ? '-$' + order.discount.toFixed(2) : '$0.00',
            total: '$' + order.total.toFixed(2),
            shipping_address: `${order.shipping.address}, ${order.shipping.city}, ${order.shipping.province} ${order.shipping.postalCode}`,
            payment_method: order.payment.method.charAt(0).toUpperCase() + order.payment.method.slice(1) + ' ending in ' + order.payment.last4,
            store_name: 'ShopNext'
        };

        if (!EmailJSConfig.isConfigured()) {
            console.log('EmailJS not configured. Order confirmation email logged:', templateParams);
            this.logSentEmail('order_confirmation', order.shipping.email, {
                orderId: order.id || order.orderNumber,
                total: order.total
            });
            return { success: true, simulated: true };
        }

        try {
            if (typeof emailjs === 'undefined') {
                console.error('EmailJS SDK not loaded. Check if CDN script is accessible.');
                return { success: false, error: 'EmailJS SDK not loaded' };
            }
            console.log('Sending order email to:', order.shipping.email, 'Params:', templateParams);
            const response = await emailjs.send(
                EmailJSConfig.SERVICE_ID,
                EmailJSConfig.TEMPLATE_ID_ORDER,
                templateParams
            );
            console.log('Email sent successfully:', response);
            this.logSentEmail('order_confirmation', order.shipping.email, {
                orderId: order.id || order.orderNumber,
                total: order.total,
                emailjsResponse: response.status
            });
            return { success: true, simulated: false };
        } catch (error) {
            console.error('Failed to send order confirmation email:', error.status, error.text || error.message);
            this.logSentEmail('order_confirmation_failed', order.shipping.email, {
                orderId: order.id || order.orderNumber,
                error: error.text || error.message || 'Unknown error'
            });
            return { success: false, error: error.text || error.message };
        }
    },

    async sendWelcomeEmail(user) {
        const templateParams = {
            to_name: user.firstName,
            to_email: user.email,
            promo_code: user.promoCode || '',
            store_name: 'ShopNext'
        };

        if (!EmailJSConfig.isConfigured()) {
            console.log('EmailJS not configured. Welcome email logged:', templateParams);
            this.logSentEmail('welcome', user.email, { name: user.firstName });
            return { success: true, simulated: true };
        }

        try {
            const response = await emailjs.send(
                EmailJSConfig.SERVICE_ID,
                EmailJSConfig.TEMPLATE_ID_WELCOME,
                templateParams
            );
            this.logSentEmail('welcome', user.email, {
                name: user.firstName,
                emailjsResponse: response.status
            });
            return { success: true, simulated: false };
        } catch (error) {
            console.error('Failed to send welcome email:', error);
            return { success: false, error: error.message };
        }
    }
};

document.addEventListener('DOMContentLoaded', () => EmailService.init());
