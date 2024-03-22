<script setup>
import { ref, onMounted } from "vue";
// import data from "../data/tickets.json";
import { supabase } from "../libs/supabase.js";

import Layout from "../components/Layout.vue";
import TicketsCategories from "../components/TicketsCategories.vue";

const ticketsData = ref([]);

/**
 * Fetch data from Supabase table.
 */
async function getSupabaseData() {
  let { data, error } = await supabase.from("tickets").select("*");
  if (error) {
    console.error("Error fetching tickets", error);
  }
  ticketsData.value = data;
}

onMounted(() => {
  getSupabaseData();
});

</script>


<template>
  <Layout>
    <h1>Dashboard</h1>
    <section>
      <TicketsCategories :tickets="ticketsData" />
    </section>
    <!-- <div v-else>
      Loading...
    </div> -->
  </Layout>
</template>
