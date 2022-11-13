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
              <h3 class="font-bold text-md mb-3">@ only SGD{{this.info.Rate}} per night </h3>
              <h3 class="font-bold text-md mb-3">Book via Pet society to enjoy Premium Insurance, 24/7 support, booking guarantee, photo updates and more!</h3>
              <button @click="showDialog = !showDialog" type="submit" class="w-50 content-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Create New Job
              </button>
              </div>
            </div>
        </div>
    </div>



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
