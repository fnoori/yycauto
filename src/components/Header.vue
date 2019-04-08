<template>
  <b-navbar type="dark" variant="primary">
    <b-navbar-brand>
      <router-link :to="{ name: 'home' }">
        <img src="@/assets/logos/primary.png" class="logo">
      </router-link>
    </b-navbar-brand>

    <div class="search-bar">
      <b-input-group class="mt-3">
        <b-form-input></b-form-input>
        <b-input-group-append>
          <b-button variant="info btn-sm">
            <i class="material-icons">
            search
            </i>
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </div>

  </b-navbar>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      menuExpanded: false,
      loggedIn: true
    }
  },

  methods: {
  }
}
</script>

<style lang="scss" scoped>
  nav {
    box-shadow: 0 0px 1px 0px rgba(0,0,0,.15);
  }

  input:focus {
    box-shadow: none !important;
    border-color: white !important;
  }
  input {
    border-radius: 0 !important;
    border: white !important;
  }
  .form-control:focus {
    z-index: 1 !important;
  }
  .btn {
    border-radius: 0 !important;
    line-height: 1;
    border-left: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: white;
    border-top: white;
    width: 5rem;
  }

  .material-icons {
    line-height: 1;
    color: #56423a;
  }

  .search-bar {
    box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 320px) {
    nav {
      display: block !important;
      .logo {
        width: 6rem;
      }
      .navbar-brand {
        display: block !important;
      }
      .search-bar {
        display: block !important;
      }
    }
  }
</style>
