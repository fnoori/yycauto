<template>
    <div>
        <input type="text" v-model="email" placeholder="Email"/>
        <input type="password" v-model="password" placeholder="Password"/>
        <button v-on:click="signUp">Signup</button>
        <br/><br/><br/><br/>

        <input type="text" v-model="email" placeholder="Email"/>
        <input type="password" v-model="password" placeholder="Password"/>
        <button v-on:click="login">Login</button>
        <div>{{token}}</div>
    </div>
</template>

<script>
import firebase from 'firebase'
import axios from 'axios'

export default {
    data() {
        return {
            email: '',
            passwrod: '',
            token: 'something'
        }
    },

    methods: {
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
        }
    }
}
</script>

<style scoped>
</style>
