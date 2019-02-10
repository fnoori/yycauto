<template>
  <div id="app">
    <b-navbar toggleable="md">
      <b-navbar-brand to="/">
        <img src="@/assets/primary_logo.png" alt=""/>
      </b-navbar-brand>

      <b-nav-form class="mx-auto">
        <!--<b-form-input size="sm" class="mr-sm-2" type="text"/>-->
        <b-input-group>
          <b-form-input></b-form-input>
          <b-input-group-append>
            <b-btn>Search</b-btn>
          </b-input-group-append>
        </b-input-group>
      </b-nav-form>





    </b-navbar>
    <router-view/>
  </div>
</template>

<style>
  @import url('https://fonts.googleapis.com/css?family=Comfortaa');

  #app {
    font-family: 'Comfortaa', cursive;
  }

  nav {
    background-color: #f44336 !important;
  }

  /* bootstrap-vue overwritten rules */
  .navbar form {

  }
  .navbar form input {
    width: 50vw !important;
    border-radius: 0;
    box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.1);
  }
  .navbar .form-control {
    border: none;
  }
  .navbar .form-control:focus {
    box-shadow: none;
    z-index: 0 !important;
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
  }
  .navbar .input-group-append {
    margin-left: 1px;
  }
  .navbar .btn {
    border-radius: 0;
    border: 0;
    box-shadow: 0px 1px 1px 0px rgba(0,0,0,0.1);
    color: #f44336;
    background-color: white;
  }
  .navbar .btn:hover {
    color: #f44336;
    background-color: white;
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,0.1);
  }
  .navbar .btn-secondary:active {
    box-shadow: 0px 0px 2px 3px rgba(0,0,0,0.1) !important;
    background-color: white !important;
    border: none !important;
    color: #f44336 !important;
  }

  .navbar-brand {
    margin-right: 0;
  }
  .navbar-brand img {
    width: 6rem;
  }
</style>
