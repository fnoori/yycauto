import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import SponsersPage from '@/components/SponsersPage'
import DetailsPage from '@/components/DetailsPage'
import PartnersPage from '@/components/PartnersPage'
import PartnersLoginPage from '@/components/PartnersLoginPage'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/sponsersPage',
            name: 'SponsersPage',
            component: SponsersPage
        },
        {
            path: '/vehicleDetails/:vehicle',
            name: 'DetailsPage',
            component: DetailsPage
        },
        {
            path: '/partnerLogin',
            name: 'PartnersLoginPage',
            component: PartnersLoginPage
        },
        {
            path: '/partnersPage',
            name: 'PartnersPage',
            component: PartnersPage
        }
    ]
})
