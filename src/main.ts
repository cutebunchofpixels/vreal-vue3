import { createApp } from 'vue'

import { vuetify } from './vuetify'
import { store } from './store'

import '@/assets/index.css'

import App from './App.vue'
import router from './router'
import { i18n } from './i18n'

const app = createApp(App)

app.use(store).use(router).use(vuetify).use(i18n)

app.mount('#app')
