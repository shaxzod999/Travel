import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        language: "Language",
        "Book Now": "Book Now",
        //Navbar
        Home: "Home",
        "The Silk Roads": "The Silk Roads",
        "The Highlands": "The Highlands",
        Stories: "Stories",
        "The Bazaar": "The Bazaar",
        About: "About",
        Explore: "Explore",
      },
    },
    ru: {
      translation: {
        language: "Язык",
        "Book Now": "Забронировать",
        //Navbar
        Home: "Главная",
        "The Silk Roads": "Шелковый путь",
        "The Highlands": "Нагорье",
        Stories: "Истории",
        "The Bazaar": "Базар",
        About: "О нас",
        Explore: "Исследуй",
      },
    },
    uz: {
      translation: {
        language: "Til",
        "Book Now": "Bron qilish",
        //Navbar
        Home: "Bosh sahifa",
        "The Silk Roads": "Ipak yo'llari",
        "The Highlands": "Tog'lar",
        Stories: "Hikoyalar",
        "The Bazaar": "Bozor",
        About: "Biz haqimizda",
        Explore: "O'rganing",
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
