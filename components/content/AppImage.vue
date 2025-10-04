<template>
    <img :src="src" :alt="alt" :width="width" :height="height" />
</template>

<script setup lang="ts">
defineProps<{
    src: string
    alt: string
    width: string
    height: string
}>()
</script>