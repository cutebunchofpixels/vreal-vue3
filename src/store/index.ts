import { createStore } from 'vuex'

import { currencyModule } from './currency'
import { authModule } from './auth'
import type { CurrencyState } from './currency/state'
import type { AuthState } from './auth/state'
import { usersModule } from './users'
import type { UsersState } from './users/state'
import { createPinia } from 'pinia'

export interface StoreState {
  currency: CurrencyState
  auth: AuthState
  users: UsersState
}

export const store = createStore<StoreState>({
  modules: {
    currency: currencyModule,
    auth: authModule,
    users: usersModule
  }
})

export const pinia = createPinia()
