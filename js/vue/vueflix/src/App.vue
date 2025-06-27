<script setup>
import {ref} from 'vue'
import {filmsData} from './data/films'
import NavBar from './components/NavBar.vue'
import CategorieRows from './components/CatergorieRow.vue'
import HeroSection from './components/HeroSection.vue'
import FilmDetail from './components/FilmDetail.vue'

const selectedFilm=ref({})

function openDetail(id){
  
  selectedFilm.value = filmsData.find(film => film.id === id)
  console.log(selectedFilm.value);
}
</script>
<template>
  <NavBar/>
  <HeroSection :film="filmsData[0]" />
  <CategorieRows :films="filmsData" @openDetail="openDetail"/>
  <FilmDetail v-if="selectedFilm.value" :film="selectedFilm.value"/>
</template>

<style scoped>
#app{
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
body{
  display: flex;
  flex-direction: column;
  width: 100vw;
}
</style>