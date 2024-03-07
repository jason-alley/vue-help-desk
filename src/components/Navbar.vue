<template>
  <nav class="pure-menu pure-menu-horizontal">
    <!-- <a href="#" class="pure-menu-heading pure-menu-link">Help Desk</a> -->
    <img
      src="../assets/help-desk.png"
      alt="Help Desk Logo"
      class="pure-menu-heading pure-menu-link"
    />
    <ul class="pure-menu-list">
      <li class="pure-menu-item">
        <a href="#" class="pure-menu-link">Tickets</a>
      </li>
      <li class="pure-menu-item">
        <a href="#" class="pure-menu-link">About</a>
      </li>
    </ul>
  </nav>
</template>

<script setup></script>

<style lang="scss" scoped>
.pure-menu {
  padding: 0.5em 2em;
  margin-bottom: 3rem;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}

.pure-menu-list {
  margin-left: 10rem;
}
</style>
