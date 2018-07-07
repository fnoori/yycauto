import axios from 'axios';

export default {
  login: (context) => {
    context.commit('login')
  },

  handleAuthentication: (context) => {
    context.commit('handleAuthentication')
  }
}