import { createStore } from 'vuex'

import { configModule } from './config'
import { currencyModule } from './currency'
import { authModule } from './auth'

export const store = createStore({
  modules: {
    config: configModule,
    currency: currencyModule,
    auth: authModule
  }
})
