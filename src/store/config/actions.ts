import type { ActionTree } from 'vuex'
import type { ConfigState } from './state'
import { Theme } from '@/types/Theme'
import { ls } from '@/utils/secureLs'
import { THEME_LS_KEY } from './constants'

export const configActions: ActionTree<ConfigState, {}> = {
  toggleTheme(context) {
    const theme = context.state.theme
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light
    context.commit('setTheme', { theme: newTheme })
    ls.set(THEME_LS_KEY, newTheme)
  }
}
