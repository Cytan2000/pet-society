<template>
<!-- second carousel -->
<div
  id="carouselExampleCrossfade"
  class="carousel slide carousel-fade relative"
  data-bs-ride="carousel"
>
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div v-for="(picture,index) in this.list1" class="carousel-item relative float-left w-full" :class="{ 'active': index === 0 }">
      <img
        :src="picture"
        class="block w-full"
        alt=""
      />
    </div>
    
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCrossfade"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


</template>


<script>
import { getDatabase, ref , onValue, } from "firebase/database";

export default ({
  data(){
    return{
      list1:[],
    }
  },
   methods:{
    getBooking() {
      const db = getDatabase();
      const dbRef = ref(db, "bookings/");
      const usercreds = JSON.parse(localStorage.getItem("userCredential"));
      const user=usercreds.uid;
      onValue(
        dbRef,
        (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            
            this.list1.push(childSnapshot.val().imgurls);
            
            
            
          });
        },
        {
          onlyOnce: true,
        }
      );
        console.log(this.list1);
    },
   },
   mounted(){
    this.getBooking();
   }
})
</script>
