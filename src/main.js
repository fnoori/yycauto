import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import BootstrapVue from 'bootstrap-vue'
import '@/styles/custom.scss'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(VueLazyLoad)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
