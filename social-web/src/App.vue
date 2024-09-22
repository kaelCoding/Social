<script setup>
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="app">
    <div class="navbar">
      <Navbar/>
    </div>
    <div class="main-ctn">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
