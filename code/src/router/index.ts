// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/main/Layout.vue'),
    children: [
      // redirect from empty path to /work
      {
        path: '',
        redirect: 'work',
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'),
      },
      {
        path: 'work',
        name: 'Work',
        component: () => import(/* webpackChunkName: "work" */ '@/views/Work.vue'),
      }
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
