export const increment = state => {
    state.count++
}
export const decrement = state => {
    state.count--
}



export const login = state => {
    state.pending = true
}
export const loginSuccess = state => {
    state.isLoggedIn = true
    state.pending = false
}
export const logout = state => {
    state.isLoggedIn = false
}