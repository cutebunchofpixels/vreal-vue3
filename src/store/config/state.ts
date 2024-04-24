import { Theme } from '@/types/Theme'
import { inferTheme } from '@/utils/inferTheme'
import { Locale } from '@/types/Locale'

export interface ConfigState {
  theme: Theme
  locale: Locale
}

const persistedTheme = inferTheme()

export const configState: ConfigState = {
  theme: persistedTheme,
  locale: Locale.English
}
