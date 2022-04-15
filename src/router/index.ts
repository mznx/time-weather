import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TimeView from '@/views/TimeView.vue'
import WeatherView from '@/views/WeatherView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/time',
    name: 'time',
    component: TimeView
  },
  {
    path: '/weather',
    name: 'weather',
    component: WeatherView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
