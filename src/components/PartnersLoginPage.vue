<template>
    <div class="partner-login">
        <form @submit.prevent="login({email, password})">
            <div>
                <div id="errorMsg" class="login-failed">{{ errorMsg }}</div>
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
        name: 'PartnerLogin',
        data() {
            return {
                email: '',
                password: '',
                errorMsg: ''
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
                if (this.email.length <= 0) {
                    this.errorMsg = 'Cannot email field blank'
                    return
                }
                if (this.password.length <= 0) {
                    this.errorMsg = 'Cannot leave password field blank'
                    return
                }

                this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password
                }).then((success) => {
                    console.log(success)
                    if (!success) {
                        this.errorMsg = 'Incorrect email and/or password'
                        return
                    }
                    this.$router.push('PartnersPage')
                })
            }
        }
    }
</script>

<style scoped>
    .partner-login {
        height: 95rem;
    }

    form {
        box-shadow: 0rem 0.1rem 0.5rem rgba(0, 0, 0, 0.5);
        width: 30rem;
        height: 20rem;
        margin: 5rem auto;
    }

    form div {
        height: 100%;
        display: block;
        text-align: center;
        padding-top: 4rem;
        position: relative;
    }

    form .login-failed {
        height: fit-content;
        text-align: center;
        margin-right: 8rem;
        line-height: 0rem;
        font-size: 0.8em;
        padding-top: 0;
        color: rgba(244, 67, 54, 1);
        position: absolute;
        left: 4rem;
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
        margin-top: 1.5rem;
    }

    form button:hover {
        cursor: pointer;
    }

    form input {
        border: 1px solid lightgray;
    }

    form input:focus {
        outline: solid 2px rgba(244,67,54,0.5);
    }

    @media(max-width: 520px) {
        form {
            width: 90vw;
            margin: 0rem auto;
        }

        form div input {
            width: 85vw;
        }
    }
</style>