<style>
@import "./HomePage.css";
</style>

<template>
  <section class="container mx-auto">
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2">
        <div v-for="seller in list1">
          <buyer-card>
            <template v-slot:name>
              <h1>{{ seller.firstname }}</h1>
            </template>
            <template v-slot:description>
              <p>{{ seller.email }}</p>
            </template>
          </buyer-card>
        </div>
      </div>
      <div class="col-span-1">
        <div class="d-flex text-center" >
    <div class="m-auto">
      <!-- <h4>Your Position</h4>
      Latitude: {{ currPos.lat.toFixed(2) }}, Longitude:
      {{ currPos.lng.toFixed(2) }} -->
    </div>
  </div>
  <div ref="mapDiv" style="width: 100%; height: 80vh" />

      </div>
    </div>
  </section>

  <!-- <div class="md:w-max  flex justify-center md:justify-end">
        <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="image-design" />
      </div> -->

 
</template>

<script>
import BuyerCard from "./UI/buyerCard.vue";
import { computed, ref, onMounted } from "vue";
import { useGeolocation } from "./useGeolocation";
import { Loader } from "@googlemaps/js-api-loader";
import { getDatabase, ref as stoRef, onValue, child } from "firebase/database";

const GOOGLE_MAPS_API_KEY = "AIzaSyCukyKCDxVUE4SitWeADOGFdaW6hWH9T20";

export default {
  components: { BuyerCard },
  data() {
    return {
      list1: [],
    };
  },
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
  methods: {
    getSeller() {
      const db = getDatabase();
      const dbRef = stoRef(db, "users/");

      onValue(
        dbRef,
        (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
            if (childData["acc_type"] == "seller") {
              this.list1.push(childData);
              console.log(this.list1);
            }
          });
        },
        {
          onlyOnce: true,
        }
      );
    },
  },
  mounted() {
    this.getSeller();
  },
};
</script>
