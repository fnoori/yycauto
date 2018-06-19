<template>
    <div id="app">
        <app-header></app-header>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import Footer from "./components/Footer"
    import Home from "./components/Home"

    import {mapGetters} from 'vuex'

    export default {
        name: "app",
        components: {
            'app-header': Header,
            'app-footer': Footer
        },
        data() {
        return {
        }
    },
    computed: {
        ...mapGetters([
            'getVehicleDetails'
        ])
    },
    methods: {}
    }
</script>

<style>
    /* Base attributes */
    body {
        font-family: 'Quicksand', sans-serif;
        -webkit-overflow-scrolling: touch;
    }
    div,
    input,
    button,
    span {
        border-radius: 0px !important;
    }
    a:hover {
        text-decoration: none !important;
    }

    /* Bootstrap */
    .card {
        border: none !important;
        border-radius: 0 !important;
    }

    .card-img-top {
        border-radius: 0 !important;
    }
</style>
