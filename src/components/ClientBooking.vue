<style>
@import "./ClientBooking.css";
</style>

<template >

    <base-dialog2 v-if="showDialog">

    <template #default>
      <BookingConfirmation></BookingConfirmation>
    </template>
    <template #actions>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 cursor-pointer mx-2"
        @click="confirmDialogMsg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </template>
  </base-dialog2>
<div class="flex flex-wrap">
  <div class="w-full md:w-1/2 xl:w-3/4 p-6">
    <img class="object-fill w-full" :src="this.info.imgurls" style="height: 36rem;"/>
  </div>
  <div class="w-full md:w-1/2 xl:w-1/4 p-6">
    <img class="py-3" src="https://firebasestorage.googleapis.com/v0/b/wad2-e6bc2.appspot.com/o/Screenshot%202022-11-12%20at%209.35.21%20PM.png?alt=media&token=198b45c2-dc84-421c-9804-6720d1fd751a" alt="">
    <img class="py-3" src="https://firebasestorage.googleapis.com/v0/b/wad2-e6bc2.appspot.com/o/Screenshot%202022-11-12%20at%209.39.46%20PM.png?alt=media&token=fd2ce56b-6cdd-4c5b-941d-5a235b14e219" alt="">
  </div>
</div>
  
  <div class="flex flex-wrap">
    <div class="w-full md:w-1/2 xl:w-4/8 p-6">
        <div class="bg-gradient-to-b from-yellow-500 to-yellow-300 border-b-4 border-yellow-600 rounded-lg shadow-2xl p-5">
            <div class="flex flex-row items-center">
                <div class="flex-1 text-right md:text-left">
                    <h5 class="font-bold uppercase text-gray-600">{{this.info.ListingName}} </h5>
                    <div class="border-t border-black mt-2 py-2">
                      <h3 class="font-bold text-lg">Address:</h3>
                    <h3 class="text-sm">{{ this.info.Workaddress}} {{this.info.WorkPostal}}</h3>
                    </div>
                    <div class="border-t border-black mt-2 py-2">
                      <h3 class="font-bold text-lg">Description:</h3>
                      <h3 class="text-sm">{{ this.info.Description}}</h3>
                    </div>
                    <div class="border-t border-black mt-2 py-2">
                      <h3 class="font-bold text-lg">Accepted Pet Types:</h3>
                      <h3 class="text-sm -ml-3 -mr-8">
                        <span v-for="pet in this.info.PetType" class="px-3">{{pet}}</span>
                      </h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  
    <div class="w-full md:w-1/2 xl:w-4/8 p-6">
        <div class="bg-gradient-to-b from-yellow-500 to-yellow-300 border-b-4 border-yellow-600 rounded-lg shadow-2xl p-5">
            <div class="flex flex-row items-center">
                <div class="flex-1 text-right md:text-left">
                    <h5 class="font-bold uppercase text-gray-600">What We Offer </h5>
                    <div class="border-t border-black mt-2 py-2">
                      <h3 class="font-bold text-lg mt-2">Pet Boarding</h3>
                    </div>
                </div>
            </div>
            <div class="flex-1 text-right md:text-left">
              <div class="border-t border-black mt-2 py-1">
                <h3 class="font-bold text-md">@ only SGD{{this.info.Rate}} per night </h3>
              </div>
              <div class="border-t border-black py-2">
                <h3 class="font-bold text-md mb-3">Book via Pet society to enjoy Premium Insurance, 24/7 support, booking guarantee, photo updates and more!</h3>
              </div>
              <button @click="showDialog = !showDialog" type="submit" class="w-50 content-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Create New Job
              </button>
            </div>
        </div>
    </div>
                
</div>




<!---
  <div class="grid grid-cols-6 gap-4 h-full md:flex-row back-color">
    <div class="h-26 flex-auto md:col-span-5 col-span-5">
      // img
      <div
        href="#"
        class="flex flex-col items-center bg-white border md:flex-row md:max-w-full dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img class="object-fill w-full" :src="this.info.imgurls" style="height: 36rem;"/>
        
      </div>
      <div class="flex flex-row justify-between">
      <div class="w-1/2 h-96 rounded-lg shadow-2xl mx-2 my-3 bg-white">
        
        <div class="p-3">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{this.info.ListingName}}</h5>
        </div>

        <div class="border-t border-b border-black py-5">

        <h4 class="text-xl font-semibold px-3">Address:</h4>
        <div class="px-3">
        {{ this.info.Workaddress}} {{this.info.WorkPostal}}
        </div>
        
      </div>
      <div>
        <div class="px-3">
            {{this.info.Description}}
        </div>
        <div class="px-3 my-2 text-xl font-semibold">
          Accepted Pet Types :
        </div>

        <span v-for="pet in this.info.PetType" class="px-3">
          {{pet}}
        </span>
      </div>
      </div>

</div>
-->
<!--
      <div class="w-1/2 h-96  mx-2 my-3  flex justify-end">
        <div class=" bg-white rounded-xl shadow-2xl " style="width:90%">
          <div class="text-center text-3xl border border-grey p-4"> What We Offer </div>
          <div class="flex flex-row w-full"><div>
          <div class="text-gray-500 pl-4 pt-4">Pet Boarding</div>
          <div class="pb-4 px-4">@ only SGD{{this.info.Rate}} per night</div>
          </div>
          <div>
            <div class="flex mt-6 px-4">
              <button
          @click="showDialog = !showDialog"
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create New Job
        </button>
            </div>
            </div>
          
      </div>
          <div class="px-4">Book via Pet society to enjoy Premium Insurance, 24/7 support, booking guarantee, photo updates and more!</div>
          <div class="flex justify-center">
            
      </div>
        </div>
      </div>
      </div>






      <div class="flex flex-col justify-between p-4 leading-normal">
          <h5
            class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      
          >{{this.info.ListingName}}
            
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Reviews
          </p>
            <div class="flex items-center">
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
            <svg aria-hidden="true" class="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
        </div>
        </div>
      <div class="border-t border-b py-5 ml-5">

        <h4 class="text-xl font-semibold">Address:</h4>{{ this.info.Workaddress}}
      </div>
      <div class="border-t border-b py-5 ml-5">
        <h4 class="text-xl font-semibold">Description:</h4>
        {{ this.info.Description }}
      </div>
      <div class="grid content-center">
        <button
          @click="showDialog = !showDialog"
          type="submit"
          class="w-50 content-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create New Job
        </button>
      </div>
      <div class="my-2 py-5 border-t  ml-5">Review
      <article>
    <div class="flex items-center  mb-4 space-x-4">
        <img class="w-10 h-10 rounded-full" src="https://picsum.photos/200/300" alt="">
        <div class="space-y-1 font-medium dark:text-white">
            <p>Jese Leos <time datetime="2014-08-16 19:00" class="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
        </div>
    </div>
    <div class="flex items-center mb-1">
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <svg aria-hidden="true" class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          <h3 class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
      </div>
      <footer class="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in Bishan on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></footer>
      <p class="mb-2 font-light text-gray-500 dark:text-gray-400">Very professional Seller</p>
      <p class="mb-3 font-light text-gray-500 dark:text-gray-400">Super caring and loving towards my pet crocodile. Takes photos of himself with the crocodile at times.</p>
      <aside>
          <p class="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
          <div class="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
              <a href="#" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
              <a href="#" class="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
          </div>
      </aside>
  </article>
  </div>
    </div>



    <div
      class="flex flex-col mr-2 items-center border justify-top text-white h-26 flex-auto md:col-span-1 col-span-3">
     <img src="https://firebasestorage.googleapis.com/v0/b/wad2-e6bc2.appspot.com/o/Screenshot%202022-11-12%20at%209.35.21%20PM.png?alt=media&token=198b45c2-dc84-421c-9804-6720d1fd751a" alt="">
     <img class="pb-3" src="https://firebasestorage.googleapis.com/v0/b/wad2-e6bc2.appspot.com/o/Screenshot%202022-11-12%20at%209.39.46%20PM.png?alt=media&token=fd2ce56b-6cdd-4c5b-941d-5a235b14e219" alt="">
    -->
      <!-- <div date-rangepicker class="flex items-center">
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            name="start"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date start"
          />
        </div>
        <span class="mx-4 text-gray-500">to</span>
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            name="end"
            type="text"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select date end"
          />
        </div>
      </div> -->
      <!-- calender end -->
      
      <!-- <div class="align-middle">
        <button
          @click="showDialog = !showDialog"
          type="submit"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create New Job
        </button>
      </div> 
    </div>
  </div>
  -->
</template>

<script>



import { getDatabase, onValue, ref,push,child,update } from "firebase/database";
import BookingConfirmation from "./BookingConfirmation.vue";

import BaseDialog2 from "./UI/BaseDialog2.vue";
 export default{
  components: { BaseDialog2, BookingConfirmation },
  data(){
    return{
      info:"",
      showDialog:false,
      id:"",
    }

  },
  methods: {
    confirmDialogMsg() {
      this.showDialog = false;
    },
    get_data() {
      const db = getDatabase();
      const userRef = ref(db, "bookings/" + this.id);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        this.info = data;
      });
    },
    accept_job() {
      this.confirmDialogMsg();
      const db = getDatabase();
      const usercreds = JSON.parse(localStorage.getItem("userCredential"));
      var newJobkey = push(child(ref(db), "accepted_job")).key;
      update(ref(db, "accepted_job/" + newJobkey), {
        buyer_id: usercreds.uid,
        seller_id: this.info.SellerID,
      });
    },
  },

  mounted() {
    this.id = this.$route.params.id;
    this.get_data();
  },
};
</script>
