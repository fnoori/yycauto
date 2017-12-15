import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import SponsersPage from '@/components/SponsersPage'
import DetailsPage from '@/components/DetailsPage'
import PartnersPage from '@/components/PartnersPage'
import PartnersLoginPage from '@/components/PartnersLoginPage'

import * as store from '../store'

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
            component: PartnersPage,
            beforeEnter: (to, from, next) => {
                if (!store.default.state.isLoggedIn) {
                    alert('You are not authorized to view this page')
                    next('/')
                } else {
                    next()
                }
            }
        }
    ]
})
