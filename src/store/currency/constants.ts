import { dayjs } from '@/utils/dayjs'
import { Currency } from '@/types/models/CurrencyExchange/Currency'

export const MAX_EXCHANGE_INTERVAL = 5
export const MIN_EXCHANGE_INTERVAL = 3
export const BASE_CURRENCY = Currency.UAH
export const INITIAL_START_DATE = dayjs().subtract(1, 'week').startOf('week')
export const INITIAL_END_DATE = INITIAL_START_DATE.add(MAX_EXCHANGE_INTERVAL - 1, 'day')
