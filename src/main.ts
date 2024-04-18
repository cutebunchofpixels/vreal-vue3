import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'

import App from './App.vue'
import router from './router'

import '@/assets/index.css'

const app = createApp(App)

const vuetify = createVuetify({
  components,
  directives
})

app.use(router).use(vuetify)

app.mount('#app')
