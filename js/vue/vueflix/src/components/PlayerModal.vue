<!-- <script setup>
defineProps({film:Object})
const emit = defineEmits('closeDetail')
</script>

<template>
<div v-if='film' class="modal" @click="emit('closeDetail')">
        <div class="window">
            <img :src='film.banniere' alt="">
            <div>
                <h2>{{ film.titre }}</h2>
                <span>{{ film.note }}</span>
                <p>{{ film.description }}</p>
            </div>
            <div>
                <span>Réalisateur {{ film.realisateur }}</span>
                <span>Acteurs {{ film.acteurs }}</span>
            </div>
            <button @click="emit('closeDetail')">X</button>
        </div>
</div>
</template>

<style scoped>
.modal{
    position: absolute;
    backdrop-filter: brightness(75%);
    width: 100dvw;
    height: 100dvh;
    z-index: 10;
    overflow: hidden;
}

</style> -->