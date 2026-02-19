import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { useTranslations } from "./composables/useTranslations";
import { createHead } from '@vueuse/head' 
import { createPinia } from 'pinia' 
import './styles/main.css';

const app = createApp(App);
const head = createHead()
const pinia = createPinia()
app.use(router);

const savedLocale = localStorage.getItem("user-language") as "en" | "pt" | null;
const { setLocale, currentLocale } = useTranslations();

if (savedLocale) {
  setLocale(savedLocale);
} else {
  currentLocale.value = null;
}

app.use(pinia)
app.use(head)
app.mount("#app");
