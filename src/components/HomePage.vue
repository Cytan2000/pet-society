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
<div class="back-color">
<div class="banner h-96 w-full font-sans">
  <form @submit.prevent="submit" class="content-items rounded-lg px-8 py-6"> 
    <div class="lol">
      <div class="mx-auto">
    <h3 class="text-5xl font-bold text-yellow-500 typed-out" style="font-family:'Cantata One'"> Find Pet sitters near you!</h3>
  </div>
  </div>
      <div class="flex items-center justify-between space-x-4">
        <input id="autocomplete" type="text" placeholder="Location" v-model="address" class="mt-5 bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-500"/>
        <button @click="locatorButtonPressed" class="w-12 h-10 mt-5 rounded bg-yellow-500 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 24" stroke-width="2" stroke="currentColor" class="w-8 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
          </svg>
        </button>
      </div>
      <div class="container mt-5 text-white-400" v-show="error">{{error}}</div>
  </form>
</div>

  

<div class="back-color">
  <section class="container p-3">
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-3 px-4 md:col-span-2 overflow-y-auto order-2 xs:order-1 md:order-1 " style="height:46rem">
        <div v-for="seller in list1" class="fancy_card">
          <buyer-card :link="seller.key" :info="seller">
            <template v-slot:name>
              <p class="font-bold text-xl">{{ seller.val().ListingName }}</p>
            </template>
            <template v-slot:description>
              <p class="overflow-hidden">{{ seller.val().Description }}</p>
            </template>
            <template v-slot:price>
              SGD {{seller.val().Rate}}
            </template>
          </buyer-card>
        </div>
      </div>
      <div class="col-span-3 mt-3 md:col-span-1 order-1 xs:order-2 md:order-2 border rounded-lg" id="map" style="width: 40rem; height: 45rem">
      </div>
    </div>
      <!-- <h4>Your Position</h4>
      Latitude: {{ currPos.lat.toFixed(2) }}, Longitude:
      {{ currPos.lng.toFixed(2) }} -->

  </section>
</div>
</div>
  <!-- <div class="md:w-max  flex justify-center md:justify-end">
        <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="image-design" />
      </div> -->
   

</template>

<script>


import BuyerCard from "./UI/buyerCard.vue";

import { getDatabase, ref as stoRef, onValue, child,get } from "firebase/database";

import axios from 'axios';
import { safeGet } from "@firebase/util";
var lat_list = [];
var lng_list = [];
// var list2 = [];


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
      list3: [],
      address: "",
      error:"",
    };
  },
  
  methods: {
    pull_workpostal_and_ListingName(){
      const ref1 = stoRef(getDatabase());
      get(child(ref1,`bookings/`)).then((snapshot1)=>{
        // console.log(snapshot1.val());
        if(snapshot1.exists()){
          for(var items in snapshot1.val()){
            var array_to_rtr = [];
            // console.log(Object.values(snapshot1.val()[items]));
            // console.log(Object.values(snapshot1.val()[items])[2]);
            // console.log(Object.values(snapshot1.val()[items])[6]);
            // console.log(Object.values(snapshot1.val()[items])[8][0]);
            array_to_rtr.push(Object.values(snapshot1.val()[items])[2]);
            array_to_rtr.push(Object.values(snapshot1.val()[items])[6]);
            array_to_rtr.push(Object.values(snapshot1.val()[items])[8][0]);
            this.list3.push(array_to_rtr);
          }
        
          localStorage.setItem("map_wpandlistname",JSON.stringify(this.list3));
          // console.log(this.list3)
        }
      })
    },

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
    axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyCsXXU1MDegDrBps_d3fK8rglvT4G8zbEg")
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

    geocode() {
      var list3 = JSON.parse(localStorage.getItem("map_wpandlistname"));
    console.log(list3)
      if (lat_list.length < list3.length || lng_list.length < list3.length) {
        console.log(lat_list.length);
        console.log(list3.length);
        console.log(lat_list.length)
        for (var j = 0; j < list3.length; j++) {
          console.log(list3[j][1])

          axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
          params: {
            address: list3[j][1],
            key: 'AIzaSyCsXXU1MDegDrBps_d3fK8rglvT4G8zbEg',
            region: 'sg',
            country: 'sg',
          }
          })
          .then((response) => {
            lat_list.push(response.data.results[0].geometry.location.lat);
            //console.log(lat_list.length);
            lng_list.push(response.data.results[0].geometry.location.lng);
            // console.log(lng_list);
          }) 
          .catch((error) => {
            console.log(error);
          })
          // console.log(lat_list.length)
          function poll(){
            if (lat_list.length!=0 || lng_list.length!=0){
              //console.log(lat_list);
              //console.log(lng_list)    
            } 
            else{
              setTimeout(poll, 300)
            }
          }
          poll()
        };
      } else {
        console.log(1);
      }

      // console.log(lat_list); 
      // console.log(this.lng_list);
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

      // console.log(lat_list);
      // console.log(lng_list);
      for ( var i = 0; i < lat_list.length; i++) {
        // console.log(lat_list.length);

      addMarker({lat: lat_list[i], lng: lng_list[i]}, "yellow");
      }
      function addMarker(latLng, color) {
        let url = "http://maps.google.com/mapfiles/ms/icons/";
        url += color + "-dot.png";
        let marker = new google.maps.Marker({
          map: map,
          position: latLng,
          region: 'sg',
          icon: {
            url: url,
          }
        }); 
      }
    }, 
  },  
  created(){
    this.getBooking();
    this.pull_workpostal_and_ListingName();
  },
  beforeUpdate() {
    var list3 = JSON.parse(localStorage.getItem("map_wpandlistname"));
    console.log(list3)
    this.geocode();
    
    console.log(list3)
    // console.log(this.list2.length)
    // console.log(this.list2);
    // this.test();
    // console.log(lat_list);
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
       function createMarker(lat, lng,altext) {
          var newmarker = new google.maps.Marker({
              position: new google.maps.LatLng(lat, lng),
              map: map,
              country: 'SG',
              title: "hi",
              icon: {
                url: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png",
              }
          });

     


          newmarker['infowindow'] = new google.maps.InfoWindow({
                  content: `<img src='${list3[i][2]}' alt='img' style="width:60%; height:60%">
                            <h3>${list3[i][0]}</h3>`
              });
              console.log(list3[i][0])
          google.maps.event.addListener(newmarker, 'click', function() {
              this['infowindow'].open(map, this);
          });
      };
      //console.log(lat_list);
      // console.log(lng_list);
      for ( var i = 0; i < lat_list.length; i++) {
        console.log(lat_list.length);
        //console.log(lat_list);

        createMarker(lat_list[i],lng_list[i])

      }
      /*
      function addMarker(latLng, color) {
        let url = "http://maps.google.com/mapfiles/ms/icons/";
        url += color + "-dot.png";
        let marker = new google.maps.Marker({
          map: map,
          position: latLng,
          icon: {
            url: url,
          }
        }); 
      }
      */
    }

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
