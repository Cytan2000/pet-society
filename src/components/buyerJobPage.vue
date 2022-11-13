<style>
  @import "./buyerJobPage.css";
</style>

<template>
    <div class="grid grid-cols-3 gap-4 mx-8">
        <div class="col-span-3 md:col-span-3 p-6 overflow-auto order-1 xs:order-1 md:order-1 ">
        <div class="col-span-3 my-2">

        <div class="text-center button-active border  px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold text-2xl">Active</strong>
            <span class="block sm:inline"></span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            </span>
        </div>
            <div v-for="job in this.list1" class="fancy_card">
                <div v-if="job.val().buyer_id==this.user || job.val().seller_id==this.user" >
                <job-card v-if="job.val().status=='active'" :link="job.key" :info="job" >
            <template v-slot:name>
             SGD {{job.val().name}}
            </template>
            <template v-slot:description>
              SGD {{job.val().address}}
            </template>
            <template v-slot:price>
              <p class="mr-5 mt-8 pr-3 text-md text-center font-bold">
              SGD <span class="text-blue-500"> {{job.val().price}}</span>
              </p>
            </template>
          </job-card>
            </div>
        </div>
    </div>

    <div class="col-span-3 my-2">
    
    <div class="text-center button-pending border  px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold text-2xl text-yellow-500">Pending</strong>
            <span class="block sm:inline"></span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            </span>
        </div>
    <div v-for="job in this.list1" class="fancy_card">
        <div v-if="job.val().buyer_id==this.user || job.val().seller_id==this.user" >
                <job-card v-if="job.val().status=='pending'" :link="job.key" :info="job" >
                
                  <template v-slot:name>
              {{job.val().name}}
            </template>
            <template v-slot:description>
              {{job.val().address}}
            </template>
            <template v-slot:price>
              <p class="mr-5 mt-8 pr-3 text-md text-center font-bold">
             SGD <span class="text-blue-500"> {{job.val().price}}</span>
            </p>
            </template>
          </job-card>
            </div>
            </div>
    </div>

    <div class="col-span-3 my-2">
      <div class="text-center button-danger border  px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold text-2xl text-red-600">Rejected</strong>
            <span class="block sm:inline"></span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            </span>
        </div>
    
    <div v-for="job in this.list1" class="fancy_card">
        <div v-if="job.val().buyer_id==this.user || job.val().seller_id==this.user" >
                <job-card v-if="job.val().status=='rejected'" :link="job.key" :info="job">
                
                  <template v-slot:name>
              {{job.val().name}}
            </template>
            <template v-slot:description>
              {{job.val().address}}
            </template>
            <template v-slot:price>
              <p class="mr-5 mt-8 pr-3 text-md text-center font-bold">
              SGD <span class="text-blue-500"> {{job.val().price}}</span>
              </p>
            </template>
          </job-card>
            </div>
            </div>
        
    </div>

    <div class="col-span-3 my-2">
    
    <div class="text-center button-healthy border  px-4 py-3 rounded relative" role="alert">
            <strong class="font-bold text-2xl text-green-600">Completed</strong>
            <span class="block sm:inline"></span>
            <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            </span>
        </div>
    <div v-for="job in this.list1" class="fancy_card">
        <div v-if="job.val().buyer_id==this.user || job.val().seller_id==this.user" >
                <job-card v-if="job.val().status=='completed'" :link="job.key" :info="job">
                
              <template v-slot:name>
              {{job.val().name}}
            </template>
            <template v-slot:description>
              {{job.val().address}}
            </template>
            <template v-slot:price>
              <p class="mr-5 mt-8 pr-3 text-md text-center font-bold">
              SGD <span class="text-blue-500"> {{job.val().price}}</span>
              </p>
            </template>
          </job-card>
            </div>
            </div>
    </div>
</div>
<!-- <div class="invisible md:visible col-span-3 md:col-span-1 order-2 xs:order-2 md:order-2 shadow-md border rounded-lg my-2" >
    
  <div class="text-2xl text-center bg-yellow-500 mx-5 my-2 p-2 rounded-lg">View your Pet updates</div>
  <div class="text-center mx-5">
    On the left displays the status of all your pets updates
  </div>
  </div> -->

  
</div>
  

</template>

<script>
import { getDatabase, set,ref, child, get,update,onValue } from "firebase/database";

import JobCard from "./UI/JobCard.vue";


export default{
  components: { JobCard },
data(){
    return{
        list1:[],
        user:"",
    }
},

    methods:{
        getJobStatus() {
        const usercred=JSON.parse(localStorage.getItem("userCredential"))
        this.user= usercred.uid
      const db = getDatabase();
      const dbRef = ref(db, "jobs/");

      onValue(
        dbRef,
        (snapshot) => {
          snapshot.forEach((childSnapshot) => {
              this.list1.push(childSnapshot);
          });
        },
        {
          onlyOnce: true,
        }

      );
        console.log(this.list1);
    },getBookingData(id){
      
      const db=getDatabase();
      const dbRef = ref(db,"bookings/"+id);
      onValue(
        dbRef,
        (snapshot) => {
          console.log(snapshot.val().ListingName)
          return snapshot.val().ListingName;
        },
        {
          onlyOnce: true,
        }

      );
    }
        
    },

    beforeMount(){
        this.getJobStatus();
        
        

    }
}
</script>