<template>
    <!-- <h1>Forget Password</h1>
    <p><input type="text" placeholder="Email" v-model="email"/></p>
    <p><button @click="forgetpass">Submit</button></p> -->


    <body class="bg-gray-10">
    <div class="flex justify-center h-screen w-screen items-center">
      <div class="w-full md:w-1/2 flex flex-col items-center">
        <!-- text login -->
        <h1 class="text-center text-2xl font-bold text-gray-600 mb-6">Forget Password</h1>
        <!-- Display Name-->
        <div class="w-3/4 mb-6">
          <input
            type="text"
            class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            placeholder="Key in your email"
            v-model="email"
          />
        </div>

        <div class="w-3/4 mt-4">
          <button
            @click="forgetpass"
            type="submit"
            class="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700">
            Send Reset Email
          </button>
        </div>
      </div>
      </div>
  </body>
</template>


<script setup>
import { ref } from "vue";
import { getAuth, sendPasswordResetEmail  } from "firebase/auth";

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