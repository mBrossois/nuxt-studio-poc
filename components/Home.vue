<script setup lang="ts">
const props = defineProps<{
    language: 'en' | 'fr'
}>()


const { data: page } = await useAsyncData(() => queryCollection('content').path(`/home/${props.language}`).first())

</script>

<template>
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>Page not found</div>
</template>