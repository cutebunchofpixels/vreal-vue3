import type { MutationTree } from 'vuex'
import type { ConfigState } from './state'
import { Theme } from '@/types/Theme'

export const configMutations: MutationTree<ConfigState> = {
  toggleTheme: (state) => {
    if (state.theme === Theme.Light) {
      state.theme = Theme.Dark
    } else {
      state.theme = Theme.Light
    }
  }
}
