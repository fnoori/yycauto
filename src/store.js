import Vue from 'vue'
import Vuex from 'vuex'
import AuthSerivce from './auth/AuthService'
const auth = new AuthSerivce()
const { login, logout, handleAuthentication, isAuthenticated, isIdTokenValid, getIdToken, localLogin } = auth

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    login: (state) => {
      login()
      handleAuthentication()
    },
    logout: () => {
      logout()
    },
    handleAuthentication: () => {
      handleAuthentication()
    }
  },
  actions: {
    login: (context) => {
      context.commit('login')
    },
    logout: (context) => {
      context.commit('logout')
    },
    handleAuthentication: (context) => {
      context.commit('handleAuthentication')
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn
  }
})
