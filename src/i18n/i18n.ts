import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import boardEn from "../locales/en/board.json";

export const locales = {
  en: "English",
};

export const resources = {
  en: {
    board: boardEn,
  },
};

export const defaultNS = "board";

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  ns: ["board"],
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
