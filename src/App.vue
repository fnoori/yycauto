<template>
  <div id="app">
    <b-navbar toggleable="md" sticky="true">
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

      <b-button
        v-if="authenticated"
        class="ml-auto sign-out-btn">Logout</b-button>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      authenticated: false
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Comfortaa');

  #app {
    font-family: 'Comfortaa', cursive;
  }

  nav {
    background-color: #f44336 !important;
  }

  nav div,
  nav button,
  nav input {
    border-radius: 0 !important;
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
</style>
