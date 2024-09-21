import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
    locale: 'es',
    fallbackLocale: 'es',
    messages: {
        en: () => import('./assets/locales/en.json'),
        es: () => import('./assets/locales/es.json'),
    },
})