<script setup>

    defineProps({contact:Object})
    const emit = defineEmits(['suprimer'])

</script>

<template>	
    <li>
        <div>
            <span>{{ contact.nom }}</span>
            <span>{{ contact.prenom }}</span>
        </div>
        <div>
            <span>{{ contact.tel }}</span>
            <span>{{ contact.mail }}</span>
        </div>
        <button @click="emit('suprimer')" >X</button>
    </li>
</template>