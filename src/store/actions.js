import axios from 'axios'

export const login = ({ commit }, creds) => {
    commit('login') // show spinner
    return new Promise(resolve => {
        setTimeout(() => {
            axios.get('http://localhost:3000/partnerLogin/' + creds.email + '/' + creds.password).then((response) => {
                console.log(response.data.token)
                localStorage.setItem('token', response.data.token)
                commit('loginSuccess')

                alert('Logged in !')

                resolve()
            }).catch(error => {
                console.log('An error occurred when trying to login: ', error)
            })
        }, 1000)
    })
}

export const logout = ({ commit }) => {
    localStorage.removeItem('token')

    console.log('Logged out !')

    commit('logout')
}
