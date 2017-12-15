import Vue from 'vue'
import Vuex from 'vuex'

import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)

const state = {
    count: 0
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
})