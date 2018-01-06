// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import Modal from './components/Modal'
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'
import VueTransmit from 'vue-transmit'
import config from '../config/config'
import storage from 'google-cloud'

require('./assets/css/nav-bar.css')
require('./assets/css/nav-bar-partner.css')
require('./assets/css/modal.css')

Vue.use(BootstrapVue)
Vue.use(VueTransmit)
Vue.use(storage)
Vue.component('fade-loader', FadeLoader)
Vue.prototype.$config = config

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
