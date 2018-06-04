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
                    <b-btn variant="outline-secondary" class="advanced-btn">
                        <i class="material-icons">keyboard_arrow_down</i>
                    </b-btn>
                </b-input-group-append>
            </b-input-group>
        </b-navbar-nav>
        <b-dropdown id="account" right text="Account" class="m-0 account-btn">
            <b-dropdown-item-button>Inventory</b-dropdown-item-button>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item-button>Logout</b-dropdown-item-button>
        </b-dropdown>
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
        background: #f8f8f8;
    }

    /* Bootstrap overwrites */
    .input-group-append {
        margin-left: 0 !important;
    }
    .navbar {
        background-color: #f44336 !important;
    }
    .navbar a,
    .navbar a:hover {
        text-decoration: none;
        color: white;
    }

    /* Custom */
    .account-btn:focus {
        box-shadow: none !important;
    }
    .search-btn {
        padding-top: 2px;
        width: 5rem;
        border: none;
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
    .search-btn:focus,
    .search-btn:active {
        outline: none !important;
        box-shadow: inset 0 1px 0 #ddd !important;
        background: #e9e9e9 !important;
        border-color: #c6c6c6 !important;
        color: #333 !important;
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
    .advanced-btn i {
        vertical-align: middle;
        font-size: 1.3em;
    }
    .search-attributes {
        width: 50vw;
        margin: 0 10rem;
    }

    .account-btn button:focus {
        outline: none !important;
    }
    .account-btn button:hover {
        box-shadow: none !important;
        padding: 1rem 1rem;
        background-color: red !important;
    }
    .account-btn button {
        background-color: white !important;
        text-align: right !important;
    }


    @media (max-width: 991px) {
        .search-attributes {
            width: 60vw;
            margin: 0px 4rem;
        }
    }

    @media (max-width: 767px) {
        .search-attributes {
            width: 100vw;
            margin: 0px 0rem;
        }
    }
</style>