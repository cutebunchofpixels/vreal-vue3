import { Dayjs } from 'dayjs'

import { Currency } from '@/types/models/CurrencyExchange/Currency'

export interface CurrencyExchangeRates {
  currency: Currency
  date: Dayjs
  exchangeRates: {
    [key in Currency]: number
  }
}
