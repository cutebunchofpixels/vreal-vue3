import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import DayJsAdapter from '@date-io/dayjs'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import * as enDayjs from 'dayjs/locale/en'
import * as heDayjs from 'dayjs/locale/he'

import { light, dark } from './themes'
import { i18n } from '@/i18n'
import { Locale } from '@/types/Locale'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export const vuetify = createVuetify({
  theme: {
    themes: { light, dark }
  },
  components,
  directives,
  locale: {
    //@ts-ignore
    adapter: createVueI18nAdapter({ i18n })
  },
  date: {
    adapter: DayJsAdapter,
    locale: {
      [Locale.English]: enDayjs,
      [Locale.Hebrew]: heDayjs
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})
