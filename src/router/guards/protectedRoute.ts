import { auth } from '@/firebase'
import type { NavigationGuardWithThis } from 'vue-router'
import { store } from '@/store'

export const protectedRouteGuard: NavigationGuardWithThis<any> = async (to, from) => {
  await auth.authStateReady()
  const user = store.state.auth.user

  if (from.meta.protectedRoute && !user) {
    return { name: 'signin', query: { from: to.path } }
  }
}
