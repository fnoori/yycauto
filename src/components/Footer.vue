<template>
    <footer>
        YYC Automotives |
        <a href="mailto:farzamn80@gmail.com">farzamn80@gmail.com</a> |
        <a href="tel:1-562-867-5309">1-562-867-5309</a>
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

    @media (max-width: 480px) {
        footer {
            font-size: 3.3vw;
            padding: 0.65rem 1rem;
        }
    }

    @media (max-width: 441px) {
        footer {
            font-size: 3.2vw;
            padding: 0.65rem 1rem;
        }
    }

    @media (max-width: 399px) {
        footer {
            font-size: 3.2vw;
            padding: 0.75rem 1rem;
            text-align: center;
        }
    }
</style>