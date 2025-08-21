import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n, { loadLocale } from './i18n';
import './styles/main.css';

async function bootstrap() {
    const app = createApp(App);

    app.use(i18n);
    app.use(router);

    const savedLanguage = localStorage.getItem('user-language');
    await loadLocale(savedLanguage === 'en' ? 'en' : 'pt');

    app.mount('#app');
}

bootstrap(); // chama a função async
