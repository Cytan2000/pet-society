<style>
  @import './HomePage.css';
</style>

<template>

<div class="container form-section mx-auto px-4 font-sans">
  <form @submit.prevent="submit" class="shadow-md rounded-lg px-8 py-6 border-2 border-gray-200"> 
    <h3 class="text-xl text-center font-bold text-yellow-500"> Services Near Me</h3>
      <div class="flex items-center justify-between space-x-4">
        <input id="autocomplete" type="text" placeholder="Location" v-model="address" class="mt-5 bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"/>
        <button @click="locatorButtonPressed" class="w-12 h-10 mt-5 rounded bg-yellow-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 24" stroke-width="2" stroke="currentColor" class="w-8 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </button>
      </div>
      <div class="container mt-5 text-red-400" v-show="error">{{error}}</div>
  </form>
</div>

  <br>

  <section class="container mx-auto">
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2 overflow-auto">
        <div v-for="seller in list1">
          <buyer-card :link="seller.key" :info="seller">
            <template v-slot:name>
              <h1>{{ seller.val().Description }}</h1>
            </template>
            <template v-slot:description>
              <p>{{ seller.email }}</p>
            </template>
            <template v-slot:price>
              SGD {{seller.val().Rate}}
            </template>
          </buyer-card>
        </div>
    
  
  
    <div v-for="seller in list1">
        <buyer-card>
          <template v-slot:name>
              <h1>{{seller.firstname}}</h1>
          </template >
          <template v-slot:description>
            <p>{{seller.email}}</p>
          </template>
        </buyer-card>
        
      </div>
   
    
  

    <div class="d-flex text-center" style="height: 20vh">
      <div class="m-auto">
        <h4>Your Position</h4>
        Latitude: {{ currPos.lat.toFixed(2) }}, 
        Longitude: {{ currPos.lng.toFixed(2) }}
      </div>
    </div>
      <!-- <h4>Your Position</h4>
      Latitude: {{ currPos.lat.toFixed(2) }}, Longitude:
      {{ currPos.lng.toFixed(2) }} -->

  </section>

  <!-- <div class="md:w-max  flex justify-center md:justify-end">
        <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="image-design" />
      </div>
   
    
  

    <div class="d-flex text-center" style="height: 20vh">
      <div class="m-auto">
        <h4>Your Position</h4>
        Latitude: {{ currPos.lat.toFixed(2) }}, 
        Longitude: {{ currPos.lng.toFixed(2) }}
      </div>
    </div>
    <div ref="mapDiv" style="width: 100%; height: 80vh" />
</template>

<script>

import BuyerCard from './UI/buyerCard.vue'
import { computed, ref, onMounted } from 'vue';
import { useGeolocation } from "./useGeolocation";
import { Loader } from '@googlemaps/js-api-loader';
import { getDatabase, ref as stoRef, onValue, child } from "firebase/database";



const GOOGLE_MAPS_API_KEY = 'AIzaSyCukyKCDxVUE4SitWeADOGFdaW6hWH9T20'

export default {
  components: { BuyerCard },
  data(){
    return {
      list1:[]
    }
  },
  setup() {
    const { coords } = useGeolocation()
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude
    }))

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY })
    const mapDiv = ref(null)
    onMounted(async () => {
      await loader.load()
      new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 7
      })
    })
    return { currPos, mapDiv }
  },
  methods:{
    getSeller(){
      const db = getDatabase();
      const dbRef = stoRef(db, 'users/');

      onValue(dbRef, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const childKey = childSnapshot.key;
          const childData = childSnapshot.val();
          if (childData["acc_type"]=="seller"){
          this.list1.push(childData);
          console.log(this.list1)
          }
  });
}, {
  onlyOnce: true
});
    }
  },
  mounted(){
    this.getSeller();
  }
}
</script>






