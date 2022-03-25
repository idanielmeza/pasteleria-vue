import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/toppings',
    name: 'topings',
    component: () => import('../views/TopingsView.vue')
  },
  {
    path: '/resumen',
    name: 'resumen',
    component: () => import('../views/Resumen.vue')
  },
  {
    path: '/pedidos',
    name: 'pedidos',
    component: () => import('../views/PedidosView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
