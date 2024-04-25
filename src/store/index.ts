import { createStore } from 'vuex'

import { configModule } from './config'
import { currencyModule } from './currency'

export const store = createStore({
  modules: {
    config: configModule,
    currency: currencyModule
  }
})
