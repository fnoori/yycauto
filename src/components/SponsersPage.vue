<template>
    <div>
        <form @submit.prevent="login({email, password})">
            <div>
                <input v-model="email" type="text" />
                <input v-model="password" type="password" />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>

        <div>
            <button type="button" @click="logout">Logout</button>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions, mapMutations } from 'vuex'

    export default {
        name: 'SponsersPage',
        data() {
            return {
                msg: 'Welcome to the sponsers page',
                email: '',
                password: ''
            }
        },
        computed: {
            ...mapGetters([
                'count',
                'isLoggedIn'
            ])
        },
        methods: {
            login: function () {
                this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password
                }).then(() => {
                    console.log('logged in !')
                })
            },

            logout: function () {
                this.$store.dispatch('logout').then(
                    console.log('Logged out !')
                )
            }
        }
    }
</script>