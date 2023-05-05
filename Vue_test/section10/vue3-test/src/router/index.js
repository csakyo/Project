import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MainChildren from '@/views/MainChildren'
import TeleportTest from '@/views/TeleportTest'
import CompositionTest from '@/views/CompositionTest'
import PropsEmitTest from '@/views/PropsEmitTest'
import FunctionTest from '@/views/FunctionTest'
import FunctionTest2 from '@/views/FunctionTest2'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/mainchildren',
    name: 'MainChildren',
    component: MainChildren
  },
  {
    path: '/teleporttest',
    name: 'TeleportTest',
    component: TeleportTest
  },
  {
    path: '/composition-test',
    name: 'CompositionTest',
    component: CompositionTest
  },
  {
    path: '/props-emit-test',
    name: 'PropsEmitTest',
    component: PropsEmitTest
  },
  {
    path: '/function-test',
    name: 'FunctionTest',
    component: FunctionTest
  },
  {
    path: '/function-test2',
    name: 'FunctionTest2',
    component: FunctionTest2
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
