import auth0 from 'auth0-js'

export default class AuthService {
  constructor() {
    this.auth0 = new auth0.WebAuth({
        domain: process.env.VUE_APP_DOMAIN,
        clientID: process.env.VUE_APP_CLIENT_ID,
        redirectUri: process.env.VUE_APP_REDIRECT_URI,
        responseType: 'token id_token',
        audience: process.env.VUE_APP_AUDIENCE,
        scope: process.env.VUE_APP_SCOPE
      })
  }

  login() {
    this.auth0.authorize()
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      this.auth0.parseHash((err, authResult) => {
        if (err) {
          return reject(err)
        }

        resolve(authResult)
      })
    })
  }
}
