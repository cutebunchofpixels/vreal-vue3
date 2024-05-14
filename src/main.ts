import { createApp } from 'vue'
import Toast from 'vue-toastification'

import App from './App.vue'
import { vuetify } from './vuetify'
import { pinia, store } from './store'
import router from './router'
import { i18n } from './i18n'
import { toastOptions } from './utils/toast/toast'
import { globalProperties } from './utils/globalProperties'
import { applyDirectives } from './utils/applyDirectives'
import { registerComponents } from './utils/registerComponents'

import '@/assets/index.css'

const app = createApp(App)

app.use(pinia).use(store).use(router).use(vuetify).use(i18n).use(Toast, toastOptions)
app.config.globalProperties = { ...app.config.globalProperties, ...globalProperties }
applyDirectives(app)
registerComponents(app)

app.mount('#app')
