<template>
    <div class="grid grid-cols-3 gap-4">
        <div class="col-span-3 md:col-span-2 overflow-auto order-2 xs:order-1 md:order-1">
        <div class="col-span-2">
        <h1 class="underline font-bold font-mono text-2xl">Active</h1>
            <div v-for="job in this.list1">
                <job-card v-if="job.val().status=='active'" :link="job.key" :info="job">
                
            <template v-slot:name>
              
            </template>
            <template v-slot:description>
              
            </template>
            <template v-slot:price>
              
            </template>
          </job-card>
            </div>
    </div>

    <div class="col-span-2">
    <h1 class="underline font-bold font-mono text-2xl text-yellow-400">Pending</h1>
    <div v-for="job in this.list1">
                <job-card v-if="job.val().status=='pending'" :link="job.key" :info="job">
                
            <template v-slot:name>
              
            </template>
            <template v-slot:description>
              
            </template>
            <template v-slot:price>
              
            </template>
          </job-card>
            </div>
    </div>

    <div class="col-span-2">
    <h1 class="underline font-bold font-mono text-red-600 text-2xl">Rejected</h1>
    <div v-for="job in this.list1">
                <job-card v-if="job.val().status=='rejected'" :link="job.key" :info="job">
                
            <template v-slot:name>
              
            </template>
            <template v-slot:description>
              
            </template>
            <template v-slot:price>
              
            </template>
          </job-card>
            </div>
    </div>

    <div class="col-span-2">
    <h1 class="underline font-bold font-mono text-green-600 text-2xl">Completed</h1>
    <div v-for="job in this.list1">
                <job-card v-if="job.val().status=='completed'" :link="job.key" :info="job">
                
            <template v-slot:name>
              
            </template>
            <template v-slot:description>
              
            </template>
            <template v-slot:price>
              
            </template>
          </job-card>
            </div>
    </div>
</div>
<div class="col-span-3 md:col-span-1 order-1 xs:order-2 md:order-2" >
    HI
      </div>
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
        
    }
},

    methods:{
        getJobStatus() {
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
    },
        
    },

    beforeMount(){
        this.getJobStatus();
        
        

    }
}
</script>