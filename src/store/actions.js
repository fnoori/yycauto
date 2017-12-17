import axios from 'axios'
const incorrectCreds = 'Incorrect username or password'

export const login = ({ commit }, creds) => {
    commit('login') // show spinner
    return new Promise(resolve => {
        axios.get('http://localhost:3000/partnerLogin/' + creds.email + '/' + creds.password).then((response) => {
            if (!response.data.success) {
                resolve(false)
            }

            localStorage.setItem('token', response.data.token)
            localStorage.setItem('dealership', response.data.dealership)

            // Need to pass the dealership as payload
            commit('loginSuccess', {
                dealership: response.data.dealership
            })

            resolve(true)
        }).catch(error => {
            console.log(error)
        })
    })
}

export const logout = ({ commit }) => {
    localStorage.removeItem('token')
    localStorage.removeItem('dealership')

    console.log('Logged out !')

    commit('logout')
}
