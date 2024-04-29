import type { ActionTree } from 'vuex'
import type { Dayjs } from 'dayjs'

import type { CurrencyState } from './state'
import { CurrencyService } from '@/api/currency/CurrencyService'
import { BASE_CURRENCY } from './constants'
import { shouldRefetchExchangeRates } from '@/utils/shouldRefetchExchangeRates'
import { useToast } from 'vue-toastification'

const toast = useToast()

export const currencyActions: ActionTree<CurrencyState, {}> = {
  fetchExchangeRates: async (
    { commit, getters },
    { startDate, endDate }: { startDate: Dayjs; endDate: Dayjs }
  ) => {
    if (!shouldRefetchExchangeRates(startDate, endDate, getters.startDate, getters.endDate)) {
      return
    }

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
      toast.error('An error occured while loading exchange rates. Try refreshing the page')
    } finally {
      commit('setLoading', false)
    }
  }
}