import type { Module } from 'vuex'

import { currencyState, type CurrencyState } from './state'
import { currencyMutations } from './mutations'
import { currencyActions } from './actions'
import { currencyGetters } from './getters'

export const currencyModule: Module<CurrencyState, {}> = {
  namespaced: true,
  state: currencyState,
  mutations: currencyMutations,
  actions: currencyActions,
  getters: currencyGetters
}
