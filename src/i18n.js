import i18n from 'i18next'
import Cache from 'i18next-localstorage-cache'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

i18n
  .use(Cache)
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    cache: {
      enabled: true,
    },
    debug: false,

    fallbackLng: 'en',
    whitelist: ['en', 'zh'],

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  })

export default i18n
