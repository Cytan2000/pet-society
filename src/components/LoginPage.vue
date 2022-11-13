<style>
@import "./LoginPage.css";
</style>

<template>
  <body class="bg-gray-10">
    <div class=" grid grid-cols-3 h-full md:flex-row">
      <div class="back-img h-26 flex-auto md:col-span-2 col-span-3"></div>


      <div class="text-white h-26 flex-auto md:col-span-1 col-span-3 md:order-last order-first ">
        <div
          class="p-4 max-w-full max-w-sm bg-white rounded-lg md:rounded-l-none border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
          <div class="space-y-6 pb-10" >
            <h5 class="text-xl pb-5 font-medium text-gray-900 dark:text-white">
              Sign in to Pets Society!
            </h5>
            <div class="pb-1">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                required=""
                v-model="email"
              />
            </div>
            <div class="pb-1">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >Your password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                required=""
                v-model="password"
              />
            </div>
            
            <div class="flex items-start">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input type="checkbox" name="remember" id="" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" checked/>
                </div>
                <label
                  for="remember"
                  class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >Remember me</label
                >
              </div>
              <a
                href="/forget"
                class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                >Lost Password?</a
              >
            </div>
            <button
              @click="signIn"
              @keyup.enter="signIn"
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Login to your account
            </button>
            
            <button
              @click="signInWithGoogle"
              type="submit"
              class="w-full text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign In with Google (Buyers Only)
            </button>
            <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
              Not registered?
              <a
                href="./Register"
                class="text-blue-700 hover:underline dark:text-blue-500"
                >Create account</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { useRouter } from "vue-router";
import { getDatabase, ref as dbref, child, get } from "firebase/database";
const email = ref("");
const password = ref("");
const errMsg = ref(); //ERROR MESSAGE
const router = useRouter();
const provider = new GoogleAuthProvider();
const isLoggedIn = ref(false);
const auth = getAuth();

window.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) { 
        signIn();
      }
    });

onMounted(() => {
  //this checks whether the user is already logged in
  //this function will be called when the user logs in or out
  onAuthStateChanged(auth, (user) => {
    if (user) {
      //storing the user credentials locally on clients browser
      const unique_id = user.uid;
      const tableRef = dbref(getDatabase());
      get(child(tableRef, `users/${unique_id}`)).then((snapshot)=>{
        if(snapshot.exists()){
          localStorage.setItem("db_data",JSON.stringify(snapshot.val()));
          console.log(snapshot.val());
          if(snapshot.val().acc_type == "buyer"){
            router.push("/");
          }else{
            router.push("/sellerhome");
          }
        }else{
          console.log("No Data Available");
        }
      }).catch((error)=>{
        console.error(error);
      })

      //this stores the acc type that the user chose to login in
      localStorage.setItem("userCredential", JSON.stringify(user));

      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});

const signIn = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      console.log("Successfully signed in!");
      console.log(userCredential);
      // pls fix this routing
      // if(JSON.parse(localStorage.getItem("db_data")))
      localStorage.setItem("loadinggg", JSON.stringify({first:false}))

      
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
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
      alert(errMsg.value);
    });
};

const getout = () => {
  signOut(auth)
    .then(() => {
      window.localStorage.clear();
      console.log("Successfully Signed Out");
      router.push("/");
    })
    .catch((error) => {
      console.log(error.code);
    });
};

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      router.push("/");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(errorCode, errorMessage, email, credential);
    });
};


</script>
