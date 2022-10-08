import { createApp } from 'vue'
import {createRouter, createWebHistory} from 'vue-router'
import AboutPage from './components/AboutPage'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import App from './App.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/about', component: AboutPage},
        { path: '/', component: HomePage},
        { path: "/:pathMatch(.*)*", component: NotFound }
     ]
});

const app= createApp(App)

app.use(router)

app.mount('#app')