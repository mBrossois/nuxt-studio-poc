<template>
    <input class="input" :class="{'bg-color': hasBackgroundColor}" />
</template>

<script setup lang="ts">
defineProps<{
    hasBackgroundColor: boolean
}>()
</script>

<style scoped>
.input {
    background-color: none;
}

.bg-color {
    background-color: white;
}
</style>