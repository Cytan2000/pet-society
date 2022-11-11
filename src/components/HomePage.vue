<style>
@import "./HomePage.css";

.pac-item {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

.pac-item:hover {
  background-color: #ececec;
}

.pac-item-query {
  font-size: 16px;
  color: #f59e0b;
}
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
      </div>
      <div id="map" style="width: 100%; height: 80vh">
      </div>
    </div>
      <!-- <h4>Your Position</h4>
      Latitude: {{ currPos.lat.toFixed(2) }}, Longitude:
      {{ currPos.lng.toFixed(2) }} -->

  </section>

  <!-- <div class="md:w-max  flex justify-center md:justify-end">
        <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="image-design" />
      </div> -->

 
</template>

<script>


import BuyerCard from "./UI/buyerCard.vue";

import { getDatabase, ref as stoRef, onValue, child } from "firebase/database";

import axios from 'axios';


/* var query = firebase.database().ref("bookings").orderByKey();
query.once("value")
  .then(function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var workPostal = snapshot.child("bookings/workpostal").val();
  });
});

for (var i = 0; i < workPostal.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(seller_locations[i][1], seller_locations[i][2]),
        map: map
      });
      
      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
*/ 
export default {
  components: { BuyerCard },
  data() {
    return {
      list1: [],
      list2: [],
      address: "",
      error:"",
    };
  },
  
  methods: {
    getBooking() {
      const db = getDatabase();
      const dbRef = stoRef(db, "bookings/");

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
    getSellersLocation() {
      const db = getDatabase();
      const dbRef = stoRef(db, "bookings/");

      onValue(
        dbRef,
        (snapshot) => {
          snapshot.forEach((childSnapshot)=>{
            // console.log(childSnapshot.val().WorkPostal);
            this.list2.push(childSnapshot.val().WorkPostal);
          })
              //this.list2.push(childSnapshot);
        },
      );

      // console.log(this.list2);
    },

    locatorButtonPressed() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            this.getAddressFrom(
              position.coords.latitude, 
              position.coords.longitude
            );
            this.showUserLocationOnTheMap(
              position.coords.latitude, 
              position.coords.longitude
            );
        },
          error => {
            this.error = "Unable to retrieve your location. Please enable location access or enter your address manually.";
            console.log(error.message)
          }
        )
      } else {
        this.error = error.message;
        console.log("Geolocation is not supported by this browser.");
      }
    },
    getAddressFrom(lat, long) {
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=dAIzaSyCsXXU1MDegDrBps_d3fK8rglvT4G8zbEg")
      .then(response => {
        if (response.data.error_message) {
          this.error = response.data.error_message;
          console.log(response.data.error_message)
        } else {
          this.address = response.data.results[0].formatted_address;
          // console.log(response.data.results[0].formatted_address)
        }
      })
      .catch(error => {
        this.error = error.message; 
        console.log(error.message);
      });
    },
    showUserLocationOnTheMap(latitude, longitude) {
      // Show & center the Map based oon
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: new google.maps.LatLng(latitude, longitude),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });

      new google.maps.Marker({
        position: new google.maps.LatLng(latitude, longitude),
        map: map,
      });
    },
  },  
  created(){
    this.getBooking();
  },
  mounted() {
    // console.log(this.list2);
    navigator.geolocation.getCurrentPosition(
      function (position) {
          initMap(position.coords.latitude, position.coords.longitude);
      },
      function errorCallback(error) {
          console.log(error);
      }
    );
    function initMap(lat, lng) {
    var myLatLng = {
        lat,
        lng,
    };
    var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: myLatLng,
        });
    var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
        });
    }
    
    this.getSellersLocation();
    var autocomplete = new google.maps.places.Autocomplete(
      document.getElementById("autocomplete"),
    );
    autocomplete.setComponentRestrictions({ // restrict the country
    country: ["sg"]
    })
    autocomplete.addListener("place_changed", () => {
      var place = autocomplete.getPlace();

      this.showUserLocationOnTheMap(
        place.geometry.location.lat(),
        place.geometry.location.lng()
      );
    });
  },
};


</script>
