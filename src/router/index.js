import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: 'InsertActivity',
    component: () => import('../views/admin/InsertActivity')
  },
  {
    path: '/Changepassword',
    name: 'Changepassword',
    component: () => import('../views/student/Changepassword')
  },
  {
    path: '/Historyregister',
    name: 'HistoryR',
    component: ()=>import('../views/student/HistoryR')
  },
  {
    path: '/Homeadmin',
    name: 'HomeAdmin',
    component: ()=>import('../views/admin/HomeAdmin')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ()=>import('../views/student/Profile')
  },
  {
    path: '/login/admin',
    name: 'loginadmin',
    component: ()=>import('../views/admin/loginadmin')
  },
  {
    path: '/report',
    name: 'Report',
    component: ()=>import('../views/admin/Report')
  },
  {
    path: '/viewactivity/admin',
    name: 'viewadmin',
    component: ()=>import('../views/admin/ViewAdmin')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
