import type { ActionTree } from 'vuex'
import { useToast } from 'vue-toastification'

import { type UsersState } from './state'
import { USERS_PAGE_SIZE } from './constants'
import type { GorestUser } from '@/types/models/Users/GorestUser'
import { UserService } from '@/api/users/UsersService'
import { i18n } from '@/i18n'

export interface FetchUsersPayload {
  filters?: Partial<GorestUser>
  page?: number
  pageSize?: number
}

const toast = useToast()
const { t } = i18n.global as { t: any }

export const usersActions: ActionTree<UsersState, {}> = {
  async fetchUsers({ commit, state }, payload: FetchUsersPayload = {}) {
    const { filters, page, pageSize } = mergeParams(state, payload)
    commit('setLoading', true)
    commit('setFilters', filters)

    try {
      const { users, totalItems } = await UserService.getAll(filters, page, pageSize)
      commit('setUsers', users)
      commit('setPagination', { page, pageSize })
      commit('setTotalItems', totalItems)
      commit('setError', null)
    } catch (error) {
      commit('setUsers', [])
      commit('setPagination', { page: 1, pageSize: USERS_PAGE_SIZE })
      commit('setError', (error as Error).message)
      toast.error(t('unexpectedError', { cause: 'while fetching users' }))
    } finally {
      commit('setLoading', false)
    }
  }
}

function mergeParams(state: UsersState, payload: FetchUsersPayload): Required<FetchUsersPayload> {
  const filters = payload.filters ? { ...state.filters, ...payload.filters } : state.filters

  return {
    filters: filters,
    page: payload.page || state.page,
    pageSize: payload.pageSize || state.pageSize
  }
}
