<template>
    <b-navbar toggleable="md" class="app-navbar">

        <b-navbar-brand href="#">YYC Automotives</b-navbar-brand>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="search-attributes">
            <b-input-group>
                <b-form-input type="text"></b-form-input>

                <b-input-group-append>
                    <b-btn variant="outline-secondary" class="search-btn">
                        <i class="material-icons">search</i>
                    </b-btn>
                    <b-btn variant="outline-secondary">Button</b-btn>
                </b-input-group-append>
            </b-input-group>
        </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },

  methods: {}
}
</script>

<style scoped>
    input[type="text"] {
        border: none;
    }
    input:focus {
        border-color: rgba(0,0,0,.2) !important;
        box-shadow: none !important;
    }
    button:focus,
    button:active {
        outline: none !important;
        box-shadow: none !important;
        background-color: white;
        border-color: white;
    }
    button:hover {
        color: #394651;
    }
    button:before {
        content: '';
        border-left: 1px solid #F44336;
        position: absolute;
        height: 100%;
        bottom: 0px;
        left: 0px;
        margin-right: 2px;
    }
    button i {
        color: rgba(0, 0, 0, 0.5);
        vertical-align: middle;
        font-size: 1.3em;
    }

    .navbar {
        background-color: #f44336 !important;
    }
    .navbar a,
    .navbar a:hover {
        text-decoration: none;
        color: white;
    }
    .search-btn {
        background-color: white;
        border: none;
    }

    .search-attributes {
        width: 50vw;
        margin: 0 10rem;
    }
</style>