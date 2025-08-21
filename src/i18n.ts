// src/i18n.ts
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'pt',          // fallback inicial
    fallbackLocale: 'en',
    messages: {},          // vazio inicialmente
});

export async function loadLocale(locale: 'pt' | 'en') {
    const messages = await import(`./locales/${locale}.json`);
    i18n.global.setLocaleMessage(locale, messages.default);
    i18n.global.locale.value = locale;
    localStorage.setItem('user-language', locale);
    return i18n; // retorna o i18n carregado
}

export default i18n;
