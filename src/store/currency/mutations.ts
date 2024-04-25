import type { MutationTree } from 'vuex'

import type { CurrencyState } from './state'
import type { CurrencyExchangeRates } from '@/types/models/CurrencyExchange/CurrencyExchangeRates'

export const currencyMutations: MutationTree<CurrencyState> = {
  setExchangeRates: (state, exchangeRates: CurrencyExchangeRates[]) => {
    state.exchangeRates = exchangeRates
  },

  setLoading(state, isLoading: boolean) {
    state.isLoading = isLoading
  },

  setError(state, error: string | null) {
    state.error = error
  }
}
