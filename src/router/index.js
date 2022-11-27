import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/index/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/minemanage',
    name: 'minemanage',
    component: ()=>import('@/views/index/MineManage.vue')
  },
  // {
  //   path: '/parser',
  //   name: 'parser',
  //   component: () => import(/* webpackChunkName: "parser-example" */'@/components/parser/example/Index.vue')
  // },
  // {
  //   path: '/tinymce',
  //   name: 'tinymce',
  //   component: () => import(/* webpackChunkName: "tinymce-example" */'@/components/tinymce/example/Index.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
