<script setup>
defineProps({film:Object})
</script>

<template>
<div class="modal">
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
        </div>
</div>
</template>

<style scoped>
.modal{
    position: absolute;
    backdrop-filter: brightness(110%);
    width: 100dvw;
    height: 100dvh;
}

</style>