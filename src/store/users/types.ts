import type { GorestUser } from '@/types/models/Users/GorestUser'

export interface FetchUsersPayload {
  filters?: Partial<GorestUser>
  page?: number
  pageSize?: number
}
