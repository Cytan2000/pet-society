<template>
    <base-dialog2 v-if="showDialog">
      <template #default>
        <!-- content -->
        <booking-creation></booking-creation>
      </template>
      <template #actions>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 cursor-pointer mx-2"
          @click="showDialog=false"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </template>
    </base-dialog2>
    <h1>My Bookings</h1>
    <div class="mx-4" id="myjob1">
  <a href="/client" class="flex flex-row mb-5 items-center bg-white rounded-lg border shadow-md md:flex-row max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="">
  <div class="flex flex-col justify-between p-4 leading-normal">
      <div class="flex flex-row">
          <div>
              <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/194/194630.png"/>
          </div>
          <div>
              <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/185/185846.png"/>
          </div>
          
      </div>
      
      <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white">
          <slot name="name">
              <h2 class="font-bold text-xl ">Pet Sitting for Small pets Only</h2>
          </slot>
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <slot name="description">
              <p>Farmer</p>
          </slot>
      </p>
      <div>
          <slot name="rating"></slot>
      </div>
      <div class="flex flex-row">
          
      </div>
  </div>
  <div class="ml-auto mb-auto">
      From 
      <p >SGD 30</p>
      <p>/night</p>
  </div>
  </a>
</div>

<div  class="mx-4" id="myjob2">
  <a href="/client" class="flex flex-row mb-5 items-center bg-white rounded-lg border shadow-md md:flex-row max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="">
  <div class="flex flex-col justify-between p-4 leading-normal">
      <div class="flex flex-row">
          <div>
              <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/194/194630.png"/>
          </div>
          <div>
              <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/185/185846.png"/>
          </div>
          
      </div>
      
      <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white">
          <slot name="name">
              <h2 class="font-bold text-xl ">Pet Sitting for Small pets Only</h2>
          </slot>
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <slot name="description">
              <p>Farmer</p>
          </slot>
      </p>
      <div>
          <slot name="rating"></slot>
      </div>
      <div class="flex flex-row">
          
      </div>
  </div>
  <div class="ml-auto mb-auto">
      From 
      <p >SGD 30</p>
      <p>/night</p>
  </div>
  </a>
</div>

<div  class="mx-4" id="myjob3">
  <a href="/client" class="flex flex-row mb-5 items-center bg-white rounded-lg border shadow-md md:flex-row max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
  <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="/docs/images/blog/image-4.jpg" alt="">
  <div class="flex flex-col justify-between p-4 leading-normal">
      <div class="flex flex-row">
          <div>
              <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/194/194630.png"/>
          </div>
          <div>
              <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/185/185846.png"/>
          </div>
          
      </div>
      
      <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white">
          <slot name="name">
              <h2 class="font-bold text-xl ">Pet Sitting for Small pets Only</h2>
          </slot>
      </h5>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <slot name="description">
              <p>Farmer</p>
          </slot>
      </p>
      <div>
          <slot name="rating"></slot>
      </div>
      <div class="flex flex-row">
          
      </div>
  </div>
  <div class="ml-auto mb-auto">
      From 
      <p >SGD 30</p>
      <p>/night</p>
  </div>
  </a>
</div>

<button @click="showDialog = true" class="bg-blue-500  mx-4 mb-8 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Add Booking!
</button>




</template>



<script>
import BookingCreation from "../Booking/BookingCreation.vue";
import BaseDialog2 from "../UI/BaseDialog2.vue";
import { getStorage, ref as stoRef, getDownloadURL  } from 'firebase/storage';


export default {
  components: { BaseDialog2, BookingCreation },
  data() {
    return {
      showDialog: false,
    }
  }}


// export default{
//   data(){
//     return {
//       showModal: false
//     }
//   },
//   components: {BaseModal}
// }








// const storage = getStorage();

// const pathReference = stoRef(storage,'Buyers/Dog_Photo');

// const gsReference = stoRef(storage, 'gs://bucket/Buyers/Dog_Photo');

// getDownloadURL(stoRef(storage, 'Buyers/Dog_Photo'))
//   .then((url) => {
//     // `url` is the download URL for 'images/stars.jpg'

//     // Or inserted into an <img> element
//     const img1 = document.getElementById('myimg1');
//     img1.setAttribute('src', url);
//   })
//   .catch((error) => {
//     // Handle any errors
//     console.log("Unable to get anything")
//   });

</script> 

