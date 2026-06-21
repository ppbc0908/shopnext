const FirebaseService = {
    db: null,
    initialized: false,

    init() {
        if (this.initialized) return true;
        if (typeof firebase === 'undefined' || typeof firebaseConfig === 'undefined') return false;
        try {
            firebase.initializeApp(firebaseConfig);
            this.db = firebase.firestore();
            this.initialized = true;
            return true;
        } catch (e) {
            console.warn('Firebase init failed:', e);
            return false;
        }
    },

    isReady() {
        return this.db !== null;
    },

    async getCollection(name) {
        if (!this.isReady()) return [];
        try {
            const snap = await this.db.collection(name).get();
            return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        } catch (e) {
            console.error('Firebase getCollection error:', name, e);
            return [];
        }
    },

    async setDoc(collection, id, data) {
        if (!this.isReady()) return false;
        try {
            await this.db.collection(collection).doc(String(id)).set(data, { merge: true });
            return true;
        } catch (e) {
            console.error('Firebase setDoc error:', e);
            return false;
        }
    },

    async addDoc(collection, data) {
        if (!this.isReady()) return null;
        try {
            const ref = await this.db.collection(collection).add(data);
            return ref.id;
        } catch (e) {
            console.error('Firebase addDoc error:', e);
            return null;
        }
    },

    async deleteDoc(collection, id) {
        if (!this.isReady()) return false;
        try {
            await this.db.collection(collection).doc(String(id)).delete();
            return true;
        } catch (e) {
            console.error('Firebase deleteDoc error:', e);
            return false;
        }
    },

    async updateDoc(collection, id, data) {
        if (!this.isReady()) return false;
        try {
            await this.db.collection(collection).doc(String(id)).update(data);
            return true;
        } catch (e) {
            console.error('Firebase updateDoc error:', e);
            return false;
        }
    },

    async getProducts() {
        return this.getCollection('products');
    },

    async saveProduct(product) {
        return this.setDoc('products', product.id, product);
    },

    async saveAllProducts(productsArray) {
        if (!this.isReady()) return false;
        try {
            const batch = this.db.batch();
            productsArray.forEach(p => {
                const ref = this.db.collection('products').doc(String(p.id));
                batch.set(ref, p, { merge: true });
            });
            await batch.commit();
            return true;
        } catch (e) {
            console.error('Firebase saveAllProducts error:', e);
            return false;
        }
    },

    async deleteProduct(id) {
        return this.deleteDoc('products', id);
    },

    async getOrders() {
        return this.getCollection('orders');
    },

    async saveOrder(order) {
        return this.setDoc('orders', order.id, order);
    },

    async updateOrder(id, data) {
        return this.updateDoc('orders', id, data);
    },

    async getReviews() {
        return this.getCollection('reviews');
    },

    async saveReviewsForProduct(productId, reviewsArray) {
        return this.setDoc('reviews', String(productId), { productId: String(productId), reviews: reviewsArray });
    },

    async deleteReviewsForProduct(productId) {
        return this.deleteDoc('reviews', String(productId));
    },

    async getUsers() {
        return this.getCollection('users');
    },

    async saveUser(user) {
        return this.setDoc('users', user.id || user.email, user);
    },

    async getCustomers() {
        return this.getCollection('customers');
    },

    async saveCustomer(customer) {
        return this.setDoc('customers', customer.id || customer.email, customer);
    },

    async getSettings() {
        return this.getCollection('settings');
    },

    async saveSetting(key, value) {
        return this.setDoc('settings', key, { value, updatedAt: new Date().toISOString() });
    }
};
