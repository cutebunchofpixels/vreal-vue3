import type { Module } from 'vuex'

import { configState, type ConfigState } from './state'
import { configMutations } from './mutations'

export const configModule: Module<ConfigState, {}> = {
  namespaced: true,
  state: configState,
  mutations: configMutations
}
