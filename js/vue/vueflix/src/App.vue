<script setup>
import {ref} from 'vue'
import {filmsData} from './data/films'
import NavBar from './components/NavBar.vue'
import CategorieRows from './components/CatergorieRow.vue'
import HeroSection from './components/HeroSection.vue'
import FilmDetail from './components/FilmDetail.vue'

const selectedFilm=ref(null)
// const recherche = ''
function openDetail(id){
  selectedFilm.value = filmsData.find(film => film.id === id)
  console.log(selectedFilm.value);
}

function closeDetail(){
  selectedFilm.value = null
}

</script>
<template>
  <NavBar v-model:recherche="recherche" />
  <HeroSection :film="filmsData[0]" />
  <CategorieRows :films="filmsData" @openDetail="openDetail" :recherche="recherche"/>
  <FilmDetail v-if="selectedFilm" :film="selectedFilm" @closeDetail="closeDetail"/>
</template>

<style>
#app{
  flex-direction: column;
}
body{
  display: flex;
  flex-direction: column;
  width: 100vw;
}
</style>