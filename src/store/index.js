import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const state = {
  isAuthenticated: !!localStorage.getItem('access_token')
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  plugins: [createPersistedState()]
})