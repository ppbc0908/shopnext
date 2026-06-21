const FirebaseService = {
    PROJECT_ID: 'shopnext-9b984',
    API_KEY: 'AIzaSyC8L0J5iJLllbGUE8edZwJ9SpktSeZ3m18',
    DIRECT_URL: 'https://firestore.googleapis.com/v1/projects/shopnext-9b984/databases/(default)/documents',
    PROXY_URL: '',
    BASE_URL: '',

    init() {
        if (this.PROXY_URL) {
            const base = this.PROXY_URL.replace(/\/+$/, '');
            this.BASE_URL = base.endsWith('/proxy') ? base : base + '/proxy';
        } else {
            this.BASE_URL = this.DIRECT_URL;
        }
        return true;
    },
    isReady() { return true; },

    _parseFirestoreValue(field) {
        if (!field) return null;
        if ('stringValue' in field) return field.stringValue;
        if ('integerValue' in field) return parseInt(field.integerValue);
        if ('doubleValue' in field) return parseFloat(field.doubleValue);
        if ('booleanValue' in field) return field.booleanValue;
        if ('arrayValue' in field) return (field.arrayValue.values || []).map(v => this._parseFirestoreValue(v));
        if ('mapValue' in field) {
            const obj = {};
            const fields = field.mapValue.fields || {};
            for (const [k, v] of Object.entries(fields)) obj[k] = this._parseFirestoreValue(v);
            return obj;
        }
        if ('nullValue' in field) return null;
        return null;
    },

    _parseDoc(doc) {
        if (!doc || !doc.fields) return null;
        const data = {};
        for (const [k, v] of Object.entries(doc.fields)) data[k] = this._parseFirestoreValue(v);
        if (data.id === undefined || data.id === null) {
            const nameParts = (doc.name || '').split('/');
            data.id = nameParts[nameParts.length - 1];
        }
        return data;
    },

    _toFirestoreValue(value) {
        if (value === null || value === undefined) return { nullValue: null };
        if (typeof value === 'string') return { stringValue: value };
        if (typeof value === 'number') return Number.isInteger(value) ? { integerValue: value } : { doubleValue: value };
        if (typeof value === 'boolean') return { booleanValue: value };
        if (Array.isArray(value)) return { arrayValue: { values: value.map(v => this._toFirestoreValue(v)) } };
        if (typeof value === 'object') {
            const fields = {};
            for (const [k, v] of Object.entries(value)) fields[k] = this._toFirestoreValue(v);
            return { mapValue: { fields } };
        }
        return { stringValue: String(value) };
    },

    async _fetchWithRetry(url, options, retries = 2) {
        for (let i = 0; i <= retries; i++) {
            try {
                const res = await fetch(url, options);
                return res;
            } catch (e) {
                if (i === retries) throw e;
                await new Promise(r => setTimeout(r, 500));
            }
        }
    },

    async getCollection(name) {
        try {
            const isProxy = !!this.PROXY_URL;
            const url = isProxy
                ? `${this.BASE_URL}/${name}`
                : `${this.BASE_URL}/${name}?key=${this.API_KEY}`;
            const res = await this._fetchWithRetry(url, {});
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            return (data.documents || []).map(doc => this._parseDoc(doc)).filter(Boolean);
        } catch (e) {
            console.error('Firebase REST getCollection error:', name, e);
            return [];
        }
    },

    async setDoc(collection, id, data) {
        try {
            const fields = {};
            for (const [k, v] of Object.entries(data)) {
                if (v !== undefined) fields[k] = this._toFirestoreValue(v);
            }
            const isProxy = !!this.PROXY_URL;
            const url = isProxy
                ? `${this.BASE_URL}/${collection}/${id}`
                : `${this.BASE_URL}/${collection}/${id}?key=${this.API_KEY}`;
            const res = await this._fetchWithRetry(url, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fields })
            });
            return res.ok;
        } catch (e) {
            console.error('Firebase REST setDoc error:', e);
            return false;
        }
    },

    async deleteDoc(collection, id) {
        try {
            const isProxy = !!this.PROXY_URL;
            const url = isProxy
                ? `${this.BASE_URL}/${collection}/${id}`
                : `${this.BASE_URL}/${collection}/${id}?key=${this.API_KEY}`;
            const res = await this._fetchWithRetry(url, { method: 'DELETE' });
            return res.ok;
        } catch (e) {
            console.error('Firebase REST deleteDoc error:', e);
            return false;
        }
    },

    async getProducts() { return this.getCollection('products'); },
    async saveProduct(product) { return this.setDoc('products', product.id, product); },
    async saveAllProducts(productsArray) {
        let success = true;
        for (const p of productsArray) {
            const ok = await this.saveProduct(p);
            if (!ok) success = false;
            await new Promise(r => setTimeout(r, 200));
        }
        return success;
    },
    async deleteProduct(id) { return this.deleteDoc('products', id); },
    async getOrders() { return this.getCollection('orders'); },
    async saveOrder(order) { return this.setDoc('orders', order.id, order); },
    async updateOrder(id, data) { return this.setDoc('orders', id, data); },
    async getReviews() { return this.getCollection('reviews'); },
    async saveReviewsForProduct(productId, reviewsArray) { return this.setDoc('reviews', String(productId), { productId: String(productId), reviews: reviewsArray }); },
    async deleteReviewsForProduct(productId) { return this.deleteDoc('reviews', String(productId)); },
    async getUsers() { return this.getCollection('users'); },
    async saveUser(user) { return this.setDoc('users', String(user.id || user.email), user); },
    async getCustomers() { return this.getCollection('customers'); },
    async saveCustomer(customer) { return this.setDoc('customers', String(customer.id || customer.email), customer); },
    async getSettings() { return this.getCollection('settings'); },
    async saveSetting(key, value) { return this.setDoc('settings', key, { value, updatedAt: new Date().toISOString() }); }
};
