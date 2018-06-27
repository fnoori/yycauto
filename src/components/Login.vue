<template>
    <div class="login">
        <b-form @submit="login" @reset="onReset">
            <div>
                <b-form-input v-model="email"
                              type="email"
                              placeholder="Email"
                              class="email"></b-form-input>
                <b-form-input v-model="password"
                            type="password"
                            placeholder="Password"
                            class="password"></b-form-input>
            </div>
            <b-button type="button" variant="primary">Forgot Password</b-button>
            <b-button type="submit" variant="primary">Login</b-button>
        </b-form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            email: '',
            password: '',
            token: 'something'
        }
    },

    methods: {
        login: function() {

        },

        onReset: function() {

        }
    }
}
</script>

<style scoped>
    /* Base attribute overwrites */
    input[type="text"] {
        border: none;
    }
    input:focus {
        border-color: rgba(0,0,0,.2) !important;
        box-shadow: none !important;
    }
    button:hover {
        border-color: #c6c6c6;
        background: #D81E0F;
    }
    button {
        background: #f44336 !important;
        border: none;
    }
    button:focus,
    button:active {
        outline: none !important;
        box-shadow: inset 0 1px 0 #ddd !important;
        background: #e9e9e9 !important;
        border-color: #c6c6c6 !important;
        color: #333 !important;
    }

    .login {
        height: 100vh;
    }
    .login form {
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
        width: 30rem;
        height: 25rem;
        margin: 10rem auto;
        padding: 2rem;
        text-align: center;
    }
    .login form div {
        margin-top: 10rem;
    }
    .email {
        margin-bottom: 1rem;
    }
    .password {

    }
    .login form button {
        margin-top: 1rem;
    }
</style>
