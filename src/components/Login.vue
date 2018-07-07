<template>
<<<<<<< HEAD
    <div class="login">
        <b-form @submit="onLogin()" @reset="onReset">
            <img src="../../static/yycauto-logo-secondary.svg">
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

        <button @click="onLogin()">Click me</button>
=======
    <div>
        <input type="text" v-model="email" placeholder="Email"/>
        <input type="password" v-model="password" placeholder="Password"/>
        <button v-on:click="signUp">Signup</button>
        <br/><br/><br/><br/>

        <input type="text" v-model="email" placeholder="Email"/>
        <input type="password" v-model="password" placeholder="Password"/>
        <button v-on:click="login">Login</button>
        <div>{{token}}</div>
>>>>>>> parent of 0dbeba4... Created login page
    </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'
import { login, getAccessToken } from '../auth/auth.js'

export default {
    data() {
        return {
            email: '',
<<<<<<< HEAD
            password: ''
=======
            passwrod: '',
            token: 'something'
>>>>>>> parent of 0dbeba4... Created login page
        }
    },

    methods: {
<<<<<<< HEAD
        onLogin: function() {
            login()
            //axios.post
        },
        onReset: function() {

=======
        signUp: function() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode === 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert(errorMessage);
                }
                console.log(error);
            });
        },

        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(loginRes => {
                //this.token = loginRes.user.accessToken
                alert(loginRes.user.stsTokenManager.accessToken)
            })
            .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
            });
>>>>>>> parent of 0dbeba4... Created login page
        }
    }
}
</script>

<style scoped>
<<<<<<< HEAD
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
        background: #D81E0F !important;
    }
    button {
        background: #f44336 !important;
        border: none;
    }
    button:focus,
    button:active {
        outline: none !important;
        box-shadow: inset 0 1px 0 #ddd !important;
        background: #D81E0F !important;
    }
    form img {
        width: 15rem;
        margin-top: 2.5rem;
    }

    /* Custom */
    .login {
        height: 100vh;
    }
    .login form {
        box-shadow: 0px 0px 0.3rem rgba(0, 0, 0, 0.2);
        width: 30rem;
        height: 25rem;
        margin: 10rem auto;
        padding: 2rem;
        text-align: center;
    }
    .login form div {
        margin-top: 3.5rem;
    }
    .email {
        margin-bottom: 1rem;
    }
    .password {

    }
    .login form button {
        margin-top: 1rem;
    }
=======
>>>>>>> parent of 0dbeba4... Created login page
</style>
