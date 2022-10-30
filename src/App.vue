<template>
  <div>
  <NavBar></NavBar>
  <div></div>
  <router-view></router-view>
  <div></div>
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

import NavBar from "./components/Navbar.vue";
import { computed, ref, onMounted } from 'vue';
import { useGeolocation } from "./useGeolocation";
import { Loader } from '@googlemaps/js-api-loader';

const GOOGLE_MAPS_API_KEY = 'AIzaSyCukyKCDxVUE4SitWeADOGFdaW6hWH9T20'

export default {
  name: "App",
  components: { NavBar },
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
  }
}
</script>
