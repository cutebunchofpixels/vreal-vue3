import type { GorestUser } from '../GorestUser'

export interface GetUsersDto {
  meta: {
    pagination: {
      page: number
      limit: number
      pages: number
      total: number
    }
  }
  data: GorestUser[]
}
