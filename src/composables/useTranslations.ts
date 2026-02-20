import { ref } from "vue";
import en from "../locales/en.json";
import pt from "../locales/pt.json";
import es from "../locales/es.json"; // 1. Importe o novo JSON

// 2. Atualize o Type para incluir 'es'
export type Locale = "en" | "pt" | "es";

// 3. Defina um idioma padrão para evitar o erro de 'null' no Switcher
const savedLanguage = localStorage.getItem("user-language") as Locale;
const defaultLocale: Locale = savedLanguage || "pt";

const currentLocale = ref<Locale>(defaultLocale);

const translations: Record<Locale, Record<string, any>> = {
  en,
  pt,
  es, // 4. Registre no dicionário
};

function t(key: string, params: Record<string, string | number> = {}): string {
  // Como agora currentLocale nunca é null, removemos a checagem de erro
  const parts = key.split(".");
  let text: any = translations[currentLocale.value];

  for (const part of parts) {
    if (text && typeof text === "object" && part in text) {
      text = text[part];
    } else {
      // Log de erro no estilo Labs para debug
      console.warn(`[Whiskline_Labs] Key not found: ${key}`);
      return key;
    }
  }

  if (typeof text !== "string") return key;

  // Suporte para parâmetros como {studioName}
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