import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Tiktok from '../views/Tiktok/TikTok.vue'
import TiktokViews from '../views/Tiktok/TiktokViews.vue'
import SuccessPage from '../views/Payment/SuccessPage.vue'
import ErrorPage from '../views/Payment/ErrorPage.vue'
import CheckoutPage from '../views/Payment/CheckoutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: "/success",
      name: "Success",
      component: SuccessPage,
    },
    {
      path: "/error",
      name: "Error",
      component: ErrorPage,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/services',
      name: 'service',
      component: Tiktok,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPage

    },
    {
      path: '/services/tiktok',
      name: 'services-tiktok',
      component: TiktokViews
    }
  ]
})

export default router
