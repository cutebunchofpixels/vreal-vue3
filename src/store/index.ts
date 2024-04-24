import { createStore } from 'vuex'

import { configModule } from './config'

export const store = createStore({
  modules: {
    config: configModule
  }
})
