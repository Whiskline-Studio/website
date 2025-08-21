import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n, { loadLocale } from './i18n';
import './styles/main.css';

async function bootstrap() {
    const savedLanguage = localStorage.getItem('user-language') === 'en' ? 'en' : 'pt';

    // Espera o locale ser carregado antes de criar o app
    await loadLocale(savedLanguage);

    const app = createApp(App);
    app.use(i18n);
    app.use(router);
    app.mount('#app');
}

bootstrap();
