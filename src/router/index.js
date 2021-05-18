import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MoviesList',
    component: () => import('../views/MoviesList.vue')
  },
  {
    path: '/baixados',
    name: 'Downloads',
    component: () => import('../views/Downloads.vue')
  },
  {
    path: '/favoritos',
    name: 'Favorites',
    component: () => import('../views/Favorites.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
