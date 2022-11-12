
<template>
    
    <router-link :to=" {name: 'ClientBooking', params: {id:link, data:info}}"
    class="flex flex-row my-3 items-center bg-white rounded-lg border shadow-md md:flex-row max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

    <div
  id="carouselExampleCrossfade"
  class="carousel slide carousel-fade relative"
  data-bs-ride="carousel"
>
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    <div v-for="(picture,index) in info.val().imgurls" class="carousel-item relative float-left w-full" :class="{ 'active': index === 0 }">
      <img
        :src="picture"
        class="block w-full"
        alt="Wild Landscape"
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



    <div class="flex flex-col justify-between p-4 leading-normal">
        <div class="flex flex-row">
            <div v-if="info.val().PetType.includes('dog')">
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/194/194630.png"/>
            </div>
            <div v-if="info.val().PetType.includes('cat')">
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/185/185846.png"/>
            </div>
            <div v-if="info.val().PetType.includes('rodent')">
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/2372/2372882.png"/>
            </div>
            <div v-if="info.val().PetType.includes('rabbit')">
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/4775/4775505.png"/>
            </div>
            <div v-if="info.val().PetType.includes('aquatic')">
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/121/121905.png"/>
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
        <slot name="price"></slot>
        <p>/night</p>
    </div>
    </router-link>
</template>

<script>


export default ({
    props:['link','info'],
    


})
</script>
