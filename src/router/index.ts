import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'Home',
      component: HomeView,
      path: '/',
    },
    {
      name: 'Todos',
      component: () => import('@/views/TodoView.vue'),
      path: '/todos',
    },
    {
      name: 'Posts',
      component: () => import('@/views/PostsView.vue'),
      path: '/posts',
    },
  ],
})

export default router
