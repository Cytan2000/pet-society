<template>
    <h1>Create an Account</h1>
    
    <p><input type="text" placeholder="Name" v-model="name"/></p>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p><button @click="register">Submit</button></p>

</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {getDatabase, set , ref as firebaseref} from "firebase/database";
import { useRouter } from 'vue-router';
import {app} from "../main.js";

const email = ref("");
const name = ref("");
const password = ref("");
const router = useRouter()
const database = getDatabase(app);



const register = () =>{
    createUserWithEmailAndPassword(getAuth(),email.value,password.value)
    .then((data)=>{
        const user = data.user;
        set(firebaseref(database, 'users/' + user.uid),{
            username:name,
            email:email,

        })
        console.log("Successfully registered!");
        router.push("/")
    })
    .catch((error)=>{
        console.log(error.code);
        alert(error.message);
    })
};




</script>