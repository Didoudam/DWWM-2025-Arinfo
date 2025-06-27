<script setup>
const emit = defineEmits(['openDetail'])
import { PlayIcon } from '@heroicons/vue/24/solid';
defineProps({film:Object})
</script>
<template>
    <li @click="emit('openDetail')" :style="{cursor:'pointer'}">
        <div>
            <div class="miniature">
            <img :src='film.image' alt="">
            <PlayIcon class="icon" @click="emit('openPlayer')" :style="{cursor:'pointer'}"/>
            </div>
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

<style scoped>
.icon{
    position: absolute;
    width: 25px;
    left: 16px;
    bottom: 16px;
    transition: all 0.3s;
    fill: white;
}
.icon:hover{
    fill: rgb(172, 20, 223);
    transform: scale(1.1);
}
.miniature{
    position: relative;
}
</style>