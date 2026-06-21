const CanadaPostAddress = {
    lastResults: [],

    async search(query) {
        if (!CanadaPostConfig.isConfigured() || !query || query.length < 3) return [];
        try {
            const url = `${CanadaPostConfig.BASE_URL}/Find/v2.10/json3.ws`;
            const params = new URLSearchParams({
                Key: CanadaPostConfig.API_KEY,
                SearchTerm: query,
                Country: 'CA',
                LanguagePreference: 'en',
                MaxSuggestions: '5',
                MaxResults: '5'
            });
            const resp = await fetch(`${url}?${params.toString()}`);
            if (!resp.ok) return [];
            const data = await resp.json();
            if (data.Items && data.Items.Response && data.Items.Response.Item) {
                const items = Array.isArray(data.Items.Response.Item)
                    ? data.Items.Response.Item
                    : [data.Items.Response.Item];
                this.lastResults = items.filter(i => i.Error === '');
                return this.lastResults;
            }
            return [];
        } catch (e) {
            console.error('Canada Post search error:', e);
            return [];
        }
    },

    async retrieve(id) {
        if (!CanadaPostConfig.isConfigured() || !id) return null;
        try {
            const url = `${CanadaPostConfig.BASE_URL}/Retrieve/v2.11/json3.ws`;
            const params = new URLSearchParams({
                Key: CanadaPostConfig.API_KEY,
                Id: id,
                Source: '0',
                LanguagePreference: 'en'
            });
            const resp = await fetch(`${url}?${params.toString()}`);
            if (!resp.ok) return null;
            const data = await resp.json();
            if (data.Items && data.Items.Response && data.Items.Response.Item) {
                const item = data.Items.Response.Item;
                if (item.Error === '') return item;
            }
            return null;
        } catch (e) {
            console.error('Canada Post retrieve error:', e);
            return null;
        }
    }
};
