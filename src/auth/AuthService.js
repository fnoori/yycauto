import auth0 from 'auth0-js'
import EventEmitter from 'eventemitter3'

export default class AuthService {
    constructor () {
        this.login = this.login.bind(this)
    }

    auth0 = new auth0.WebAuth({
        domain: 'yyc-automotives.auth0.com',
        clientID: 'kFeNdeqy6SgySBXzN6SOSBjyn8lzw52U',
        redirectUri: 'http://localhost:8080/',
        audience: 'https://yyc-automotives.auth0.com/userinfo',
        responseType: 'token id_token',
        scope: 'openid'
    })

    login () {
        this.auth0.authorize()
    }
}