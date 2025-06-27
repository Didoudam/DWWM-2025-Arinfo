<script setup>
import { computed, watch } from 'vue'
import FilmCard from "./FilmCard.vue";
const props = defineProps({ films: Array, recherche: String });
const emit = defineEmits(['openDetail'])
watch(()=>props.recherche,(newValue)=>{
  console.log('recherche changée', newValue);
  
})
const resultatRecherche = computed(() => {
  if (!props.recherche || props.recherche.trim() === "") {
    return props.films
  }

  
  return props.films.filter(film => film.titre.toLowerCase().includes(props.recherche.toLowerCase()))

})

</script>
<template>
  <ul>
    <FilmCard v-for="film in resultatRecherche" :key="film.id" :film="film" @openDetail="emit('openDetail', film.id)" />

  </ul>
</template>
