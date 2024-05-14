import { UserService } from '@/api/users/UsersService'
import type { User } from 'firebase/auth'
import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isReady = ref<boolean>(false)

  function signin(newUser: User) {
    user.value = newUser
    UserService.setAuthHeader(import.meta.env.VITE_GOREST_API_KEY)
  }

  function signout() {
    user.value = null
    UserService.setAuthHeader(undefined)
  }

  return { user, isReady, signin, signout }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
