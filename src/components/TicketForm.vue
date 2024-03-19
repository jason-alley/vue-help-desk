<template>
  <form action="" class="wrapper pure-form pure-form-stacked">
    <fieldset>
      <legend>Ticket ID</legend>
      <div class="pure-g select-fields">
        <div class="pure-u-1-3 pure-u-md-1-3">
          <label for="ticket-title">Title</label>
          <input type="text" id="ticket-title" class="pure-u-23-24" />
        </div>
        <div class="pure-u-1-3 pure-u-md-1-3">
          <label for="ticket-priority">Priority</label>
          <select id="ticket-priority" class="pure-u-23-24">
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>
        <div class="pure-u-1-3 pure-u-md-1-3">
          <label for="ticket-status">Status</label>
          <select id="ticket-status" class="pure-u-23-24">
            <option>Open</option>
            <option>In Progress</option>
            <option>Closed</option>
          </select>
        </div>
      </div>
      <label for="ticket-description">Ticket Description</label>
      <textarea id="ticket-description" rows="10"></textarea>
      <button class="ticket-submit button-xlarge pure-button pure-button-primary">
        Submit Ticket
      </button>
    </fieldset>
  </form>
</template>

<script setup></script>

<style lang="scss" scoped>
/**
 * 1. Centers the content. Yes, it's a bit opinionated.
 * 2. See the "width vs max-width" section
 * 3. See the "Additional Padding" section
 */
.wrapper {
  margin-right: auto;
  /* 1 */
  margin-left: auto;
  /* 1 */

  max-width: 960px;
  /* 2 */

  padding-right: 10px;
  /* 3 */
  padding-left: 10px;
  /* 3 */
}

#ticket-description {
  width: 100%;
}

.select-fields {
  margin-bottom: 2rem;
}

.ticket-submit {
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
  margin-bottom: 5rem;
}
</style>
