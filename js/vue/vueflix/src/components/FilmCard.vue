<script setup>
const emit = defineEmits(['openDetail'])
defineProps({film:Object})
</script>
<template>
    <li @click="emit('openDetail')" :style="{cursor:'pointer'}">
        <div>
            <img :src='film.image' alt="">
            <div>
                <h3>{{ film.titre }}</h3>
                <span>{{ film.note }}</span>
            </div>
            <div>
                <p>{{ film.description }}</p>
            </div>
        </div>
    </li>
</template>