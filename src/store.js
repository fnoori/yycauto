import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    change(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn
    }
  },
  getters: {
    isLoggedIn: state => state.isLoggedIn
  }
})
