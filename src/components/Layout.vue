<template>
  <div>
    <Navbar />
    <div class="container">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<style scoped>
.container {
  margin: 2rem auto;
  max-width: 800px;
}
</style>
