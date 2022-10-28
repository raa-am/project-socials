import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicesList from '../views/Services/ServicesList.vue'
import TiktokPage from '../views/Services/TiktokPage.vue'
import InstagramPage from '../views/Services/InstagramPage.vue'
import ErrorPage from '../views/Payment/ErrorPage.vue'
import SuccessPage from '../views/Payment/SuccessPage.vue'
import PayoutPage from '../views/Payment/PayoutPage.vue'

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
      path: "/order/:id",
      name: "Success",
      component: SuccessPage,

    },
    {
      path: "/payout/:id",
      name: "Payout",
      component: PayoutPage,

    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: ErrorPage },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/MainLayout/ContactPage.vue')
    },
    {
      path: '/faq',
      name: 'faq',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/MainLayout/FaqPage.vue')
    },
    {
      path: '/cgu',
      name: 'cgu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/MainLayout/CguPage.vue')
    },
    {
      path: '/services',
      name: 'services',
      meta: { transition: 'slide-left' },
      component: ServicesList,
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPage

    },
    {
      path: '/services/tiktok',
      name: 'service-tiktok',
      component: TiktokPage
    },
    {
      path: '/services/instagram',
      name: 'service-instagram',
      component: InstagramPage
    }
  ]
})

export default router
