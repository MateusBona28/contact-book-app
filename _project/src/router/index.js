import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingPage from '../views/LandingPageSignIn.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LandingPage
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
  ],
})

router.beforeEach((to, from) =>  {
  const token = localStorage.getItem('CONTACT_BOOK_TOKEN')

  if (token === null && to.name !== 'login') {
    return { name: 'login' }
  }

  if (token !== null && to.name !== 'home') {
    return { name: 'home' }
  }
  
})

export default router
