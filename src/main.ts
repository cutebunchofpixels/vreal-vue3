import { createApp } from 'vue'
import Toast from 'vue-toastification'

import { vuetify } from './vuetify'
import { store } from './store'
import App from './App.vue'
import router from './router'
import { i18n } from './i18n'
import { toastOptions } from './utils/toast/toast'
import { globalProperties } from './utils/globalProperties'

import '@/assets/index.css'

const app = createApp(App)
app.use(store).use(router).use(vuetify).use(i18n).use(Toast, toastOptions)
app.config.globalProperties = { ...app.config.globalProperties, ...globalProperties }

app.mount('#app')
