import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/components/layout/MainLayout.vue'
import SigninPage from '@/components/auth/SigninPage.vue'
import SignupPage from '@/components/auth/SignupPage.vue'
import UsersPage from '@/components/users/UsersPage.vue'

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
          path: '/currency',
          name: 'currency',
          component: () => import('@/components/currency/CurrencyPage.vue')
        },
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
          path: '/users',
          name: 'users',
          component: UsersPage
        }
      ]
    }
  ]
})

export default router
