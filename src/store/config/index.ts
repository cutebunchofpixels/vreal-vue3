import type { Module } from 'vuex'

import { configState, type ConfigState } from './state'
import { configMutations } from './mutations'
import { configActions } from './actions'

export const configModule: Module<ConfigState, {}> = {
  namespaced: true,
  state: configState,
  mutations: configMutations,
  actions: configActions
}
