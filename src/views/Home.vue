<template>
  <div class="home">
    <button
      id="qsLoginBtn"
      class="btn btn-primary btn-margin"
      v-if="!authenticated"
      @click="login()">
        Log In
    </button>

    <button
      id="qsLogoutBtn"
      class="btn btn-primary btn-margin"
      v-if="authenticated"
      @click="logout()">
        Log Out
    </button>
  </div>
</template>

<script>
import AuthService from '../auth/AuthService'
const auth = new AuthService()

export default {
  name: 'home',
  data () {
    return {
      auth,
      authenticated: auth.authenticated
    }
  },
  created () {
    auth.authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    auth.renewSession()
  },
  methods: {
    login () {
      auth.login()
    },
    logout () {
      auth.logout()
    }
  }
}
</script>
