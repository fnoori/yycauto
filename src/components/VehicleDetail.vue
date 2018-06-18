<template>
    <div>
        {{getVehicleDetails}}
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        computed: {
            ...mapGetters([
                'getVehicleDetails'
            ])
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
