import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: "/cv",
      name: 'cv',
      component: () => import('../views/CVView.vue')
    },
    {
      path: "/projects",
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/:catch(.*)*',
      name: 'not-found',
      component: () => import('../views/404View.vue')
    }
  ]
})

export default router
