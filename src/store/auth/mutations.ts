import type { MutationTree } from 'vuex'

import type { AuthState } from './state'
import type { User } from 'firebase/auth'

export const authMutations: MutationTree<AuthState> = {
  setUser(state, user: User | null) {
    state.user = user
  },

  setReady(state, isReady: boolean) {
    state.isReady = isReady
  }
}
