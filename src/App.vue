<template>
    <div id="app">
        <app-header></app-header>
        <component v-bind:is="mainContent"></component>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from "./components/Header"
    import Footer from "./components/Footer"
    import Home from "./components/Home"

    export default {
        name: "app",
        components: {
            'app-header': Header,
            'app-footer': Footer,
            'app-home': Home
        },
        data() {
        return {
            mainContent: 'app-home' 
        }
    },

    methods: {}
    }
</script>

<style>
    /* Base attributes */
    body {
        font-family: 'Quicksand', sans-serif;
    }
    div,
    input,
    button,
    span {
        border-radius: 0px !important;
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
