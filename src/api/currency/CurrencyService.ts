import axios from 'axios'
import { Dayjs } from 'dayjs'

import { type CurrencyExchangeRateDto } from '@/types/models/CurrencyExchange/dto/CurrencyExchangeRateDto'
import { type CurrencyExchangeRates } from '@/types/models/CurrencyExchange/CurrencyExchangeRates'
import { Currency } from '@/types/models/CurrencyExchange/Currency'

export class CurrencyService {
  private static axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_CURRENCY_API_URL
  })

  static async getExchangeRates(currency: Currency, date: Dayjs): Promise<CurrencyExchangeRates> {
    const resp = await this.axiosInstance.get<CurrencyExchangeRateDto>(
      `currency-api@${date.format('YYYY-MM-DD')}/v1/currencies/${currency}.min.json`
    )

    return {
      date: date,
      currency: currency,
      exchangeRates: resp.data[currency]
    }
  }

  static async getExchangeRatesForPeriod(currency: Currency, startDate: Dayjs, endDate: Dayjs) {
    const difference = endDate.diff(startDate, 'days')
    const promises: Promise<CurrencyExchangeRates>[] = []

    for (let i = 0; i <= difference; i++) {
      promises.push(this.getExchangeRates(currency, startDate.add(i, 'day')))
    }

    return Promise.all(promises)
  }
}
