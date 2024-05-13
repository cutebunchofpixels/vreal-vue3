import type { ActionTree } from 'vuex'
import type { Ref } from 'vue'

import type { ConfigState } from './state'
import { Theme } from '@/types/Theme'
import { ls } from '@/utils/secureLs'
import { LOCALE_LS_KEY, THEME_LS_KEY } from './constants'
import type { Locale } from '@/types/Locale'

export const configActions: ActionTree<ConfigState, {}> = {
  toggleTheme: (context) => {
    const theme = context.state.theme
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light
    context.commit('setTheme', { theme: newTheme })
    ls.set(THEME_LS_KEY, newTheme)
  },

  changeLocale: (context, { locale, localeRef }: { locale: Locale; localeRef: Ref<string> }) => {
    context.commit('setLocale', { locale })
    localeRef.value = locale
    document.documentElement.setAttribute('lang', locale)
    ls.set(LOCALE_LS_KEY, locale)
  }
}
