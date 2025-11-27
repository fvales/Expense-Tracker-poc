import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as en from '@i18n/messages.en.json';
import * as hn from '@i18n/messages.hn.json';

const resources = {
    en: {
        translation: en,
    },
    hn: {
        translation: hn,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',

    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
