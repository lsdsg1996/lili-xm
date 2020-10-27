import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '@/views/Register.vue'
import Login from '@/views/Login.vue'
import Userinfo from '@/views/Userinfo.vue'
import Edit from '@/views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/edit',
    component:Edit
  },
  {
    path:'/userinfo',
    component:Userinfo
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
