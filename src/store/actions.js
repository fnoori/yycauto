import axios from 'axios';

export default {
  login: (context) => {
    context.commit('login')
  },

  handleAuthentication: (context) => {
    context.commit('handleAuthentication')
  },

  loginSuccess: (context) => {
    context.commit('loginSuccess')
  },

  logout: (context) => {
    context.commit('logout')
  }
}