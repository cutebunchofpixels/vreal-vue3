import type { Module } from 'vuex'

import { authState, type AuthState } from './state'
import { authMutations } from './mutations'
import { authActions } from './actions'

export const authModule: Module<AuthState, {}> = {
  namespaced: true,
  state: authState,
  mutations: authMutations,
  actions: authActions
}
