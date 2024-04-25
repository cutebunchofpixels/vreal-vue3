import type { CurrencyExchangeRates } from '@/types/models/CurrencyExchange/CurrencyExchangeRates'

export interface CurrencyState {
  exchangeRates: CurrencyExchangeRates[]
  isLoading: boolean
  error: string | null
}

export const currencyState: CurrencyState = {
  exchangeRates: [],
  isLoading: false,
  error: null
}
