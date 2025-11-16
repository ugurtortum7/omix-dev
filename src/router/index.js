import { createRouter, createWebHistory } from 'vue-router'
import HeaderPage from '../views/HeaderPage.vue'
import FooterPage from '../views/FooterPage.vue'
import SignInPage from '../views/SignInPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import ProductPage from '../views/ProductPage.vue'
import TechFeaturesPage from '../views/TechFeaturesPage.vue'

const routes = [
  { path: '/', redirect: '/header' },
  { path: '/header', name: 'HeaderPage', component: HeaderPage },
  { path: '/footer', name: 'FooterPage', component: FooterPage },
  { path: '/sign-in', name: 'SignInPage', component: SignInPage },
  { path: '/register', name: 'RegisterPage', component: RegisterPage },
  { path: '/product', name: 'ProductPage', component: ProductPage },
  { path: '/tech-features', name: 'TechFeaturesPage', component: TechFeaturesPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
