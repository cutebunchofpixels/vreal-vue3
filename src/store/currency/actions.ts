import type { ActionTree } from 'vuex'
import type { Dayjs } from 'dayjs'

import type { CurrencyState } from './state'
import { CurrencyService } from '@/api/currency/CurrencyService'
import { BASE_CURRENCY } from './constants'
import { shouldRefetchExchangeRates } from '@/utils/shouldRefetchExchangeRates'
import { useToast } from 'vue-toastification'
import { i18n } from '@/i18n'

export interface FetchExchangeRatesPayload {
  startDate: Dayjs
  endDate: Dayjs
}

const toast = useToast()
const { t } = i18n.global as { t: any }

export const currencyActions: ActionTree<CurrencyState, {}> = {
  fetchExchangeRates: async (
    { commit, getters },
    { startDate, endDate }: FetchExchangeRatesPayload
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
      toast.error(t('unexpectedError', { cause: 'while fetching exchange rates' }))
    } finally {
      commit('setLoading', false)
    }
  }
}
