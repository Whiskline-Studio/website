import { ref } from "vue";
import en from "../locales/en.json";
import pt from "../locales/pt.json";
import es from "../locales/es.json";

export type Locale = "en" | "pt" | "es";

const savedLanguage = localStorage.getItem("user-language") as Locale;
const defaultLocale: Locale = savedLanguage || "pt";

const currentLocale = ref<Locale>(defaultLocale);

const translations: Record<Locale, Record<string, any>> = {
  en,
  pt,
  es,
};

function t(key: string, params: Record<string, string | number> = {}): string {
  const parts = key.split(".");
  let text: any = translations[currentLocale.value];

  for (const part of parts) {
    if (text && typeof text === "object" && part in text) {
      text = text[part];
    } else {
      console.warn(`[Whiskline_Labs] Key not found: ${key}`);
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