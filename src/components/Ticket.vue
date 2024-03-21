<script setup>
import { ref } from 'vue';

const props = defineProps({
  id: {
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
    <div class="ticketCard">
      <h2>{{ title }}</h2>
      <p class="ticketCard-desription">Description: {{ description }}</p>
      <p>Status: {{ status }}</p>
      <p>Priority: {{ priority }}</p>    
    </div>
</template>

<style scoped>
.ticketCard {
  /* border: 0.3px solid #000; */
  padding: 1rem;
  margin: 1rem;
  text-align: left;
  box-shadow: 0 0 2px #000;
}

.ticketCard h2 {
  text-align: center;
}

.ticketCard-desription {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


</style>
