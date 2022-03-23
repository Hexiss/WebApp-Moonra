import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/podcasts',
    name: 'Podscasts',
    component: () => import('../views/Podcasts/Podcasts.vue')
  },
  {
    path: '/videos',
    name: 'Vidéos',
    component: () => import('../views/Videos/Videos.vue')
  },
  {
    path: '/coaching',
    name: 'Coaching',
    component: () => import('../views/Coaching/Coaching.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue')
  },
  {
    path: '/account',
    name: 'MonCompte',
    component: () => import('../views/Account/MonCompte.vue')
  },
  {
    path: '/account-settings',
    name: 'AccountSettings',
    component: () => import('../views/Account/AccountSettings.vue')
  },
  {
    path: '/sign-up-step-2',
    name: 'SignUpStep2',
    component: () => import('../views/Account/SignUpCreditCard.vue')
  },
  {
    path: '/account/account-pro',
    name: 'AccountPro',
    component: () => import('@/views/Account/AccountPro.vue')
  },
  {
    path: '/account/account-pro-contents',
    name: 'AccountProContents',
    component: () => import('@/views/Account/AccountProContents.vue')
  },
  {
    path: '/account/calendar',
    name: 'AccountCalendar',
    component: () => import('../views/Account/Calendar.vue')
  },
  {
    path: '/account/pending-apointments',
    name: 'PendingApointments',
    component: () => import('../views/Account/PendingApointments.vue')
  },
  {
    path: '/favoris',
    name: 'Favoris',
    component: () => import('../components/login/Login.vue')
  },
  {
    path: '/suivi',
    name: 'Suivi',
    component: () => import('../components/login/Login.vue')
  },
  {
    path: '/recherche',
    name: 'Recherche',
    component: () => import('../components/login/Login.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../components/login/Signup.vue')
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: () => import('../components/login/ForgotPassword.vue')
  },

  {
    path: '/search',
    name: 'search',
    component: () => import('../views/Search.vue')
  },

  {
    path: '/mood',
    name: 'mood',
    component: () => import('../views/Mood.vue')
  },

]
})
export default router


