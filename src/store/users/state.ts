import type { GorestUser } from '@/types/models/Users/GorestUser'

export interface UsersState {
  users: GorestUser[]
  filters: Partial<GorestUser>
  page: number
  pageSize: number
  totalPages: number
  isLoading: boolean
  error: string | null
}

export const USERS_PAGE_SIZE = 10

export const usersState: UsersState = {
  users: [],
  filters: {},
  page: 1,
  pageSize: USERS_PAGE_SIZE,
  totalPages: 1,
  isLoading: false,
  error: null
}
