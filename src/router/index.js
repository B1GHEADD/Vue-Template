import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VueComponents from '../views/VueComponents.vue'
import VueManagement from '@/views/VueManagement.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vue-components',
      name: 'components',
      component: VueComponents
    },
    {
      path: '/vue-management',
      name: 'management',
      component: VueManagement
    }
  ]
})

export default router
