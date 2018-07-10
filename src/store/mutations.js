// Auth0
import AuthService from '../auth/AuthService'
const auth = new AuthService()
const { login, logout, authenticated, authNotifier, handleAuthentication } = auth

export default {
  login: () => {
    login()
  },

  handleAuthentication: () => {
    handleAuthentication()
  },

  loginSuccess: (state) => {
    state.loginSuccess = true
  },

  logout: () => {
    logout()
  }
}