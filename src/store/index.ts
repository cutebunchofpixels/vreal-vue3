import { createStore } from 'vuex'

import { currencyModule } from './currency'
import type { CurrencyState } from './currency/state'
import { usersModule } from './users'
import type { UsersState } from './users/state'
import { createPinia } from 'pinia'

export interface StoreState {
  currency: CurrencyState
  users: UsersState
}

export const store = createStore<StoreState>({
  modules: {
    currency: currencyModule,
    users: usersModule
  }
})

export const pinia = createPinia()
