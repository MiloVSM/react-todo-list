import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJson from "./locales/en/en-us.json"
import ptJson from "./locales/pt/pt-br.json"


const resources = {
    'en': enJson,
    'pt-BR': ptJson
}

i18n.use(initReactI18next).init({
    resources,
    fallbackLng: "en",
    lng: navigator.language,    
    interpolation: {
        escapeValue: false,
    },
})

export default i18n;


