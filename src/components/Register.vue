<template>
  <body class="bg-gray-10">
    <div class="flex justify-center h-screen w-screen items-center">
      <div class="w-full md:w-1/2 flex flex-col items-center">
        <!-- text login -->
        <h1 class="text-center text-2xl font-bold text-gray-600 mb-6">Create an account</h1>
        <!-- Display Name-->
        <div class="w-3/4 mb-6">
          Username
          <input
            type="text"
            name="username"
            id="username"
            class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            placeholder="Username"
            v-model="username"
          />
        </div>
        <!-- firstname -->
        <div class="w-3/4 mb-6">
          First Name
          <input
            type="text"
            name="fname"
            id="fname"
            class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            placeholder="First Name"
            v-model="firstname"
          />
        </div>
        <!-- lastname -->
        <div class="w-3/4 mb-6">
          Last Name
          <input
            type="text"
            name="lname"
            id="lname"
            class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            placeholder="Last Name"
            v-model="lastname"
          />
        </div>

        <!-- email input -->
        <div class="w-3/4 mb-6">
          Email
          <input
            type="email"
            name="email"
            id="email"
            class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            placeholder="Email"
            v-model="email"
          />
        </div>
        <!-- password input -->
        <div class="w-3/4 mb-6">
          Password
          <input
            type="password"
            name="password"
            id="password"
            class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="w-full mb-6">
            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Log in as: </h3>
            <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input name="acc" id="horizontal-list-radio-license" type="radio" value="buyer" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" checked>
                        <label for="horizontal-list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">I'm looking for a pet sitter!</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input name="acc" id="horizontal-list-radio-id" type="radio" value="seller"  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                        <label for="horizontal-list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">I want to pet sit!</label>
                    </div>
                </li>
              </ul>
        </div>
       <!-- <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
        <label for="jack">Jack</label> -->
        <div class="w-3/4 mt-4">
          <button
            @click="register"
            type="submit"
            class="py-4 bg-blue-400 w-full rounded text-blue-50 font-bold hover:bg-blue-700">
            Register
          </button>
        </div>
      </div>
      </div>
  </body>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword, getAdditionalUserInfo, signOut } from "firebase/auth";
import { getDatabase, set, ref as firebaseref } from "firebase/database";
import { useRouter } from "vue-router";
import { app } from "../main.js";

const email = ref("");
const username = ref("");
const password = ref("");
const firstname = ref("");
const lastname = ref("");
const acctype = ref("");
const router = useRouter();
const database = getDatabase(app);



const register = () => {
  console.log(document.querySelector('input[name="acc"]:checked').value);
  acctype.value = document.querySelector('input[name="acc"]:checked').value;
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      const user = data.user;
      set(firebaseref(database, "users/" + user.uid), {
        username: username.value,
        email: email.value,
        firstname: firstname.value,
        lastname: lastname.value,
        acc_type: acctype.value,
      
      });
      console.log(user.uid);
      //after account creation is successful, redirect to the login page
      signOut(getAuth())
      .then(() => {
        console.log("Successfully registered!");
        window.localStorage.clear();
        router.push("/login");
      })
      .catch((error) => {
        console.log(error.code);
      });
      router.push("/login");
    })

    //if cannot create account
    .catch((error) => {
      console.log(error.code);
      console.log("cannot create account")
      alert(error.message);
    });
};
</script>

