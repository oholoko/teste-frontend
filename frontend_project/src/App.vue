<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Navigation> </Navigation>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {  
  components: { Navigation }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
