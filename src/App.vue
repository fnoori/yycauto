<template>
    <div id="app">
        <app-header></app-header>
        <app-home></app-home>
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
        return {};
    },

    methods: {}
    }
</script>

<style>
    body {
        font-family: 'Quicksand', sans-serif;
    }
    div,
    input,
    button,
    span {
        border-radius: 0px !important;
    }
</style>
