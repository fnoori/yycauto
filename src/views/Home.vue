<template>
  <div class="home">
    <div class="tier-one-row">
      <premium-card/>
      <premium-card/>
      <premium-card/>
      <premium-card/>
      <premium-card/>
      <premium-card/>
      <premium-card/>
      <premium-card/>
      <premium-card/>
    </div>

    <!--
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
  -->
  </div>
</template>

<script>
import AuthService from '../auth/AuthService'
import TierOne from '../components/TierOne'
const auth = new AuthService()

export default {
  name: 'home',
  components: {
    'premium-card': TierOne
  },
  data () {
    return {
      auth,
      authenticated: auth.authenticated
    }
  },
  /*
  created () {
    auth.authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
    })
    auth.renewSession()
  },
  */
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

<style scoped>
  .home {
    height: 100rem;
    margin: 1rem 0;
  }

  .tier-one-row {
    width: 100%;
    padding-top: 10px;
    overflow-x: scroll;
    padding-bottom: 5px;
    white-space: nowrap;
    position: relative;
  }
</style>
