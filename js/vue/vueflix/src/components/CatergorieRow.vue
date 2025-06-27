<script setup>
import FilmCard from "./FilmCard.vue";
defineProps({ films: Array });
const emit = defineEmits(['openDetail'])
</script>
<template>
  <ul>
    <FilmCard v-for="film in films" :key="film.id" :film="film" @openDetail="emit('openDetail',film.id)"/>
  </ul>
</template>
