import { createRouter, createWebHistory } from 'vue-router'
import HeaderPage from '../views/HeaderPage.vue'

const routes = [
  { path: '/', redirect: '/header' },
  { path: '/header', name: 'HeaderPage', component: HeaderPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
