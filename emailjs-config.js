const EmailJSConfig = {
    SERVICE_ID: 'service_148ol2w',
    TEMPLATE_ID_ORDER: 'template_y2dqjgh',
    TEMPLATE_ID_WELCOME: 'template_rh5l57d',
    PUBLIC_KEY: 'lBl-H0zJmnE_xeqCv',

    init() {
        if (typeof emailjs !== 'undefined' && this.PUBLIC_KEY !== 'your_public_key') {
            emailjs.init(this.PUBLIC_KEY);
        }
    },

    isConfigured() {
        return this.PUBLIC_KEY !== 'your_public_key' && this.SERVICE_ID !== 'your_service_id';
    }
};
