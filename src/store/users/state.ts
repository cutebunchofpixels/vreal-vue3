import type { GorestUser } from '@/types/models/Users/GorestUser'
import { USERS_PAGE_SIZE } from './constants'

export interface UsersState {
  users: GorestUser[]
  filters: Partial<GorestUser>
  page: number
  pageSize: number
  totalItems: number
  isLoading: boolean
  error: string | null
}

export const usersState: UsersState = {
  users: [],
  filters: {},
  page: 1,
  pageSize: USERS_PAGE_SIZE,
  totalItems: 1,
  isLoading: false,
  error: null
}
