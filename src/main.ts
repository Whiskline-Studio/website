import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n, { initLocale } from './i18n';
import '../src/styles/main.css'

const app = createApp(App)

app.use(i18n) 
app.use(router)

initLocale();
app.mount('#app')