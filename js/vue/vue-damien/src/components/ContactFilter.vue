<script setup>	
    defineProps({
        recherche:String
    })
</script>
<template>
    <input type="text" :value="recherche" @input="$emit("update:recherche", $event.target.value)">
</template>