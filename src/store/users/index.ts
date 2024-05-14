import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'
import { acceptHMRUpdate, defineStore } from 'pinia'

import { UserService } from '@/api/users/UsersService'
import type { GorestUser } from '@/types/models/Users/GorestUser'
import { USERS_PAGE_SIZE } from './constants'
import type { FetchUsersPayload } from './types'

export const useUsersStore = defineStore('users', () => {
  const toast = useToast()
  const { t } = useI18n()

  const users = ref<GorestUser[]>([])
  const filters = ref<Partial<GorestUser>>({})
  const page = ref<number>(1)
  const pageSize = ref<number>(USERS_PAGE_SIZE)
  const totalItems = ref<number>(1)
  const isLoading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const isEmpty = computed(() => users.value.length === 0)

  async function fetchUsers(payload: FetchUsersPayload = {}) {
    const {
      filters: newFilters,
      page: newPage,
      pageSize: newPageSize
    } = mergeParams(filters.value, page.value, pageSize.value, payload)
    isLoading.value = true

    try {
      const { users: newUsers, totalItems: newTotalItems } = await UserService.getAll(
        newFilters,
        newPage,
        newPageSize
      )
      filters.value = newFilters
      users.value = newUsers
      page.value = newPage
      pageSize.value = newPageSize
      totalItems.value = newTotalItems
      error.value = null
    } catch (e) {
      users.value = []
      page.value = 1
      pageSize.value = USERS_PAGE_SIZE
      error.value = (e as Error).message
      toast.error(t('unexpectedError', { cause: 'while fetching users' }))
    } finally {
      isLoading.value = false
    }
  }

  return { users, filters, page, pageSize, totalItems, isLoading, error, isEmpty, fetchUsers }
})

function mergeParams(
  filters: Partial<GorestUser>,
  page: number,
  pageSize: number,
  payload: FetchUsersPayload
): Required<FetchUsersPayload> {
  const newFilters = payload.filters ? { ...filters, ...payload.filters } : filters

  return {
    filters: newFilters,
    page: payload.page || page,
    pageSize: payload.pageSize || pageSize
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUsersStore, import.meta.hot))
}
