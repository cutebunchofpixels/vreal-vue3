import type { ActionTree } from 'vuex'
import type { Dayjs } from 'dayjs'

import type { CurrencyState } from './state'
import { CurrencyService } from '@/api/currency/CurrencyService'
import { BASE_CURRENCY } from './constants'

export const currencyActions: ActionTree<CurrencyState, {}> = {
  fetchExchangeRates: async (
    { commit },
    { startDate, endDate }: { startDate: Dayjs; endDate: Dayjs }
  ) => {
    commit('setLoading', true)

    try {
      const exchangeRates = await CurrencyService.getExchangeRatesForPeriod(
        BASE_CURRENCY,
        startDate,
        endDate
      )
      commit('setError', null)
      commit('setExchangeRates', exchangeRates)
    } catch (error) {
      commit('setError', (error as Error).message)
    } finally {
      commit('setLoading', false)
    }
  }
}
