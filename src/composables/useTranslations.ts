import { ref } from "vue";
import en from "../locales/en.json";
import pt from "../locales/pt.json";

type Locale = "en" | "pt";
const currentLocale = ref<Locale | null>(null);

const translations: Record<Locale, Record<string, any>> = {
  en,
  pt,
};

function t(key: string, params: Record<string, string | number> = {}): string {
  if (!currentLocale.value) return key; 

  const parts = key.split(".");
  let text: any = translations[currentLocale.value];

  for (const part of parts) {
    if (text && typeof text === "object" && part in text) {
      text = text[part];
    } else {
      return key;
    }
  }

  if (typeof text !== "string") return key;

  Object.entries(params).forEach(([k, v]) => {
    text = text.replace(`{${k}}`, String(v));
  });

  return text;
}

function setLocale(locale: Locale) {
  currentLocale.value = locale;
  localStorage.setItem("user-language", locale);
}

export function useTranslations() {
  return { t, currentLocale, setLocale };
}
