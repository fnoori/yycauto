<template>
    <footer>
        <router-link to="/about">About</router-link>
        <div>©2018 Farzam</div>
    </footer>
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
    a,
    a:focus,
    a:active {
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
</style>