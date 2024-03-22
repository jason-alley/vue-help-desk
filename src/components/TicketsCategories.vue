<script setup>
import { ref, computed } from 'vue';

import Ticket from './Ticket.vue';

const props = defineProps({
    tickets: {
        required: true,
        type: Array,
    },
});

/**
 * This filters the tickets json data by ticket status, and returns an array of tickets that match the status.
 * @param {Array} tickets
 * @param {String} status
 * @returns {Array}
 */
function filterTicketsByStatus(tickets, status) {
    return tickets.filter(ticket => ticket.status === status);
}

const newTickets = computed(() => filterTicketsByStatus(props.tickets, 'Open'));
const inProgressTickets = computed(() => filterTicketsByStatus(props.tickets, 'In Progress'));
const completedTickets = computed(() => filterTicketsByStatus(props.tickets, 'Completed'));



</script>

<template>
    <div class="pure-g">
        <div class="pure-u-1-3 tickets-col">
            <p>Todo</p>
            <Ticket v-for="ticket in newTickets" 
                :key="ticket.id"
                :id="+ticket.id"
                :title="ticket.title"
                :description="ticket.description"
                :status="ticket.status"
                :priority="ticket.priority"
            />
        </div>
        <div class="pure-u-1-3 tickets-col">
            <p>In Progress</p>
            <Ticket v-for="ticket in inProgressTickets" 
                :key="ticket.id"
                :id="+ticket.id"
                :title="ticket.title"
                :description="ticket.description"
                :status="ticket.status"
                :priority="ticket.priority"
            />
        </div>
        <div class="pure-u-1-3 tickets-col">
            <p>Completed</p>
            <Ticket v-for="ticket in completedTickets" 
                :key="ticket.id"
                :id="+ticket.id"
                :title="ticket.title"
                :description="ticket.description"
                :status="ticket.status"
                :priority="ticket.priority"
            />
        </div>
    </div>
</template>

<style scoped>
.tickets-col {
    /* border: 0.2px solid #636363; */
    background-color: #fcfcfc;
    border-radius: 5px;
    box-shadow: 0 0 2px #000;
    text-align: center;
    width: 32%;
    min-height: 600px;
    margin: 0 auto;
}
</style>