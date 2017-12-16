<template>
    <div class="partner-page">
        <form @submit.prevent="login({email, password})">
            <div>
                <input v-model="email" placeholder="Email" type="text" />
                <input v-model="password" placeholder="Password" type="password" />
                <button type="submit">Login</button>
            </div>
        </form>
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
                    this.$router.push('PartnersPage')
                }).catch(error => {
                    console.log('from login page', error)
                })
            }
        }
    }
</script>

<style scoped>
    .partner-page {
        height: calc(100vh - 216px);
    }

    form {
        box-shadow: 0rem 0.1rem 0.5rem rgba(0, 0, 0, 0.5);
        width: 40rem;
        height: 20rem;
        margin: 5rem auto;
    }

    form div {
        height: 100%;
        display: block;
        text-align: center;
        padding-top: 4rem;
    }

    form div input {
        display: block;
        margin: 1rem auto;
        height: 2.5rem;
        width: 22rem;
        padding: 1rem;
    }

    form button {
        border: none;
        background-color: rgba(244, 67, 54, 1);
        color: white;
        height: 2.5rem;
        width: 7rem;
    }

    form input {
        border: 1px solid lightgray;
    }

    form input:focus {
        outline: none !important;
    }
</style>