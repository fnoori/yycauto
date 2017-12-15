<template>
    <div>
        hello {{ count }}
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
    </div>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: 'SponsersPage',
        data() {
            return {
                msg: 'Welcome to the sponsers page'
            }
        },
        computed: mapGetters([
            'count'
        ]),
        methods: mapMutations([
            'increment',
            'decrement',
        ])
    }
</script>