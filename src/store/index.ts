import { createStore } from 'vuex'

import { usersModule } from './users'
import type { UsersState } from './users/state'
import { createPinia } from 'pinia'

export interface StoreState {
  users: UsersState
}

export const store = createStore<StoreState>({
  modules: {
    users: usersModule
  }
})

export const pinia = createPinia()
