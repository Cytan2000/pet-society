<style>
@import "./ClientBooking.css";
</style>

<template>
    <base-dialog v-if="showDialog">
    <template #default>
      <!-- content -->
      <h1 class="form-title">Confirm Booking?</h1>
      <div class="flex flex-row">
      <button 
      class="mx-5 mt-10 w-24 border-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >Cancel</button>
      <button 
      class="mx-5 mt-10 w-24 text-white bg-yellow-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      @click="confirmDialogMsg"
      
      >Yes</button>
    </div>
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
  </base-dialog>

  <div>
    <div class="grid grid-cols-3 gap-4 h-full md:flex-row">
      <div class="h-26 flex-auto md:col-span-2 col-span-3">
        <div
          href="#"
          class="flex flex-col items-center bg-white border md:flex-row md:max-w-full dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <img
            class="image-sizing mx-5 my-5"
            src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <div class="flex flex-col justify-between p-4 leading-normal">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Pet Sitting for Small Pets Only(East Coast) @ Katong
            </h5>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Reviews
            </p>

            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Statistics
            </p>
          </div>
        </div>
        <div class="border-t border-b py-5 ml-5">
          <!-- add location here -->
          {{this.info.WorkAddress}}
        </div>
        <div class="ml-5">
          {{this.info.Description}}
        </div>
        <div class="py-5 border-t border-b ml-5">Area</div>
        <div class="my-2 py-5 border-t border-b ml-5">include map here</div>

        <div class="my-2 py-5 border-t border-b ml-5">Reviews</div>
      </div>

      <div class="flex items-end text-white h-26 flex-auto md:col-span-1 col-span-3">
       
        <div class="">
          
          <button
          @click="showDialog = !showDialog"
              type="submit"
              class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Confirm Booking
            </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import { getDatabase, onValue, ref,push,child,update } from "firebase/database";
import BaseDialog from "./UI/BaseDialog.vue";
 export default{
  components: { BaseDialog },
  data(){
    return{
      info:"",
      showDialog:false,
    }
  },
  methods:{
    confirmDialogMsg() {
      this.showDialog = false;
      this.accept_job();

    },
    get_data(){
      const db = getDatabase();
      const userRef = ref(db, "bookings/" + this.id);
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        this.info=data
        
      });
      
},
 accept_job(){
    const db=getDatabase();
    const usercreds = JSON.parse(localStorage.getItem("userCredential"));
    var newJobkey = push(child(ref(db), 'accepted_job')).key;
    update(ref(db, 'accepted_job/' + newJobkey), {
      buyer_id:usercreds.uid,
      seller_id:this.info.SellerID,
  });
}
 },
 
  mounted(){
    this.id=this.$route.params.id;
    this.get_data();
    
  }
 }
</script>
