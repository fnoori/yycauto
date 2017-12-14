<template>
    <div class="partner-login">
        {{ name }}
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                name: 'PartnersLoginPage',
            }
        }
        
    }
</script>

<style scoped>
    .partner-login {
        height: 200rem;
        margin: 0 15rem;
    }
</style>