export const login = state => {
    state.pending = true
}
export const loginSuccess = (state, payload) => {
    state.isLoggedIn = true
    state.dealershipLoggedIn = payload.dealership
}
export const logout = state => {
    state.isLoggedIn = false
}