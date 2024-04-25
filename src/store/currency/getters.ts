import type { GetterTree } from 'vuex'
import type { CurrencyState } from './state'

export const currencyGetters: GetterTree<CurrencyState, {}> = {
  startDate: (state) => state.exchangeRates?.at(0)?.date,
  endDate: (state) => state.exchangeRates?.at(-1)?.date,
  isEmpty: (state) => {
    return state.exchangeRates.length === 0
  }
}
