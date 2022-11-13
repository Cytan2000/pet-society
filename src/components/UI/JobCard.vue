<style >
.listing-item-container{
    position: absolute;
    bottom: 25px;
    right: 10px;
    left: auto;
    top: 5px;
    padding: 0;
    width: auto;
    z-index: 50;
    color: #888;
    box-sizing: border-box;
    font-weight: 500;
    font-size: 14px;
    text-align: center;
}

</style>

<template>
        <router-link :to=" {name: 'JobStatus', params: {id:link, data:info}}"
        class="flex flex-row my-3 items-center bg-white rounded-lg border shadow-md md:flex-row max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">

    <div class="flex flex-col justify-between p-4 leading-normal">

        <div class="flex flex-row">
            
            <slot name="name">
                
            </slot>
        </div>
        <div class="flex flex-row"> 
        </div>
        
        
        <div class="flex flex-row ">
            
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <slot name="description">
                
            </slot>
        </p>
        <div>
            <slot name="rating"></slot>
        </div>
        </div>
    </div>
    <div class="ml-auto mb-auto">
        <span>From
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