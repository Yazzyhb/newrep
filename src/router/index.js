import { createRouter, createWebHistory } from 'vue-router'
import compView from '@/views/compView.vue'
import HomeView from '../views/HomeView.vue'
import contactView from '@/views/contactView.vue'
import PrinTVue from '@/views/PrinT.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/comp',
    name: 'comp',
    component: compView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: contactView
  },
  {
    path: '/PrinT',
    name: 'PrinT',
    component: PrinTVue
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
