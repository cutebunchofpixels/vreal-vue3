import { createStore } from 'vuex'

import { configModule } from './config'
import { currencyModule } from './currency'
import { authModule } from './auth'
import { type ConfigState } from './config/state'
import type { CurrencyState } from './currency/state'
import type { AuthState } from './auth/state'

interface StoreState {
  config: ConfigState
  currency: CurrencyState
  auth: AuthState
}

export const store = createStore<StoreState>({
  modules: {
    config: configModule,
    currency: currencyModule,
    auth: authModule
  }
})
