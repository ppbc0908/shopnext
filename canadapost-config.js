const CanadaPostConfig = {
    API_KEY: 'YOUR_CANADA_POST_API_KEY',

    BASE_URL: 'https://www.canadapost-postescanada.ca/addresscomplete-v2/interactive',

    isConfigured() {
        return this.API_KEY && this.API_KEY !== 'YOUR_CANADA_POST_API_KEY';
    }
};
