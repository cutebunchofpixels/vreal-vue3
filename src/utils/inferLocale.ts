import { Locale } from '@/types/Locale'
import { ls } from './secureLs'
import { LOCALE_LS_KEY } from '@/store/config/constants'

export function inferLocale(): Locale {
  const persistedLocale = ls.get(LOCALE_LS_KEY)

  if (persistedLocale) {
    return persistedLocale as Locale
  }

  return Locale.English
}
