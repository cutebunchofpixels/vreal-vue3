import { storeToRefs } from 'pinia'
import type { NavigationGuardWithThis } from 'vue-router'

import { auth } from '@/firebase'
import { pinia } from '@/store'
import { useAuthStore } from '@/store/auth'

export const protectedRouteGuard: NavigationGuardWithThis<any> = async (to, from) => {
  const authStore = useAuthStore(pinia)
  const { user } = storeToRefs(authStore)

  await auth.authStateReady()

  if (to.meta.protectedRoute && !user.value) {
    return { name: 'signin', query: { from: to.path } }
  }
}
