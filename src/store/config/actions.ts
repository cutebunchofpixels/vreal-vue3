import type { ActionTree } from 'vuex'
import type { VueI18n } from 'vue-i18n'

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

  changeLocale: (context, { locale, i18nInstance }: { locale: Locale; i18nInstance: VueI18n }) => {
    context.commit('setLocale', { locale })
    i18nInstance.locale = locale
    document.documentElement.setAttribute('lang', locale)
    ls.set(LOCALE_LS_KEY, locale)
  }
}
