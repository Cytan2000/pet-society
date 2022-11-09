<style>
@import "./HomePage.css";
</style>

<template>

<div class="container mt-12 form-section mx-auto px-4 font-sans">
  <form class="shadow-md rounded-lg px-8 py-6 mb-4 border-2 border-gray-200"> 
    <h3 class="text-xl mb-8  text-center font-bold text-red-400"> Services Near Me</h3>
      <div class="flex items-center justify-between space-x-4">
        <input id="autocomplete" type="text" placeholder="Location" class="mt-5 bg-gray-200 border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
        <button class="cursor-pointer mt-5 w-64 shadow bg-red-400 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-5" type="button">
          Search
        </button>
      </div>
 
  </form>
</div>

  <br>

  <section class="container mx-auto">
    <div class="grid grid-cols-3 gap-4">
      <div class="col-span-2 overflow-auto">
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
        <div class="d-flex text-center">
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

const GOOGLE_MAPS_API_KEY = "AIzaSyCsXXU1MDegDrBps_d3fK8rglvT4G8zbEg";

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
    var autocomplete = new google.maps.places.Autocomplete(
    document.getElementById("autocomplete"),
    );
    autocomplete.setComponentRestrictions({ // restrict the country
    country: ["sg"]
    })
  },
};

</script>
