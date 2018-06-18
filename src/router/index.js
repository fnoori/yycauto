import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import VehicleDetail from '@/components/VehicleDetail'
import AboueMe from '@/components/AboutMe'

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
            component: AboueMe
        }
    ]
})
