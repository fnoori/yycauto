<template>
  <b-navbar toggleable="md" class="app-navbar">

    <b-navbar-brand>
      <router-link to="/">
        <img src="../../static/yycauto-logo-primary.svg" class="logo">
      </router-link>
    </b-navbar-brand>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="search-attributes">
      <b-input-group>
        <b-form-input type="text"></b-form-input>

        <b-input-group-append>
          <b-btn variant="outline-secondary" class="search-btn">
            <i class="material-icons">search</i>
          </b-btn>
          <b-btn variant="outline-secondary" class="advanced-btn">
            <i class="material-icons">keyboard_arrow_down</i>
          </b-btn>
        </b-input-group-append>
      </b-input-group>
    </b-navbar-nav>

    <div v-if="isAuthenticated" class="dropdown ml-auto">
      <button class="dropbtn"><i class="material-icons">account_box</i></button>
      <div class="dropdown-content">
        <router-link to="/account">Account</router-link>
        <hr class="account-dropdown"/>
        <a @click="logout" href="#">Logout</a>
      </div>
    </div>
  </b-navbar>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    components: {},
    data() {
      return {}
    },

    computed: {
      ...mapGetters([
        'isAuthenticated'
      ])
    },

    methods: {
      ...mapActions([
        'logout'
      ])
    }
  }
</script>

<style scoped>
  /* Base attribute overwrites */
  input[type="text"] {
    border: none;
  }
  input:focus {
    border-color: rgba(0,0,0,.2) !important;
    box-shadow: none !important;
  }
  button:hover {
    border-color: #c6c6c6;
    background: #f0f0f0;
    box-shadow: 0 1px 0 rgba(0,0,0,0.10);
    color: #333;
  }
  button {
    background: #f8f8f8 !important;
    border: none;
  }
  button:focus,
  button:active {
    outline: none !important;
    box-shadow: inset 0 1px 0 #ddd !important;
    background: #e9e9e9 !important;
    border-color: #c6c6c6 !important;
    color: #333 !important;
  }
  a,
  a:focus,
  a:active {
    color: white !important;
  }

  /* Bootstrap overwrites */
  .input-group-append {
    margin-left: 0 !important;
  }
  .navbar {
    background-color: #f44336 !important;
    padding: 0.5rem .5rem;
  }
  .navbar a,
  .navbar a:hover {
    text-decoration: none;
    color: white;
  }

  /* Custom */
  .logo {
        width: 7rem;
  }
  .sponsor-logo {
    margin-left: 0.5rem;
  }

  .search-btn {
    padding-top: 2px;
    width: 5rem;
  }
  .search-btn:before {
    content: '';
    border-left: 1px solid #F44336;
    position: absolute;
    height: 100%;
    bottom: 0px;
    left: 0px;
    margin-right: 2px;
  }
  .search-btn i {
    vertical-align: middle;
    font-size: 1.3em;
  }

  .advanced-btn {
    padding-top: 2px;
    width: 3rem;
    border: none;
  }
  .advanced-btn:before {
    content: '';
    border-left: 1px solid #F44336;
    position: absolute; 
    height: 100%;
    bottom: 0px;
    left: 0px;
    margin-right: 2px;
  }
  .advanced-btn:focus,
  .advanced-btn:active {
    outline: none !important;
    box-shadow: inset 0 1px 0 #ddd !important;
    background: #e9e9e9 !important;
    border-color: #c6c6c6 !important;
    color: #333 !important;
  }
  .advanced-btn i {
    vertical-align: middle;
    font-size: 1.3em;
  }
  .search-attributes {
    width: 50vw;
    margin: 0 8rem;
  }

  .account-dropdown {
    display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid #ccc;
    margin: 0.2rem auto;
    padding: 0;
    width: 9rem;
  }

  .dropbtn {
    background-color: #f44336 !important;
    color: white;
    padding: 0.5rem;
    font-size: 16px;
    border: none;
    cursor: pointer;
    height: 2rem;
  }
  .dropbtn i {
    font-size: 1.3em;
    line-height: 0.5 !important;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  .dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: #f44336;
    min-width: 160px;
    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  .dropdown-content a {
    color: black;
    padding: 8px 16px;
    text-decoration: none;
    display: block;
  }
  .dropdown-content a:hover {
    background-color: #D81E0F;
  }
  .dropdown:hover .dropdown-content {
    display: block;
  }
  .dropdown:hover .dropbtn {
    background-color: #D81E0F !important;
    color: white !important;
  }
  .dropbtn:focus,
  .dropbtn:active {
    outline: none !important;
    box-shadow: inset 0 0 0 #ddd !important;
    background: #f44336 !important;
    border-color: #c6c6c6 !important;
    color: white !important;
  }

  @media (max-width: 991px) {
    .search-attributes {
      width: 60vw;
      margin: 0px 4rem;
    }
  }

  @media (max-width: 767px) {
    /* Bootstrap overwrites */
    .navbar-brand {
     padding-top: 0 !important;
    }

    /* Custom */
    .search-attributes {
      width: 100vw;
      margin: 0px 0rem;
    }

    .dropdown {
      position: absolute;
      right: 0.35rem;
      top: 0.2rem;
      z-index: 10;
      padding-top: 0.3125rem;
      padding-bottom: 0.3125rem;
    }
  }

  @media (max-width: 320px) {
    /* Bootstrap override */
    .navbar-brand {
    font-size: 1rem;
    }

    /* Custom */
    .search-btn {
    padding-top: 2px;
    width: 3rem;
    }
  }
</style>