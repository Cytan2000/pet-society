<template>
    <h1>Forget Password</h1>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><button @click="forgetpass">Submit</button></p>
</template>


<script setup>
import { ref } from "vue";
import { getAuth, sendPasswordResetEmail  } from "firebase/auth";
import { useRouter } from 'vue-router';

const email = ref("");
const auth = getAuth();
const forgetpass = () =>{
    sendPasswordResetEmail(auth,email.value)
    .then(()=>{
        alert("Reset Password email has been sent! Please check your inbox")
    }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.errorMessage;
        console.log(errorMessage)

})
}

</script>