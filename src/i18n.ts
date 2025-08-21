// src/i18n.js
import { createI18n } from 'vue-i18n';
import ptMessages from './locales/pt.json';
import enMessages from './locales/en.json';

// Fallback inicial
const defaultLocale = 'pt';

// Cria o i18n
const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'en',
    messages: {
        pt: ptMessages,
        en: enMessages,
    },
});

// Função para carregar o idioma salvo depois do mount
export function initLocale() {
    if (typeof localStorage !== 'undefined') {
        const savedLanguage = localStorage.getItem('user-language');
        if (savedLanguage === 'pt' || savedLanguage === 'en') {
            i18n.global.locale.value = savedLanguage;
        }
    }
}


export default i18n;
