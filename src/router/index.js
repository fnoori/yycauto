import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import VehicleDetail from '@/components/VehicleDetail'
import AboutMe from '@/components/AboutMe'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
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
            component: AboutMe
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})
