// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import auth0 from 'auth0-js'
=======
import firebase from 'firebase'
>>>>>>> parent of f17ebff... going back to before google auth

import store from './store'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(auth0)

// Initialize Firebase
let config = {
    apiKey: "AIzaSyD9DOTVBhw54WdiKIazix9gFtvbNiP2rUA",
    authDomain: "yyc-automotives-190021.firebaseapp.com",
    databaseURL: "https://yyc-automotives-190021.firebaseio.com",
    projectId: "yyc-automotives-190021",
    storageBucket: "",
    messagingSenderId: "156709461219"
};

firebase.initializeApp(config);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    components: { App },
    template: '<App/>'
})
