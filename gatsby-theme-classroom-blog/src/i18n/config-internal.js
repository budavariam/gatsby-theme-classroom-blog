import i18next from 'i18next';
import { config } from './config';


i18next.init({
    defaultNS: 'common',
    ...config,
    resources: {
        hu: {
            common: require('../locales/hu/common.json'),
            theme: require('../locales/hu/theme.json'),
        },
        en: {
            common: require('../locales/en/common.json'),
            theme: require('../locales/en/theme.json'),
        }
    },
    ns: [
        'theme',
        'common'
    ],
    returnObjects: true,
    debug: process.env.NODE_ENV === 'development',
    interpolation: {
        escapeValue: false, // not needed for react!!
    },
    react: {
        wait: true,
    },
});

i18next.languages = ['hu', 'en'];

export default i18next;