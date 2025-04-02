<template>
    <input class="input" :placeholder="placeholder" :class="{'bg-color': hasBackgroundColor}" />
</template>

<script setup lang="ts">
defineProps<{
    placeholder: string
    hasBackgroundColor?: boolean
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