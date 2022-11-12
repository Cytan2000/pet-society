<template>
    <div class="grid grid-cols-3 gap-4">
        <div class="col-span-2">
    <h1 class="underline font-bold font-mono text-2xl">Active</h1>
    <div class="flex flex-row my-3 items-center bg-white rounded-lg border shadow-md md:flex-row max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        
        <div class="flex flex-row">
            
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/194/194630.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/185/185846.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/2372/2372882.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/4775/4775505.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/121/121905.png"/>
            </div>

            
        </div>
        
        <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white">
            <slot name="name">
                <h2 class="font-bold text-xl ">Seller Name</h2>
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
</div>
    </div>

    <div class="col-span-2">
    <h1 class="underline font-bold font-mono text-2xl text-yellow-400">Pending</h1>
    <div class="flex flex-row my-3 items-center bg-white rounded-lg border shadow-md md:flex-row max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        
        <div class="flex flex-row">
            
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/194/194630.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/185/185846.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/2372/2372882.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/4775/4775505.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/121/121905.png"/>
            </div>

            
        </div>
        
        <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white">
            <slot name="name">
                <h2 class="font-bold text-xl ">Seller Name</h2>
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
</div>
    </div>

    <div class="col-span-2">
    <h1 class="underline font-bold font-mono text-red-600 text-2xl">Rejected</h1>
    <div class="flex flex-row my-3 items-center bg-white rounded-lg border shadow-md md:flex-row max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        
        <div class="flex flex-row">
            
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/194/194630.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/185/185846.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/2372/2372882.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/4775/4775505.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/121/121905.png"/>
            </div>

            
        </div>
        
        <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white">
            <slot name="name">
                <h2 class="font-bold text-xl ">Name</h2>
            </slot>
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            <slot name="description">
                <p>Sorry the Seller has unfortunately rejected this job. Kindly find another Sitter.</p>
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
</div>
    </div>

    <div class="col-span-2">
    <h1 class="underline font-bold font-mono text-green-600 text-2xl">Completed</h1>
    <div class="flex flex-row my-3 items-center bg-white rounded-lg border shadow-md md:flex-row max-w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        
        <div class="flex flex-row">
            
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/194/194630.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/185/185846.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/2372/2372882.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/4775/4775505.png"/>
            </div>
            <div>
                <img class="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/121/121905.png"/>
            </div>

            
        </div>
        
        <h5 class="mb-2 tracking-tight text-gray-900 dark:text-white">
            <slot name="name">
                <h2 class="font-bold text-xl ">Seller Name</h2>
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
</div>
    </div>


</div>
  

</template>

<script>
import { getDatabase, set,ref, child, get,update } from "firebase/database";



export default{
data(){
    return{
        list1:[],
    }
},

    methods:{
        get_jobstatus(){
            const dbRef = ref(getDatabase());
            get(child(dbRef, `jobs/`)).then((snapshot) => {
            if (snapshot.exists()) {
                for(var item in snapshot.val()){
                    // console.log(snapshot);
                    this.list1.push(snapshot);
                }
                console.log(this.list1);
                console.log(this.list1[0]);
            } else {
                console.log("No data available");
            }
            }).catch((error) => {
            console.error(error);
            });
        }
        
    },

    beforeMount(){
        this.get_jobstatus();
        console.log(this.list1);
        // console.log(this.list1[0]);

    }
}
</script>