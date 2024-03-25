<script setup>
import { ref, computed, onMounted } from 'vue';
import Ticket from './Ticket.vue';

// const dialog = document.querySelector("dialog");
const dialog = ref(null);
let showModal = ref("false");

const props = defineProps({
    tickets: {
        required: true,
        type: Array,
    }
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


/**
 * Opens the dialog element.
 * @param {Number} id
 */
function openModal(id) {
    showModal = "true";

    if (showModal === "true") {
        dialog.value.showModal();
    }

    // get the ticket with the id.
    const ticket = props.tickets.find(ticket => ticket.id === id);
    console.log(ticket, 'the selected ticket');

}

/**
 * Closes the modal by calling the `close` method on the `dialog` object.
 *
 * @param {type} - No parameters.
 * @return {type} - No return value.
 */
const closeModal = () => {
    dialog.value.close();
}


</script>

<template>
    <dialog ref="dialog" closed>
        <h3>Ticket Name</h3>
        <form method="dialog">
            <p>Hello from dialog box</p>
            <button @click="closeModal">Close</button>
        </form>
    </dialog>
    <div class="pure-g">
        <div class="pure-u-1-3 tickets-col">
            <p>Todo</p>
            <Ticket v-for="ticket in newTickets" :key="ticket.id" :id="+ticket.id" :title="ticket.title"
                :description="ticket.description" :status="ticket.status" :priority="ticket.priority"
                @click="openModal(ticket.id)" />
        </div>
        <div class="pure-u-1-3 tickets-col">
            <p>In Progress</p>
            <Ticket v-for="ticket in inProgressTickets" :key="ticket.id" :id="+ticket.id" :title="ticket.title"
                :description="ticket.description" :status="ticket.status" :priority="ticket.priority" />
        </div>
        <div class="pure-u-1-3 tickets-col">
            <p>Completed</p>
            <Ticket v-for="ticket in completedTickets" :key="ticket.id" :id="+ticket.id" :title="ticket.title"
                :description="ticket.description" :status="ticket.status" :priority="ticket.priority" />
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