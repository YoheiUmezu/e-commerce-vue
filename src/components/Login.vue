<template>
    <div class="login_wrapper">
        <form action="">
            <div>
                <label for="email">Email Address</label>
                <input type="email" v-model="email" id="email" placeholder="Enter email address.">
            </div>
            <div>
                <label for="password">Password</label>
                <input type="password" v-model="password" id="password" placeholder="Enter email password.">
            </div>
            <button type="button" class="btn_green" @click.prevent="signIn">Sign in</button>
        </form>
    </div>
</template>

<script>
// import { firebaseAuth } from "../firebase"
import store from '../store'

    export default {
        name: 'login',
        data() {
            return {
                email: "",
                password: ""
            }
        },
        methods: {
            // async signIn() {
            //     // try {
            //     //     await firebaseAuth.signInWithEmailAndPassword(
            //     //         this.email,
            //     //         this.password
            //     //     )
            //     // }
            //     // catch(error) {
            //     //     const errorCode = error.code
            //     //     const errorMesage = error.message
            //     //     if(errorCode === 'auth/wrong-password') {
            //     //         alert('wrong password')
            //     //     } else {
            //     //         alert(errorMesage)
            //     //     }
            //     // }
                
            // }
            signIn() {
                const user = {
                    email: this.email,
                    password: this.password
                }
                store.dispatch('signIn', user)
            }
        }
    }
</script>

<style lang="scss" scoped>
.login_wrapper {
    margin: 10px;
}

</style>