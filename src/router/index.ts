import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/components/layout/MainLayout.vue'

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
          component: () => import('@/components/auth/SigninPage.vue')
        },
        {
          path: '/signup',
          name: 'signup',
          component: () => import('@/components/auth/SignupPage.vue')
        }
      ]
    }
  ]
})

export default router
