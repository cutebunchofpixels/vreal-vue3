import { createI18n } from 'vue-i18n'
import { en as vuetifyEn, he as vuetifyHe } from 'vuetify/locale'

import { Locale } from '@/types/Locale'
import en from './locales/en.json'
import he from './locales/he.json'

type MessageSchema = typeof en & { $vuetify: typeof vuetifyEn }

export const i18n = createI18n<[MessageSchema], Locale>({
  locale: Locale.English,
  legacy: false,
  fallbackLocale: Locale.English,
  messages: {
    [Locale.English]: {
      ...en,
      $vuetify: vuetifyEn
    },
    [Locale.Hebrew]: {
      ...he,
      $vuetify: vuetifyHe
    }
  }
})
