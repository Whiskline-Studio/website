import { createI18n } from 'vue-i18n';

// 1. Usa o import.meta.glob do Vite para encontrar e importar todos os ficheiros .json da pasta locales.
// O 'eager: true' garante que os ficheiros sejam carregados imediatamente.
const messagesModules = import.meta.glob('./locales/*.json', { eager: true });

// 2. Transforma os módulos importados no formato que o vue-i18n espera.
const messages = Object.entries(messagesModules).reduce((acc, [path, module]) => {
    // Extrai o nome do idioma do caminho do ficheiro (ex: './locales/pt.json' -> 'pt')
    const locale = path.replace('./locales/', '').replace('.json', '');
    // Acessa o conteúdo do módulo (que é o 'default' export do JSON)
    acc[locale] = (module as any).default;
    return acc;
}, {} as Record<string, any>);

const savedLanguage = localStorage.getItem('user-language') || 'pt';

const i18n = createI18n({
    legacy: false,
    locale: savedLanguage,
    fallbackLocale: 'en',
    messages,
});

export default i18n;