import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref, type Ref } from 'vue'

import { inferLocale } from '@/utils/inferLocale'
import { inferTheme } from '@/utils/inferTheme'
import { ls } from '@/utils/secureLs'
import { LOCALE_LS_KEY, THEME_LS_KEY } from './constants'
import { Theme } from '@/types/Theme'
import type { Locale } from '@/types/Locale'

const persistedTheme = inferTheme()
const persistedLocale = inferLocale()

export const useConfigStore = defineStore('config', () => {
  const theme = ref<Theme>(persistedTheme)
  const locale = ref<Locale>(persistedLocale)

  function toggleTheme() {
    const newTheme = theme.value === Theme.Light ? Theme.Dark : Theme.Light
    theme.value = newTheme
    ls.set(THEME_LS_KEY, newTheme)
  }

  function changeLocale(newLocale: Locale, localeRef: Ref<string>) {
    locale.value = newLocale
    localeRef.value = newLocale
    document.documentElement.setAttribute('lang', newLocale)
    ls.set(LOCALE_LS_KEY, newLocale)
  }

  return { theme, locale, toggleTheme, changeLocale }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useConfigStore, import.meta.hot))
}
