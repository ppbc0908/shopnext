const STORAGE_KEY = 'shopnext_reviews';

function syncReviewsToGitHub(message) {
    if (typeof GitHubSync === 'undefined' || !GitHubSync.isConfigured()) return;
    const allData = {
        products: JSON.parse(localStorage.getItem('shopnext_products') || '[]'),
        orders: JSON.parse(localStorage.getItem('shopnext_orders') || '[]'),
        reviews: JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'),
        customers: JSON.parse(localStorage.getItem('shopnext_customers') || '[]'),
        users: JSON.parse(localStorage.getItem('shopnext_users') || '[]'),
        settings: JSON.parse(localStorage.getItem('shopnext_settings') || '{}'),
        header: JSON.parse(localStorage.getItem('shopnext_header_v1') || 'null'),
        footer: JSON.parse(localStorage.getItem('shopnext_footer_v2') || 'null'),
        promotions: JSON.parse(localStorage.getItem('shopnext_promotions') || 'null')
    };
    GitHubSync.deployData(allData, message || 'Update reviews').catch(e => console.warn('GitHub sync failed:', e));
}

function getProductId() {
    const params = new URLSearchParams(window.location.search);
    return params.get('productId') || '';
}

function getAllReviews() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    } catch (e) {
        return {};
    }
}

function getReviewsForProduct(productId) {
    const all = getAllReviews();
    return all[String(productId)] || [];
}

function getAverageRating(productId) {
    const reviews = getReviewsForProduct(productId);
    if (reviews.length === 0) return '0.0';
    const sum = reviews.reduce((s, r) => s + (r.rating || 0), 0);
    return (sum / reviews.length).toFixed(1);
}

function getRatingCounts(productId) {
    const reviews = getReviewsForProduct(productId);
    const counts = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0};
    reviews.forEach(r => {
        const star = Math.round(r.rating);
        if (star >= 1 && star <= 5) counts[star]++;
    });
    return counts;
}

function addReview(productId, data) {
    const all = getAllReviews();
    const key = String(productId);
    if (!all[key]) all[key] = [];
    const review = {
        id: Date.now(),
        rating: data.rating,
        title: data.title || '',
        author: data.name || 'Anonymous',
        text: data.body || '',
        image: data.imageUrl || '',
        date: new Date().toISOString(),
        helpful: 0
    };
    all[key].push(review);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    syncReviewsToGitHub('Add review');
}

function toggleHelpful(productId, reviewId) {
    const all = getAllReviews();
    const key = String(productId);
    if (!all[key]) return;
    const review = all[key].find(r => r.id === reviewId);
    if (review) {
        review.helpful = (review.helpful || 0) + 1;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
        syncReviewsToGitHub('Update review helpful count');
    }
}

function formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return year + '/' + month + '/' + day;
}
