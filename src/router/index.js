import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import AboueMe from '@/components/AboutMe'
import Login from '@/components/Login'
import Callback from '@/components/Callback'
import Account from '@/components/Account'
import Vehicle from '@/components/Vehicle'

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
      path: '/vehicle/:vehicleId',
      name: 'Vehicle',
      component: Vehicle
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
      path: '/account',
      name: 'Account',
      component: Account
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
