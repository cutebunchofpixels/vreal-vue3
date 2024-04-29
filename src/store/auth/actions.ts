import type { ActionTree } from 'vuex'
import type { User } from 'firebase/auth'

import type { AuthState } from './state'

export const authActions: ActionTree<AuthState, {}> = {
  signin({ commit }, user: User) {
    commit('setUser', user)
  },

  signout({ commit }) {
    console.log('signout')
    commit('setUser', null)
  }
}
