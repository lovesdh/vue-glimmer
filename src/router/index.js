import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Rank from '@/views/Rank/index.vue'
import Upload from '@/views/upload/index.vue'
import r82c3nur8fe2932cwdq from '@/views/r82c3nur8fe2932cwdq/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/rank',
      component: Rank
    },
    {
      path: '/',
      component: Login
    },
    {
      path:'/upload',
      component: Upload
    },
    {
      path:'/r82c3nur8fe2932cwdq',
      component: r82c3nur8fe2932cwdq
    },
  ]
})

export default router
