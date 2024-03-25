<script setup>
import { ref } from 'vue';

const props = defineProps({
    showModal: {
        type: String,
        required: true
    }
})


const dialog = document.querySelector("dialog");

// "Show the dialog" based on the "showModal" prop
if( props.showModal === "true" ) {
    dialog.show();
}


// "Close" button closes the dialog
const closeModal = () => {
    dialog.close();
}

</script>

<template>
    <dialog closed>
        <h3>Ticket Name</h3>
        <form method="dialog">
            <p>Hello from dialog box</p>
            <button @click="closeModal">Close</button>
        </form>
    </dialog>
</template>