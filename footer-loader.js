const defaultFooterData = {
    columns: [
        {
            title: "Customer Service",
            links: [
                { text: "Help Center", url: "#" },
                { text: "Track Order", url: "#" },
                { text: "Returns & Exchanges", url: "#" },
                { text: "Shipping Info", url: "#" },
                { text: "Contact Us", url: "#" }
            ]
        },
        {
            title: "About Us",
            links: [
                { text: "About ShopNext", url: "#" },
                { text: "Careers", url: "#" },
                { text: "Press", url: "#" },
                { text: "Affiliates", url: "#" },
                { text: "Sustainability", url: "#" }
            ]
        },
        {
            title: "Connect With Us",
            links: [
                { text: "Facebook", url: "#", icon: "fab fa-facebook" },
                { text: "Twitter", url: "#", icon: "fab fa-twitter" },
                { text: "Instagram", url: "#", icon: "fab fa-instagram" },
                { text: "YouTube", url: "#", icon: "fab fa-youtube" },
                { text: "Pinterest", url: "#", icon: "fab fa-pinterest" }
            ]
        }
    ],
    paymentMethods: [
        { name: "Visa", icon: "fab fa-cc-visa" },
        { name: "Mastercard", icon: "fab fa-cc-mastercard" },
        { name: "Amex", icon: "fab fa-cc-amex" }
    ],
    business: {
        name: "ShopNext Store",
        description: "Your one-stop shop for everything",
        address: "123 Main Street, Toronto, ON M5V 2T6",
        phone: "1-800-SHOP-NEXT",
        email: "support@shopnext.com",
        hours: "Mon-Fri: 9AM-9PM EST"
    },
    copyright: "© 2026 ShopNext. All rights reserved."
};

function loadFooter() {
    let footerData = defaultFooterData;
    
    try {
        const savedData = localStorage.getItem('shopnext_footer_v2');
        if (savedData) {
            footerData = JSON.parse(savedData);
        }
    } catch (e) {
        console.error('Error loading footer data:', e);
        footerData = defaultFooterData;
    }

    const footerGrid = document.getElementById('footer-grid');
    const paymentMethods = document.getElementById('payment-methods');
    const copyright = document.getElementById('copyright');

    if (footerGrid) {
        let html = '';
        
        if (footerData.business) {
            html += '<div class="footer-business-info">';
            html += '<h4>' + (footerData.business.name || 'ShopNext Store') + '</h4>';
            html += '<p>' + (footerData.business.description || '') + '</p>';
            html += '<div class="business-details">';
            if (footerData.business.address) {
                html += '<p><i class="fas fa-map-marker-alt"></i> ' + footerData.business.address + '</p>';
            }
            if (footerData.business.phone) {
                html += '<p><i class="fas fa-phone"></i> ' + footerData.business.phone + '</p>';
            }
            if (footerData.business.email) {
                html += '<p><i class="fas fa-envelope"></i> ' + footerData.business.email + '</p>';
            }
            if (footerData.business.hours) {
                html += '<p><i class="fas fa-clock"></i> ' + footerData.business.hours + '</p>';
            }
            html += '</div></div>';
        }

        if (footerData.columns && footerData.columns.length > 0) {
            footerData.columns.forEach(function(column) {
                html += '<div class="footer-column">';
                html += '<h4>' + column.title + '</h4>';
                html += '<ul>';
                if (column.links && column.links.length > 0) {
                    column.links.forEach(function(link) {
                        html += '<li>';
                        html += '<a href="' + link.url + '">';
                        if (link.icon) {
                            html += '<i class="' + link.icon + '"></i> ';
                        }
                        html += link.text;
                        html += '</a></li>';
                    });
                }
                html += '</ul></div>';
            });
        }
        
        footerGrid.innerHTML = html;
    }

    if (paymentMethods && footerData.paymentMethods && footerData.paymentMethods.length > 0) {
        let paymentHtml = '<span>We Accept:</span>';
        footerData.paymentMethods.forEach(function(method) {
            paymentHtml += '<i class="' + method.icon + '" title="' + method.name + '"></i>';
        });
        paymentMethods.innerHTML = paymentHtml;
    }

    if (copyright) {
        copyright.innerHTML = '<p>' + (footerData.copyright || '© 2026 ShopNext. All rights reserved.') + '</p>';
    }
}

window.addEventListener('storage', function(e) {
    if (e.key === 'shopnext_footer_v2') {
        loadFooter();
    }
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
} else {
    loadFooter();
}
