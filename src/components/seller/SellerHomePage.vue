<template>
    <base-dialog2 v-if="showDialog">
      <template #default>
        <!-- content -->
        <booking-creation></booking-creation>
      </template>
      <template #actions>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 cursor-pointer mx-2"
          @click="showDialog=false"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </template>
    </base-dialog2>

    <div class="flex flex-row justify-between mt-5">
    <h1 class="mx-8 my-auto text-2xl font-bold">All Listings</h1>
    <button @click="showDialog = true" class="shadow-md no-underline rounded-full bg-blue-500 text-white font-sans font-semibold text-sm border-blue btn-primary hover:text-white hover:bg-blue-light bg-blue-light mt-6 mx-8 mb-8 py-2 px-4 focus:outline-none active:shadow-none ">
    + Add Listing!
  </button>
</div>
    <div v-for="seller in list1" class="mx-8 p-2">
          <buyer-card :link="seller.key" :info="seller" class="fancy_card">
            <template v-slot:name>
              <h1 class="text-2xl font-bold">{{ seller.val().ListingName }}</h1>
            </template>
            <template v-slot:description>
              <p>{{ seller.val().Description }}</p>
            </template>
            <template v-slot:price>
              SGD {{seller.val().Rate}}
            </template>
          </buyer-card>
        </div>









</template>



<script>
import BookingCreation from "../Booking/BookingCreation.vue";
import BaseDialog2 from "../UI/BaseDialog2.vue";
import { getStorage, ref as stoRef, getDownloadURL  } from 'firebase/storage';
import { getDatabase, ref as dbbRef, onValue, child } from "firebase/database";
import BuyerCard from "../UI/buyerCard.vue";

export default {
  components: { BaseDialog2, BookingCreation, BuyerCard },
  data() {
    return {
      showDialog: false,
      list1:[]
    }
  },
  methods:{
    getBooking() {
      const db = getDatabase();
      const dbRef = dbbRef(db, "bookings/");
      const usercreds = JSON.parse(localStorage.getItem("userCredential"));
      const user=usercreds.uid;
      onValue(
        dbRef,
        (snapshot) => {
          snapshot.forEach((childSnapshot) => {

            if(childSnapshot.val().SellerId==user){
                this.list1.push(childSnapshot);
            }
            
            
          });
        },
        {
          onlyOnce: true,
        }
      );

    },
  },
  mounted(){
    this.getBooking();
  }
}




</script> 

