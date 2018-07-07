import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import VehicleDetail from '@/components/VehicleDetail'
import AboueMe from '@/components/AboutMe'
import Login from '@/components/Login'
import Callback from '@/components/Callback'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/vehicle_detail',
      name: 'VehicleDetail',
      component: VehicleDetail
    },
    {
      path: '/about_me',
      name: 'AboutMe',
      component: AboueMe
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
