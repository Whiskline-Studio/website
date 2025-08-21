import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n, { loadLocale } from './i18n';
import '.src/styles/main.css';

const app = createApp(App);

app.use(i18n);
app.use(router);

// Inicializa o idioma salvo ou fallback
const savedLanguage = localStorage.getItem('user-language');
await loadLocale(savedLanguage === 'en' ? 'en' : 'pt');

app.mount('#app');
