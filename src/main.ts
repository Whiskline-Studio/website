// main.ts
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { useTranslations } from "./composables/useTranslations";
import './styles/main.css';

const app = createApp(App);
app.use(router);

const savedLocale = localStorage.getItem("user-language") as "en" | "pt" | null;
const { setLocale, currentLocale } = useTranslations();

if (savedLocale) {
  setLocale(savedLocale); // usa o salvo
} else {
  currentLocale.value = null; // usuário nunca escolheu
}

app.mount("#app");
