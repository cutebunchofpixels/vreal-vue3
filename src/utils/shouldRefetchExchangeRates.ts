import { Dayjs } from 'dayjs'

import { dayjs } from '@/utils/dayjs'

export function shouldRefetchExchangeRates(
  startDate: Dayjs,
  endDate: Dayjs,
  loadedStartDate?: Dayjs,
  loadedEndDate?: Dayjs
) {
  if (!loadedStartDate || !loadedEndDate) {
    return true
  }

  if (
    !dayjs(startDate).isSameOrAfter(loadedStartDate, 'day') ||
    !dayjs(endDate).isSameOrBefore(loadedEndDate, 'day')
  ) {
    return true
  }

  return false
}
