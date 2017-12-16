import axios from 'axios'

export const login = ({ commit }, creds) => {
    commit('login') // show spinner
    return new Promise(resolve => {
        setTimeout(() => {
            axios.get('http://localhost:3000/partnerLogin/' + creds.email + '/' + creds.password).then((response) => {

                localStorage.setItem('token', response.data.token)
                localStorage.setItem('dealership', response.data.dealership)
                
                // Need to pass the dealership as payload
                commit('loginSuccess', {
                    dealership: response.data.dealership
                })

                resolve()
            }).catch(error => {
                console.log('An error occurred when trying to login: ', error)
            })
        }, 1000)
    })
}

export const logout = ({ commit }) => {
    localStorage.removeItem('token')
    localStorage.removeItem('dealership')

    console.log('Logged out !')

    commit('logout')
}
