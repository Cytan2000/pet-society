<div class="col-span-1">
    <div class="d-flex text-center">
    <div class="m-auto">
    <div ref="mapDiv" style="width: 100%; height: 80vh" />
    </div>
    </div>
</div>



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