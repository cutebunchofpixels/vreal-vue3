import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Dayjs } from 'dayjs'

import type { CurrencyExchangeRates } from '@/types/models/CurrencyExchange/CurrencyExchangeRates'
import { shouldRefetchExchangeRates } from '@/utils/shouldRefetchExchangeRates'
import { CurrencyService } from '@/api/currency/CurrencyService'
import { BASE_CURRENCY } from './constants'

export const useCurrencyStore = defineStore('curency', () => {
  const toast = useToast()
  const { t } = useI18n()

  const exchangeRates = ref<CurrencyExchangeRates[]>([])
  const isLoading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const startDate = computed(() => exchangeRates.value.at(0)?.date)
  const endDate = computed(() => exchangeRates.value.at(-1)?.date)
  const isEmpty = computed(() => exchangeRates.value.length === 0)

  async function fetchExchangeRates(newStartDate: Dayjs, newEndDate: Dayjs) {
    if (!shouldRefetchExchangeRates(newStartDate, newEndDate, startDate.value, endDate.value)) {
      return
    }

    isLoading.value = true

    try {
      const fetchedExchangeRates = await CurrencyService.getExchangeRatesForPeriod(
        BASE_CURRENCY,
        newStartDate,
        newEndDate
      )

      error.value = null
      exchangeRates.value = fetchedExchangeRates
    } catch (e) {
      error.value = (e as Error).message
      toast.error(t('unexpectedError', { cause: 'while fetching exchange rates' }))
    } finally {
      isLoading.value = false
    }
  }

  return { exchangeRates, isLoading, isEmpty, error, startDate, endDate, fetchExchangeRates }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCurrencyStore, import.meta.hot))
}
