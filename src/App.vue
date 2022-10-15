<template>
  <div>
  <NavBar></NavBar>
  <div></div>
  <router-view></router-view>
  </div>
</template>
<script>
import NavBar from "./components/Navbar.vue";
export default {
    name: "App",
    components: { NavBar }
}
</script>

<style>

</style>