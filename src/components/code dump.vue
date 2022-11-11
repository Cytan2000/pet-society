<div class="col-span-1">
    <div class="d-flex text-center">
    <div class="m-auto">
    <div ref="mapDiv" style="width: 100%; height: 80vh" />
    </div>
    </div>
</div>

<!-- sellers location markers 
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