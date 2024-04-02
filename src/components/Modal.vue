<script setup>
import { ref } from 'vue';

const dialog = ref(null);

const props = defineProps({
    ticket: {
        type: Object,
        required: true
    }
})


/**
 * Opens the dialog element.
 */
const openModal = () => {
    dialog.value.showModal();
}

defineExpose({
    openModal
});


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
    <dialog ref="dialog">
        <h3>Ticket Name: {{ props.ticket.title }}</h3>
        <form method="dialog">
            <span>Status: {{ props.ticket.status }}</span>
            <span>Priority: {{ props.ticket.priority }}</span>
            <p>{{ props.ticket.description }}</p>
            <button @click="closeModal">Close</button>
        </form>
    </dialog>
</template>