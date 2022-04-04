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
    path: '/podcasts/play',
    name: 'Podscasts play',
    component: () => import('../views/Podcasts/Play.vue')
  },
  {
    path: '/podcasts/list',
    name: 'Podscasts liste',
    component: () => import('../views/Podcasts/List.vue')
  },
  {
    path: '/videos',
    name: 'Vidéos',
    component: () => import('../views/Videos/Videos.vue')
  },
  {
    path: '/videos/play',
    name: 'Vidéos play',
    component: () => import('../views/Videos/Play.vue')
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
    path: '/mood/journal',
    name: 'Mood journal',
    component: () => import('../views/Mood/Journal.vue')
  },
  {
    path: '/category/fitness',
    name: 'Fitness',
    component: () => import('../views/category/Fitness.vue')
  },
  {
    path: '/category/yoga',
    name: 'Yoga',
    component: () => import('../views/Category/Yoga.vue')
  },
  {
    path: '/category/conseils',
    name: 'Conseils bien-être',
    component: () => import('../views/Category/Conseils.vue')
  },
  {
    path: '/category/meditation',
    name: 'Meditation',
    component: () => import('../views/Category/Meditation.vue')
  },
  {
    path: '/category/sophrologie',
    name: 'Sophrologie',
    component: () => import('../views/Category/Sophrologie.vue')
  },
  {
    path: '/category/cartomancie',
    name: 'Cartomancie',
    component: () => import('../views/Category/Cartomancie.vue')
  },
  {
    path: '/category/dev',
    name: 'Developpement Personnel',
    component: () => import('../views/Category/Dev.vue')
  },
  {
    path: '/account',
    name: 'AccountHome',
    component: () => import('../views/Account/AccountHome.vue')
  },
  {
    path: '/account-settings',
    name: 'AccountSettings',
    component: () => import('../views/Account/AccountSettings.vue')
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('../views/Account/SignUp.vue')
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('../views/Account/SignIn.vue')
  },
  {
    path: '/payment',
    name: 'Payment',
    component: () => import('../views/Account/Payment.vue')
  },
  {
    path: '/make-appointment',
    name: 'Make appointment',
    component: () => import('../views/Account/MakeAppointment.vue')
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
    path: '/choose-subscription',
    name: 'ChooseSubscription',
    component: () => import('../views/Account/ChooseSubscription.vue')
  },
  {
    path: '/premium-subscriptions',
    name: 'Premium subscriptions',
    component: () => import('../views/Account/PremiumSubscriptions.vue')
  },
  {
    path: '/success-create-account',
    name: 'Success create account',
    component: () => import('../views/Account/SuccessCreateAccount.vue')
  },
  {
    path: '/success-become-pro',
    name: 'Success become pro',
    component: () => import('../views/Account/SuccessBecomePro.vue')
  },
  {
    path: '/success-appointment',
    name: 'Success making appointment',
    component: () => import('../views/Account/SuccessAppointment.vue')
  },
  {
    path: '/favorites',
    name: 'Favoris',
    component: () => import('../views/Favorites.vue')
  },
  {
    path: '/monitoring',
    name: 'Monitoring',
    component: () => import('../views/Monitoring.vue')
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
 //   component: () => import('../views/Mood.vue')
  },

]
})
export default router


