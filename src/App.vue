<template>
  <div>
  <NavBar class="z-10"></NavBar>
  <div></div>
  <router-view></router-view>
  <div></div>
  </div>
  
</template>
<script>

import NavBar from "./components/Navbar.vue";


export default {
  name: "App",
  components: { NavBar },
  
}
</script>
