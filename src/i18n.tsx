import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

//Import all translation files
import en from './locales/en/en.json'
import zhTW from './locales/zh-TW/zh-TW.json'

//---Using translation
const resources = {
  en: {
    translation: en,
  },
  zhTW: {
    translation: zhTW,
  },
}

//---Using different namespaces
// const resources = {
//   en: {
//     home: en,
//   },
//   es: {
//     home: zhTW,
//   },
//   fr: {
//     home: translationFrench,
//   },
// }

i18next.use(initReactI18next).init({
  resources,
  lng: 'en', //default language
})

export default i18next
