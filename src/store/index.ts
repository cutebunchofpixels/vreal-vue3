import { createStore } from 'vuex'

import { configModule } from './config'
import { currencyModule } from './currency'
import { authModule } from './auth'
import { type ConfigState } from './config/state'
import type { CurrencyState } from './currency/state'
import type { AuthState } from './auth/state'
import { usersModule } from './users'
import type { UsersState } from './users/state'

export interface StoreState {
  config: ConfigState
  currency: CurrencyState
  auth: AuthState
  users: UsersState
}

export const store = createStore<StoreState>({
  modules: {
    config: configModule,
    currency: currencyModule,
    auth: authModule,
    users: usersModule
  }
})
