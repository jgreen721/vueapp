<template lang="">
    <div class="app">
        <div class="bg-custom text-center text-light">
            <h1>Vue.JS Personalized Task-App </h1>
            <p>Sign in and find <em>your</em> tasks. </p>
        </div>

        <div class="app-content d-flex align-items-center justify-content-center bg-secondary flex-column">
            <h2 class="text-light my-4">{{$store.state.error}} </h2>
            <div class="p-3 bg-light w-50 rounded">
                <div class="form-div p-2">
                    <label for="username"><strong>Username:</strong></label>
                    <input type="text" name="username" v-model="username" placeholder="Sign in your username" autocomplete="off" class="form-control w-100 p-1">
                </div>
                  <div class="form-div p-2">
                    <label for="password"><strong>Password:</strong></label>
                    <input type="text" name="password" v-model="password" placeholder="Your password" autocomplete="off" class="form-control w-100 p-1">
                </div>
                <div class="p-1">
                    <button @click="handleLogin" class="btn btn-danger text-light w-50"><strong>Login </strong> </button>
                </div>
            </div>
        </div>

        <div class="bg-custom text-center text-light">
            <p>Footer&copy;</p>
        </div>
        
    </div>
</template>
<script>
import {mapActions} from "vuex"
export default {
    name:"LoginView",
    data(){
        return{
            username:"",
            password:"",
            error:""
        }
    },
    methods:{
        ...mapActions([
            "login"
        ]),
        handleLogin(){
            console.log("handleLogin fired!");
            let user={
                username:this.username,
                password:this.password
            }
            this.username = "";
            this.password = "";
            console.log(user);
            this.login(user)

        }
    }
}
</script>
<style lang="">
    
</style>