<style>
  @import './HomePage.css';
</style>

<template>
    
  
  
    <div>
        <buyer-card>
          <template v-slot:description>
              <h1>gamer</h1>
          </template>
        </buyer-card>
        <buyer-card></buyer-card>
      </div>
      <div class="md:w-max  flex justify-center md:justify-end">
        <img src="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="image-design" />
      </div>
   
    
  

<div class="my-20 text-black">
      Add more stuff IG
    </div>
</template>

<script>
import BuyerCard from './UI/buyerCard.vue'
export default {
  components: { BuyerCard }
}
</script>






BuyerCard