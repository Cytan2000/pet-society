<div class="col-span-1">
    <div class="d-flex text-center">
    <div class="m-auto">
    <div ref="mapDiv" style="width: 100%; height: 80vh" />
    </div>
    </div>
</div>


+<!-- sellers location markers 
geocode() {
  var location = [];
  //for (var i = 0; i < this.list2.length; i++) { 
   // location.push(this.list2[i]);
    //var str_location = String(location[i]);
    console.log(this.list2);
    var testing = this.list2[0];
 // var testing = String(this.list2[0]);
  console.log(testing);
    axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address: testing,
        key: 'AIzaSyCsXXU1MDegDrBps_d3fK8rglvT4G8zbEg'
      }
    })
    .then(function(response) {
      var formatted_address = response.data.results[0].formatted_address;
      console.log(formatted_address);
      var lat = response.data.results[0].geometry.location.lat;
      console.log(lat);
      var lng = response.data.results[0].geometry.location.lng;
      console.log(lng);
      var seller_marker;
      var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: new google.maps.LatLng(lat, lng),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      });
      seller_marker = new google.maps.Marker({
        position: new google.maps.LatLng(lat, lng),
        map: map
      });
    })
    .catch(function(error) {
      console.log(error);
    })
    }
-->

import { computed, ref, onMounted } from "vue";
import { useGeolocation } from "./useGeolocation";
import { Loader } from "@googlemaps/js-api-loader";
const GOOGLE_MAPS_API_KEY = "AIzaSyCsXXU1MDegDrBps_d3fK8rglvT4G8zbEg";


setup() {
    const { coords } = useGeolocation();
    const currPos = computed(() => ({
      lat: coords.value.latitude,
      lng: coords.value.longitude,
    }));

    const loader = new Loader({ apiKey: GOOGLE_MAPS_API_KEY });
    const mapDiv = ref(null);
    onMounted(async () => {
      await loader.load();
      new google.maps.Map(mapDiv.value, {
        center: currPos.value,
        zoom: 7,
      });
    });
    return { currPos, mapDiv };
  },

   geocode() {
    if (lat_list.length != this.list2.length || lng_list.length != this.list2.length) {
      console.log(lat_list.length);
      console.log(this.list2.length);
      for (var j = 0; j < this.list2.length; j++) {
        console.log(this.list2[j])
        axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
        params: {
          address: this.list2[j],
          key: 'AIzaSyCsXXU1MDegDrBps_d3fK8rglvT4G8zbEg'
        }
        })
        .then((response) => {
          lat_list.push(response.data.results[0].geometry.location.lat);
          // console.log(lat_list);
          lng_list.push(response.data.results[0].geometry.location.lng);
          // console.log(lng_list);
        }) 
        .catch((error) => {
          console.log(error);
        })
        function poll(){
          if (lat_list.length!=0 || lng_list.length!=0){
            console.log(lat_list);
            console.log(lng_list)    
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
  
beforeUpdate() {

this.getSellersLocation();
this.geocode();
console.log(this.list2)

beforeUpdate() {

this.getSellersLocation();
this.geocode();
console.log(this.list2)
// console.log(this.list2);

// this.test();
// console.log(this.lat_list[0]);
navigator.geolocation.getCurrentPosition(
  function (position) {
      initMap(position.coords.latitude, position.coords.longitude);
@ -218,23 +265,33 @@ export default {
  function errorCallback(error) {
      console.log(error);
  }
);
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
  // var lat_list = [1.2968599, 1.289936, 1.345176];
  // var lng_list = [103.852202, 103.83292, 103.848022];
  console.log(lat_list);
  console.log(lng_list);
  for ( var i = 0; i < lat_list.length; i++) {
    console.log(lat_list.length);
    var seller_marker = new google.maps.Marker({
    position: {lat:lat_list[i], lng:lng_list[i]},
    map: map
  });
  }
}

this.getSellersLocation();