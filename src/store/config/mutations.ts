import type { MutationTree } from 'vuex'

import type { ConfigState } from './state'
import { Theme } from '@/types/Theme'
import type { Locale } from '@/types/Locale'

export const configMutations: MutationTree<ConfigState> = {
  setTheme: (state, { theme }: { theme: Theme }) => {
    state.theme = theme
  },

  setLocale: (state, { locale }: { locale: Locale }) => {
    state.locale = locale
  }
}
