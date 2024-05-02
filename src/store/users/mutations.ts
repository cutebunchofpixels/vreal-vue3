import type { MutationTree } from 'vuex'

import type { UsersState } from './state'
import type { GorestUser } from '@/types/models/Users/GorestUser'

export interface SetPaginationPayload {
  page: number
  pageSize: number
}

export const usersMutations: MutationTree<UsersState> = {
  setUsers(state, users: GorestUser[]) {
    state.users = users
  },

  setFilters(state, filters: Partial<GorestUser>) {
    state.filters = filters
  },

  setPagination(state, { page, pageSize }: SetPaginationPayload) {
    state.page = page
    state.pageSize = pageSize
  },

  setTotalItems(state, totalItems: number) {
    state.totalItems = totalItems
  },

  setLoading(state, isLoading: boolean) {
    state.isLoading = isLoading
  },

  setError(state, error: string | null) {
    state.error = error
  }
}
