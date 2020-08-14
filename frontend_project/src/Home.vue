<template>
  <div id="Home">
    <NavMenu></NavMenu>
    <router-view />
  </div>
</template>

<script>
// import Navigation from '@/components/Navigation.vue'
import NavMenu from '@/components/NavMenu.vue'
// import User from '@/components/User.vue'
export default {  
//  components: { Navigation, User }
  components: { NavMenu }
}
</script>

<style>
</style>
