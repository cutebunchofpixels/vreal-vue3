import { ls } from './secureLs'
import { THEME_LS_KEY } from '@/store/config/constants'
import { Theme } from '@/types/Theme'

export function inferTheme() {
  const persistedTheme = ls.get(THEME_LS_KEY)

  if (persistedTheme) {
    return persistedTheme as Theme
  }

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  if (mediaQuery.matches) {
    return Theme.Dark
  }

  return Theme.Light
}
