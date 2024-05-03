import type { ActionTree } from 'vuex'
import type { User } from 'firebase/auth'

import { UserService } from '@/api/users/UsersService'
import type { AuthState } from './state'

export const authActions: ActionTree<AuthState, {}> = {
  signin({ commit }, user: User) {
    commit('setUser', user)
    UserService.setAuthHeader(import.meta.env.VITE_GOREST_API_KEY)
  },

  signout({ commit }) {
    commit('setUser', null)
    UserService.setAuthHeader(undefined)
  }
}
