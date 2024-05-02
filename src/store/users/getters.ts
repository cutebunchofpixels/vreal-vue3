import type { GetterTree } from 'vuex'
import type { UsersState } from './state'

export const usersGetters: GetterTree<UsersState, {}> = {
  isEmpty(state) {
    return state.users.length === 0
  }
}
