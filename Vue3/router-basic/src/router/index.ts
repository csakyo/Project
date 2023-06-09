import { createRouter, createWebHistory } from 'vue-router'
import type {RouteRecordRaw} from "vue-router";
import AppTop from "@/views/AppTop.vue";

const routeSettings: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'AppTop',
    component: AppTop
  },
  {
    path: '/member/MemberList',
    name: 'MemberList',
    component: () => {
      return import("@/views/member/MemberList.vue")
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSettings
})

export default router
