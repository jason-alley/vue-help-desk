<script setup>
import { ref } from 'vue';

const props = defineProps({
  Id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  created: {
    type: String,
  },
  updated: {
    type: String,
  },
});

</script>

<template>
    <div class="ticket-card">
      <h2>{{ title }}</h2>
      <p>Status: {{ status }}</p>
      <p>Priority: {{ priority }}</p>    
    </div>
</template>

<style scoped>
.ticket-card {
  border: 1px solid #000;
  padding: 1rem;
  margin: 1rem;
}


</style>
