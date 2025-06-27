<script setup>
defineProps({
  recherche: {
    type: String,
    default: "",
  }
})
defineEmits(['update:recherche'])
</script>
<template>
  <img src="https://picsum.photos/50" alt="logo" class="logo" />
  <div>
    <input type="text" :value="recherche" @keyup="$emit('update:recherche', $event.target.value)" />
  </div>
</template>

<style scoped>
.logo {
  width: 50px;
}
</style>