<template>
        <router-link :to=" {name: 'ClientBooking', params: {id:link, data:info}}"
    class="flex flex-row my-3 items-center bg-white rounded-lg border shadow-md md:flex-row max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-24 h-40 pl-2 rounded-lg md:h-auto md:rounded-none md:rounded-l-lg" :src="info.val().imgurls[0]" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal" style="width:80%">

        <div class="flex flex-row">
            
            <slot name="name">
                <p class="font-bold text-xl ">Pet Sitting for Small pets Only</p>
            </slot>
        </div>
        <div class="flex flex-row">
            
            <div v-if="info.val().PetType.includes('dog')" class="mx-1">
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/194/194630.png"/>
            </div>
            <div v-if="info.val().PetType.includes('cat')" class="mx-1">
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/185/185846.png"/>
            </div>
            <div v-if="info.val().PetType.includes('rodent')" class="mx-1">
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/2372/2372882.png"/>
            </div>
            <div v-if="info.val().PetType.includes('rabbit')" class="mx-1">
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/4775/4775505.png"/>
            </div>
            <div v-if="info.val().PetType.includes('aquatic')" class="mx-1">
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/121/121905.png"/>
            </div>

            
        </div>
        
        
        <div class="flex flex-row">
            
        <p class="mb-3 font-semibold text-gray-700 dark:text-gray-400">
            <slot name="description">
                <p>Farmer</p>
            </slot>
        </p>
        <div>
            <slot name="rating"></slot>
        </div>
        </div>
    </div>
    <div class="ml-auto mb-auto font-semibold">
        <span>
        <slot name="price"></slot>
            /night
        </span> 
    </div>
    </router-link>
</template>

<script>
export default ({
    props:['link','info'],
    
})
</script>