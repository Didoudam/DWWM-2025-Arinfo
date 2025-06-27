<script setup>
    import ContactItem from './ContactItem.vue'
    defineProps({listeContacts:Array})
    const emit = defineEmits(['suprimer'])
</script>
<template>
    <ul>
        <ContactItem v-for="contact in listeContacts" @suprimer="emit('suprimer',contact.id)" :key="contact.id" :contact="contact"/>
    </ul>
</template>