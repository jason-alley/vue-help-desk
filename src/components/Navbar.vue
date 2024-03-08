<template>
  <nav class="pure-menu pure-menu-horizontal">
    <router-link to="/">
      <img
        src="../assets/help-desk.png"
        alt="Help Desk Logo"
        class="pure-menu-heading pure-menu-link"
      />
    </router-link>
    <ul class="pure-menu-list">
      <li class="pure-menu-item">
        <router-link to="/dashboard" class="pure-menu-link">Dashboard</router-link>
      </li>
      <li class="pure-menu-item">
        <router-link to="/" class="pure-menu-link button-secondary pure-button"
          >New Ticket</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.pure-menu {
  padding: 0.5em 2em;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}

.pure-menu-list {
  margin-right: 10rem;
}
</style>
