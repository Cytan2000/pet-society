<template>
    <body class="bg-gray-10 ">
   <div class="flex justify-center h-screen w-screen items-center">
    <div class="w-full md:w-1/2 flex flex-col items-center " >
        <!-- text login -->
        <h1 class="text-center text-2xl font-bold text-gray-600 mb-6">LOGIN</h1>
        <!-- email input -->
        <div class="w-3/4 mb-6">
            <input type="email" name="email" id="email" class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500" placeholder="Email" v-model="email">
        </div>
        <!-- password input -->
        <div class="w-3/4 mb-6">
            <input type="password" name="password" id="password" class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500 " placeholder="Password" v-model="password">
        </div>
        <!-- remember input -->
        <div class="w-3/4 flex flex-row justify-between">
            <div class=" flex items-center gap-x-1">
                <input type="checkbox" name="remember" id="" class=" w-4 h-4  ">
                <label for="" class="text-sm text-slate-400">Remember me</label>
            </div>
            <div>
                <a href="#" class="text-sm text-slate-400 hover:text-blue-500">Forgot?</a>
            </div>
        </div>
        <!-- button -->
        <div class="w-3/4 mt-4">
            <button @click="signIn" type="submit" class="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700"> LOGIN</button>
        </div>
        <div class="w-3/4 mt-4">
            <button @click="getout" type="submit" class="py-4 bg-red-400 w-full rounded text-blue-50 font-bold hover:bg-red-700"> Logout</button>
        </div>
        <div>
            <p v-if="errMsg">{{ errMsg }}</p>
        </div>
    </div>
   </div>
</body>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword,signOut } from "firebase/auth";
import { useRouter } from 'vue-router';
const email = ref("");
const password = ref("");
const errMsg = ref() //ERROR MESSAGE 
const router = useRouter()



const register = () =>{
    
};

const signIn = () =>{
    const auth = getAuth()
    signInWithEmailAndPassword(auth,email.value,password.value)
    .then((userCredential)=>{
        console.log("Successfully signed in!");
        router.push("/")
    })
    .catch((error)=>{
        console.log(error.code);
        switch (error.code){
            case "auth/invalid-email":
                errMsg.value = "Invalid email";
                break;
            case "auth/user-not-found":
                errMsg.value = "No account with that email was found";
                break;
            case "auth/wrong-password":
                errMsg.value = "Incorrect password";
                break;
            default:
                errMsg.value = "Email or password was incorrect";
                break;
        }
    });
};

const getout = () =>{
    const auth = getAuth();
    signOut(auth)
    .then(()=>{
      console.log("Successfully Signed Out");
      router.push("/")  
    })
    .catch((error)=>{
        console.log(error.code);
    });
}

</script>