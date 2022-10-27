<template>
  <body class="bg-gray-10">
    <div class="flex justify-center h-screen w-screen items-center">
      <div class="w-full md:w-1/2 flex flex-col items-center">
        <!-- text login -->
        <h1 class="text-center text-2xl font-bold text-gray-600 mb-6">Register</h1>
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
          <input
            type="password"
            name="password"
            id="password"
            class="w-full py-4 px-8 bg-slate-200 placeholder:font-semibold rounded hover:ring-1 outline-blue-500"
            placeholder="Password"
            v-model="password"
          />
        </div>
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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref as firebaseref } from "firebase/database";
import { useRouter } from "vue-router";
import { app } from "../main.js";

const email = ref("");
const username = ref("");
const password = ref("");
const firstname = ref("")
const lastname = ref("")
const router = useRouter();
const database = getDatabase(app);

const register = () => {
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      const user = data.user;
      set(firebaseref(database, "users/" + user.uid), {
        username: username.value,
        email: email.value,
        firstname: firstname.value,
        lastname: lastname.value
      });
      console.log("Successfully registered!");
      router.push("/home");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
</script>