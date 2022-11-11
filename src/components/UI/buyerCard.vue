<template>
    <router-link :to=" {name: 'ClientBooking', params: {id:link, data:info}}"
    class="flex flex-row my-3 items-center bg-white rounded-lg border shadow-md md:flex-row max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <slot name="image"></slot>
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
