<style scoped>
.amber-color{
  background-color: #f59e0b;
}
</style>

<template>
    <Disclosure as="nav" class="sticky top-0 backdrop-filter backdrop-blur-lg" v-slot="{ open }">
      <div class=" px-2 sm:px-6 lg:px-8 h-20">
        <div class="relative flex h-20 items-center justify-between">
          <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <!-- Mobile menu button-->
            <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-800 ring-2 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span class="sr-only">Open main menu</span>
              <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex flex-shrink-0">
              <img class="block h-14 w-auto lg:hidden rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/wad2-e6bc2.appspot.com/o/logo%2F4C76B58E-4920-4FE7-BC14-426088722C74.jpeg?alt=media&token=ebbc62e2-9757-440e-8e51-0cf5b382fdc6" alt="Your Company" />
              <img class="hidden h-14 w-auto lg:block rounded-lg" src="https://firebasestorage.googleapis.com/v0/b/wad2-e6bc2.appspot.com/o/logo%2F4C76B58E-4920-4FE7-BC14-426088722C74.jpeg?alt=media&token=ebbc62e2-9757-440e-8e51-0cf5b382fdc6" alt="Your Company" />
            </div>
            <!-- buttons -->
            <div class="hidden sm:ml-6 sm:block flex items-center sm:mt-4">
              <!-- Navbar buttons -->
              <div v-if="account=='buyer'" class="flex space-x-4">
                <a v-for="item in buyer_navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-yellow-500 text-black dark:text-white' : 'text-black hover:bg-yellow-500 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
              <div v-if="account=='seller'" class="flex space-x-4">
                <a v-for="item in seller_navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-yellow-500 text-black dark:text-white' : 'text-black hover:bg-yellow-500 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
              <div v-if="account==''" class="flex space-x-4">
                <a v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'bg-yellow-500 text-black dark:text-white' : 'text-black hover:bg-yellow-500 hover:text-white', 'px-3 py-2 rounded-md text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
              </div>
            </div>
          </div>
          <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            
            
  
            <!-- Profile dropdown -->
            <div v-if="!isLoggedIn">
              
              <a href="/login" class="no-underline hover:underline text-blue-600">Login</a>
           
            </div>
            <Menu v-if="isLoggedIn" as="div" class="relative ml-3 hover:underline ">
              <div>
                <MenuButton class="flex mt-2 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span class="sr-only">Open user menu </span>
                  <img class="h-8 w-8 rounded-full" src="https://i.postimg.cc/5N2WHwrd/Screenshot-2022-11-11-at-9-59-58-AM.png" alt="" id="profileimg" referrerpolicy="no-referrer"/>
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem v-slot="{ active }" v-if="account=='seller'">
                    <a href="/seller/profile" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }" v-if="account=='buyer'">
                    <a href="/profile" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Profile</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }" v-if="!isLoggedIn">
                    <a href="/login" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" >Log In</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }" v-if="isLoggedIn">
                    <a href="/login" @click="getout" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']" >Log Out</a>
                  </MenuItem>
                  <MenuItem v-slot="{ active }" v-if="!isLoggedIn">
                    <a href="/register" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Register</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
            
          </div>
        </div>
      </div>
  
      <DisclosurePanel class="sm:hidden">
        <div v-if="account=='buyer'" class="space-y-1 px-2 pt-2 pb-3">
          <DisclosureButton v-for="item in buyer_navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-yellow-500 text-white' : 'text-black hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
        <div v-if="account=='seller'" class="space-y-1 px-2 pt-2 pb-3">
          <DisclosureButton v-for="item in seller_navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-yellow-500 text-white' : 'text-black hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
        <div v-if="account==''" class="space-y-1 px-2 pt-2 pb-3">
          <DisclosureButton v-for="item in navigation" :key="item.name" as="a" :href="item.href" :class="[item.current ? 'bg-yellow-500 text-white' : 'text-black hover:bg-gray-700 hover:text-white', 'block px-3 py-2 rounded-md text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  </template>
  



<script setup>
  import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
  import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";
  import { onMounted, ref } from "vue";
  import { getDatabase, ref as dbref, child, get } from "firebase/database";


// const image = JSON.parse(localStorage.getItem("userCredential")).photoURL;
// "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";




const auth = getAuth();
const user = auth.currentUser;
const isLoggedIn = ref(false);
const base_data=JSON.parse(localStorage.getItem("db_data"));
var account=ref("")
var isBuyer=ref("")


if(base_data!=null){
  account=base_data.acc_type;
  if (account=="buyer"){
  isBuyer.value= true
}else if(account=="seller"){
  isBuyer.value=false
}
}



const getout = () => {
  signOut(auth)
    .then(() => {
      window.localStorage.clear();
      console.log("Successfully Signed Out");
      router.push("/login");
    })
    .catch((error) => {
      console.log(error.code);
    });
};

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const unique_id = user.uid;
      const tableRef = dbref(getDatabase());
      get(child(tableRef, `users/${unique_id}`)).then((snapshot)=>{
        if(snapshot.exists()){
          // console.log(snapshot.val());
          localStorage.setItem("db_data",JSON.stringify(snapshot.val()));
        }else{
          console.log("No Data Available");
        }
      }).catch((error)=>{
        console.error(error);
      })
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });


});




  //this is for the redirection of the profile page, depending on whether the person logged in is
  //a seller or buyer
 
  
  const buyer_navigation = [
    { name: 'Home', href: '/', current: true, },
    { name: 'Pet Updates', href: '/buyerjob', current: false },
    { name: 'About', href: '/about', current: false },
    
    
  ]
  const seller_navigation = [
    { name: 'Home', href: '/sellerhome', current: true, },
    { name: 'Jobs Update', href: '/buyerjob', current: false },
    { name: 'About', href: '/about', current: false },
   
    
  ]
  const navigation = [
    { name: 'Home', href: '/', current: true, },
    { name: 'About', href: '/about', current: false },
    
  ]

</script>


<script>
export default {
  data(){
    return{

    }
  },
  methods:{
   
    // }
  },

  mounted(){
    // error function
    // this.getProfilePic();
  }
}


</script>