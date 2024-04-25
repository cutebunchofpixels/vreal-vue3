import { Theme } from '@/types/Theme'
import { inferTheme } from '@/utils/inferTheme'
import { Locale } from '@/types/Locale'
import { inferLocale } from '@/utils/inferLocale'

export interface ConfigState {
  theme: Theme
  locale: Locale
}

const persistedTheme = inferTheme()
const persistedLocale = inferLocale()

export const configState: ConfigState = {
  theme: persistedTheme,
  locale: persistedLocale
}
