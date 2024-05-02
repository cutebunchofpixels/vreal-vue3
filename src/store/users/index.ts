import type { Module } from 'vuex'
import { usersState, type UsersState } from './state'
import { usersMutations } from './mutations'
import { usersActions } from './actions'
import { usersGetters } from './getters'

export const usersModule: Module<UsersState, {}> = {
  namespaced: true,
  state: usersState,
  mutations: usersMutations,
  actions: usersActions,
  getters: usersGetters
}
