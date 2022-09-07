import { createI18n } from "vue-i18n";
import zh from "./lang/zh";
import en from "./lang/en";

const i18n = createI18n({
  legacy: false,
  locale: "zh",
  fallbackLocale: "en",
  messages: {
    zh,
    en,
  },
});

export default i18n;
