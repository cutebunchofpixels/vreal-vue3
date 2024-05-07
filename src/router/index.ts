import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/components/layout/MainLayout.vue'
import SigninPage from '@/components/auth/SigninPage.vue'
import SignupPage from '@/components/auth/SignupPage.vue'
import NotFoundPage from '@/components/not-found/NotFoundPage.vue'

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
          component: () => import('@/components/users/UsersPage.vue')
        },
        {
          path: '/users/:id',
          name: 'editUser',
          component: () => import('@/components/users/EditUser/EditUserPage.vue')
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

export default router
