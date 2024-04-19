import { createApp } from 'vue'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import DayJsAdapter from '@date-io/dayjs'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'
import router from './router'

import '@mdi/font/css/materialdesignicons.css'
import '@/assets/index.css'
import 'vuetify/styles'

const app = createApp(App)

const lightTheme: ThemeDefinition = {
  dark: false,
  variables: {
    'border-color': 'rgb(217, 218, 219)'
  }
}

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'lightTheme',
    themes: {
      lightTheme
    }
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

app.use(router).use(vuetify)

app.mount('#app')
