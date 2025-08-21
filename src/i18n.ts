import { createI18n } from 'vue-i18n';

import ptMessages from './locales/pt.json';
import enMessages from './locales/en.json';

const savedLanguage = localStorage.getItem('user-language') || 'pt';

const i18n = createI18n({
    legacy: false,
    locale: savedLanguage,
    fallbackLocale: 'en',

    messages: {
        pt: ptMessages,
        en: enMessages,
    },
});

export default i18n;