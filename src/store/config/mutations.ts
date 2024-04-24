import type { MutationTree } from 'vuex'
import type { ConfigState } from './state'
import { Theme } from '@/types/Theme'

export const configMutations: MutationTree<ConfigState> = {
  setTheme: (state, { theme }: { theme: Theme }) => {
    state.theme = theme
  }
}
