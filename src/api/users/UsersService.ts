import axios from 'axios'

import type { GorestUser } from '@/types/models/Users/GorestUser'
import type { GetUserDto } from '@/types/models/Users/dto/GetUserDto'
import type { GetUsersDto } from '@/types/models/Users/dto/GetUsersDto'
import { toURLSearchParams } from '@/utils/toURLSearchParams'

export class UserService {
  private static axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_GOREST_BASE_URL}/users`
  })

  public static setAuthHeader(value?: string) {
    this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${value}`
  }

  static async getAll(filters: Partial<GorestUser>, page: number, pageSize: number) {
    const params = toURLSearchParams({
      ...filters,
      page,
      per_page: pageSize
    })

    const { data: response } = await this.axiosInstance.get<GetUsersDto>('', {
      params
    })

    return {
      totalItems: response.meta.pagination.total,
      users: response.data
    }
  }

  static async getById(id: number) {
    const { data: response } = await this.axiosInstance.get<GetUserDto>(`/${id}`)
    return response.data
  }

  static async update(id: number, dto: Partial<GorestUser>) {
    await this.axiosInstance.patch(`/${id}`, {
      ...dto
    })
  }
}
