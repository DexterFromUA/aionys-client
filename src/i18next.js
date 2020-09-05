import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locale-en.json";
import ru from "./locale-ru.json";

const resources = { en, ru };

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    saveMissing: true,
    keySeparator: true,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
