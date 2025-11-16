import { createRouter, createWebHistory } from 'vue-router'
import HeaderPage from '../views/HeaderPage.vue'
import FooterPage from '../views/FooterPage.vue'
import SignInPage from '../views/SignInPage.vue'

const routes = [
  { path: '/', redirect: '/header' },
  { path: '/header', name: 'HeaderPage', component: HeaderPage },
  { path: '/footer', name: 'FooterPage', component: FooterPage },
  { path: '/sign-in', name: 'SignInPage', component: SignInPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
