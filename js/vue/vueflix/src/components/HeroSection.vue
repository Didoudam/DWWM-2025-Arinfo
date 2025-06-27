<script setup>
defineProps({ film: Object });

</script>
<template>
    <div class="hero" :style="{background: `url(${film.banniere})`}">
        <h2>{{ film.titre }}</h2>
        <span>{{ film.duree }}</span>
        <span>{{ film.note }}</span>
    </div>
</template>
<style scoped>
.hero {
    width: 100dvw;
    height: 45dvh;
    background-size: cover;
}
</style>
