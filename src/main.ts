import { createApp } from 'vue'

import { vuetify } from './vuetify'

import '@/assets/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(vuetify)

app.mount('#app')
