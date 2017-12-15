// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import BootstrapVue from 'bootstrap-vue'
import Modal from './components/Modal'
import FadeLoader from 'vue-spinner/src/FadeLoader.vue'

require('./assets/css/nav-bar.css')
require('./assets/css/nav-bar-partner.css')

Vue.use(BootstrapVue)
Vue.component('modal', Modal)
Vue.component('fade-loader', FadeLoader)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
