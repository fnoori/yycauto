<template>
  <div id="app">
    <b-navbar toggleable="md" :sticky="true">
      <b-navbar-brand to="/">
        <img src="@/assets/logos/primary_logo.png" alt=""/>
      </b-navbar-brand>
      <a href="#">
        <img class="sponsor" src="@/assets/logos/sponsored_logo.png" alt="">
      </a>

      <b-nav-form class="mx-auto">
        <b-input-group>
          <b-form-input></b-form-input>
          <b-input-group-append>
            <b-btn>Search</b-btn>
          </b-input-group-append>
        </b-input-group>
      </b-nav-form>

<!--
      <b-button
        v-if="authenticated"
        class="ml-auto sign-out-btn"
        @click="logout">Logout</b-button>
-->

      <div class="dropdown">
        <button class="dropbtn">Account</button>
        <div class="dropdown-content">
          <a href="#">Inventory</a>
          <a href="#">Dealership</a>
          <hr/>
          <a href="#">Logout</a>
        </div>
      </div>
    </b-navbar>
    <router-view/>
    <footer>
      <router-link to="/about">About</router-link>
      <div>{{(new Date()).getFullYear()}} Farzam</div>
    </footer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  methods: mapActions(['login', 'logout']),
  computed: mapGetters(['authenticated'])
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Comfortaa');

  .dropbtn {
    background-color: white;
    color: #f44336;
    font-size: 16px;
    border: none;
    padding: 0.375rem 0.75rem;
    box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.1);
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: white;
    min-width: 160px;
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
    z-index: 1;
    right: 0rem;
  }

  .dropdown-content a {
    color: #f44336 !important;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
    text-decoration: none !important;
  }

  .dropdown:hover .dropdown-content {display: block;}

  .dropdown:hover .dropbtn {
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
  }


/*sdfsafasfsfasfasdfsadsadsadasdfsdasdfasdfsd*/
  #app {
    font-family: 'Comfortaa', cursive;
    -webkit-overflow-scrolling: touch;
  }

  nav {
    background-color: #f44336 !important;
  }

  nav div,
  nav button,
  nav input {
    border-radius: 0 !important;
  }

  a,
  a:focus,
  a:active {
    color: white !important;
  }
  a.text-light:hover,
  a.text-light:focus {
    color: white !important;
  }
  footer {
    background-color: #f44336;
    bottom: 0;
    width: 100%;
    color: white;
    height: 40px;
    padding: 0.5rem 1rem;
  }
  footer a {
    float: right;
  }

  /* bootstrap-vue overwritten rules */
  .navbar-brand {
    margin-right: 0 !important;
  }
  .navbar-brand img {
    width: 8rem;
    margin: -0.5rem 0rem;
  }
  .navbar form .input-group {
    width: -moz-available;
    width: -webkit-fill-available;
  }
  .navbar form input {
    width: 50vw !important;
    box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.1);
  }
  .navbar form .form-control {
    border: none;
  }
  .navbar form .form-control:focus {
    box-shadow: none;
    z-index: 0 !important;
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
  }
  .navbar form .input-group-append {
    margin-left: 1px;
  }
  .navbar form .btn {
    border: 0;
    box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.1);
    color: #f44336;
    background-color: white;
  }
  .navbar form .btn:hover {
    color: #f44336;
    background-color: white;
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
  }
  .navbar form .btn-secondary:active {
    box-shadow: 0px 0px 2px 3px rgba(0,0,0,0.1) !important;
    background-color: white !important;
    border: none !important;
    color: #f44336 !important;
  }
  .sponsor {
    width: 4rem;
    margin: -0.5rem 0rem -0.5rem 0.5rem;
  }
  .nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #f44336 !important;
  }
  .list-group-item {
    border-radius: 0 !important;
    border: none !important;
    padding: 0 !important;
    margin: .5rem 0 !important;
  }

  /* custom css */
  .sign-out-btn {
    background-color: white !important;
    border: none !important;
    color: red !important;
    font-weight: bold !important;
    font-size: .8em !important;
    border-radius: 1rem !important;
    box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.1) !important;
  }
  .sign-out-btn:hover {
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1) !important;
  }
  .sign-out-btn:active {
    box-shadow: 0px 0px 2px 3px rgba(0,0,0,0.1) !important;
  }

  @media (max-width: 630px) {
    /* bootstrap-vue overwritten rules */

    .navbar form {
      margin: 1rem 0 0 0 !important;
      width: 100vw;
    }
  }

  @media (max-width: 456px) {
    #__BVID__13__BV_tab_controls_ {
      font-size: 0.8rem;
    }
  }

</style>
