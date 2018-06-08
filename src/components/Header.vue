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
        
        <b-btn variant="outline-secondary" class="account-btn account-mgmt-btn ml-auto">
            <i class="material-icons">account_box</i>
        </b-btn>
        <!--
        <b-btn variant="outline-secondary" class="logout-btn account-mgmt-btn">
            Logout
        </b-btn>
        -->
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
        margin: 0 10rem;
    }

    .account-btn {
        height: 2.2rem;
    }
    .account-mgmt-btn {
        background: transparent !important;
        color: white;
    }
    .account-mgmt-btn:hover {
        background-color: #D81E0F !important;
        color: white !important;
    }
    .account-mgmt-btn:focus,
    .account-mgmt-btn:active {
        background-color: #D81E0F !important;
        color: white !important;
        border: none !important;
        box-shadow: none !important;
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