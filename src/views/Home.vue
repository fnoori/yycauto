<template>
  <div class="home">
    <div class="tier-one-row">
      <tier-one/>
      <tier-one/>
      <tier-one/>
      <tier-one/>
      <tier-one/>
      <tier-one/>
      <tier-one/>
      <tier-one/>
      <tier-one/>
    </div>

    <div class="tier-two-row">
      <tier-two/>
      <tier-two/>
      <tier-two/>
      <tier-two/>
      <tier-two/>
      <tier-two/>
      <tier-two/>
      <tier-two/>
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
import TierTwo from '../components/TierTwo'
const auth = new AuthService()

export default {
  name: 'home',
  components: {
    'tier-one': TierOne,
    'tier-two': TierTwo
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
