import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import App from './App.vue'
import LoginPage from './components/LoginPage'
import Register from './components/Register'
import ClientBooking from './components/ClientBooking'
import ProfilePage from './components/ProfilePage'
import SellerProfilePage from './components/seller/SellerProfilePage'
import SellerProfileInput from './components/seller/SellerProfileInput'
import ForgetPage from './components/ForgetPage'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIZhw1MDMtNCth2GwRcV5MnE39wXnH7YE",
  authDomain: "wad2-e6bc2.firebaseapp.com",
  projectId: "wad2-e6bc2",
  storageBucket: "wad2-e6bc2.appspot.com",
  messagingSenderId: "365351862449",
  appId: "1:365351862449:web:2cd988e0d4de07a23be290"
};

initializeApp(firebaseConfig);


const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/about', component: AboutPage},
        { path: '/home', component: HomePage},
        { path: "/:pathMatch(.*)*", component: NotFound },
        { path: "/", component: LoginPage},
        { path: "/register", component: Register},
        { path: "/client", component: ClientBooking },
        { path: "/profile", component: ProfilePage},
        { path: "/forget",component:ForgetPage},
        { path: "/seller/profile", component: SellerProfilePage},
        { path: "/seller/profileinput", component: SellerProfileInput},
     ]
});

const app= createApp(App)

app.use(router)

app.mount('#app')