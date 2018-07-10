export default {
  isAuthenticated: state => {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  },
  loginSuccess: state => {
    return state.loginSuccess
  }
}