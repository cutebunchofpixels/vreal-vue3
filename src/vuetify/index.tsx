import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import DayJsAdapter from '@date-io/dayjs'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { light, dark } from './themes'

import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

export const vuetify = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: { light, dark }
  },
  components,
  directives,
  date: {
    adapter: DayJsAdapter
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  }
})
