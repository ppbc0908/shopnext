function loadHeader() {
    const savedData = localStorage.getItem('shopnext_header_v1');
    const headerData = savedData ? JSON.parse(savedData) : null;
    
    const topRight = document.getElementById('top-right');
    if (topRight && headerData && headerData.topRight) {
        topRight.innerHTML = headerData.topRight.map(link => 
            `<a href="${link.url}"><i class="${link.icon}"></i> ${link.text}</a>`
        ).join('');
    }
    
    const categoryMenu = document.getElementById('category-menu');
    if (categoryMenu && headerData && headerData.categories) {
        categoryMenu.innerHTML = headerData.categories.map(cat => 
            `<li><a href="${cat.url}">${cat.text}</a></li>`
        ).join('');
    }
    
    const searchInput = document.getElementById('search-input');
    if (searchInput && headerData && headerData.searchPlaceholder) {
        searchInput.placeholder = headerData.searchPlaceholder;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    loadHeader();
    
    if (typeof UserSystem !== 'undefined') {
        UserSystem.init();
    }
});
