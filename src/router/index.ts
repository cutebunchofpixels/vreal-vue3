import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/components/layout/MainLayout.vue'
import SigninPage from '@/components/auth/SigninPage.vue'
import SignupPage from '@/components/auth/SignupPage.vue'
import NotFoundPage from '@/components/not-found/NotFoundPage.vue'
import { protectedRouteGuard } from './guards'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: MainLayout,
      redirect: 'currency',
      children: [
        {
          path: '/signin',
          name: 'signin',
          component: SigninPage
        },
        {
          path: '/signup',
          name: 'signup',
          component: SignupPage
        },
        {
          path: '/currency',
          name: 'currency',
          component: () => import('@/components/currency/CurrencyPage.vue'),
          meta: { protectedRoute: true }
        },
        {
          path: '/users',
          name: 'users',
          component: () => import('@/components/users/UsersPage.vue'),
          meta: { protectedRoute: true }
        },
        {
          path: '/users/:id',
          name: 'editUser',
          component: () => import('@/components/users/EditUser/EditUserPage.vue'),
          meta: { protectedRoute: true }
        },
        {
          path: '/:pathMatch(.*)*',
          name: 'notFound',
          component: NotFoundPage
        }
      ]
    }
  ]
})

router.beforeEach(protectedRouteGuard)

export default router
