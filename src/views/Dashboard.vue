<script setup>
import { ref } from "vue";
import data from "../data/tickets.json";

import Layout from "../components/Layout.vue";
import TicketsCategories from "../components/TicketsCategories.vue";

const ticketsData = ref(data);

</script>


<template>
  <Layout>
    <h1>Dashboard</h1>
    <section>
      <TicketsCategories :tickets="ticketsData" />
    </section>
  </Layout>
</template>
