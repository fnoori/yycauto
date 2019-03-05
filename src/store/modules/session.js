import AuthService from '@/auth/AuthService'
import axios from 'axios'
let jwt_decode = require('jwt-decode')

const auth = new AuthService()

const state = {
  authenticated: !!localStorage.getItem('access_token'),
  accessToken: localStorage.getItem('access_token'),
  idToken: localStorage.getItem('id_token'),
  expiresAt: localStorage.getItem('expires_at'),
  dealership: localStorage.getItem('dealership')
}
const getters = {
  authenticated(state) {
    return state.authenticated
  }
}
const mutations = {
  authenticated(state, authData) {
    state.authenticated = true
    state.accessToken = authData.accessToken
    state.idToken = authData.idToken
    state.expiresAt = authData.expiresIn * 1000 + new Date().getTime()
    state.dealership = authData.dealership

    localStorage.setItem('access_token', state.accessToken)
    localStorage.setItem('id_token', state.idToken)
    localStorage.setItem('expires_at', state.expiresAt)
    localStorage.setItem('dealership', state.dealership)
  },

  logout(state) {
    state.authenticated = false
    state.accessToken = null
    state.idToken = null
    state.dealership = null

    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('dealership')
  }
}
const actions = {
  login() {
    auth.login()
  },

  logout ({ commit }) {
    commit('logout')
  },

  handleAuthentication({ commit }) {
    auth.handleAuthentication().then(authResult => {
      let token = authResult.accessToken
      let decodedToken = jwt_decode(token)
      let auth0Id = decodedToken.sub.split('|')[1]

      axios.get(`${process.env.VUE_APP_API_ROUTE}/users/get_dealership_by_auth0_id/${auth0Id}`)
      .then(result => {
        let user = result.data[0]

        authResult.dealership = user

        commit('authenticated', authResult)

      }).catch(axiosGetErr => {
        console.log(axiosGetErr)
      })
      //commit('authenticated', authResult)

    }).catch(err => {
      console.log(err)
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
