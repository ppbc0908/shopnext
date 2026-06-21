const GoogleMapsConfig = {
    API_KEY: 'YOUR_GOOGLE_MAPS_API_KEY',

    isConfigured() {
        return this.API_KEY && this.API_KEY !== 'YOUR_GOOGLE_MAPS_API_KEY';
    },

    getScriptUrl() {
        return `https://maps.googleapis.com/maps/api/js?key=${this.API_KEY}&libraries=places&callback=initAddressAutocomplete`;
    }
};
