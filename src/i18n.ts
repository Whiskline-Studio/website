// src/i18n.ts
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    legacy: false,
    globalInjection: true, // permite $t() no template
    locale: 'pt',           // fallback inicial
    fallbackLocale: 'en',
    messages: {},           // vazio inicialmente
});

export async function loadLocale(locale: 'pt' | 'en') {
    try {
        const messages = await import(`./locales/${locale}.json`);
        i18n.global.setLocaleMessage(locale, messages.default);
        i18n.global.locale.value = locale;
        localStorage.setItem('user-language', locale);
    } catch (e) {
        console.error('Erro ao carregar locale', locale, e);
    }
}

export default i18n;
