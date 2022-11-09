<style>
.backg-img {
  background-image: url(https://i.postimg.cc/LXdtxzgt/cat.jpg);
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
}
</style>

<template>
  <!-- component -->
  <div class="backg-img min-h-screen flex flex-col">
    <div
      class="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2"
    >
      <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
        <h1 class="mb-8 text-3xl text-center">Sign Up</h1>
        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="username"
          id="username"
          placeholder="Username"
          v-model="username"
        />
        <div class="grid grid-cols-2 gap-4">
          <div class="col-span-1">
            <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="fname"
          id="fname"
          placeholder="First name"
          v-model="firstname"
        />
          </div>
          <div class="col-span-1">
            <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="lname"
          id="lname"
          placeholder="Last Name"
          v-model="lastname"
        />
          </div>
        </div>
        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="address"
          id="address"
          placeholder="Address"
          v-model="address"
        />

        <input
          type="text"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          id="email"
          placeholder="Email"
          v-model="email"
        />

        <input
          type="password"
          class="block border border-grey-light w-full p-3 rounded mb-4"
          name="password"
          id="password"
          placeholder="Password"
          v-model="password"
        />

        <div class="w-full mb-6">
          <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">
            Log in as:
          </h3>
          <ul
            class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          >
            <li
              class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
            >
              <div class="flex items-center pl-3">
                <input
                  name="acc"
                  id="horizontal-list-radio-license"
                  type="radio"
                  value="buyer"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  checked
                />
                <label
                  for="horizontal-list-radio-license"
                  class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >I'm looking for a pet sitter!</label
                >
              </div>
            </li>
            <li
              class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
            >
              <div class="flex items-center pl-3">
                <input
                  name="acc"
                  id="horizontal-list-radio-id"
                  type="radio"
                  value="seller"
                  class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  for="horizontal-list-radio-id"
                  class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
                  >I want to pet sit!</label
                >
              </div>
            </li>
          </ul>
        </div>
        <button
          type="submit"
          @click="register"
          class="w-full text-center py-3 rounded bg-green-500 text-white hover:bg-green-600 focus:outline-none my-1"
        >
          Create Account
        </button>

        <div class="text-center text-sm text-grey-dark mt-4">
          By signing up, you agree to the
          <a
            class="no-underline border-b border-grey-dark text-grey-dark"
            
          >
            Terms of Service
          </a>
          and
          <a
            class="no-underline border-b border-grey-dark text-grey-dark"
            
          >
            Privacy Policy
          </a>
        </div>
      </div>

      <div class="text-grey-dark mt-6">
        Already have an account?
        <a class="text-blue-700 hover:underline dark:text-blue-500" href="../login/">
          Log in </a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  signOut,
} from "firebase/auth";
import { getDatabase, set, ref as firebaseref } from "firebase/database";
import { useRouter } from "vue-router";
import { app } from "../main.js";

const email = ref("");
const username = ref("");
const password = ref("");
const firstname = ref("");
const lastname = ref("");
const acctype = ref("");
const address = ref("")
const router = useRouter();
const database = getDatabase(app);

window.addEventListener('keyup', function(event) {
      if (event.keyCode === 13) { 
        register();
      }
    });

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
        address: address.value
      });
      //after account creation is successful, redirect to the login page
      console.log(user.uid);
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
      console.log("cannot create account");
      alert(error.message);
    });
};
</script>
