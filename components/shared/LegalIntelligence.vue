<script setup lang="ts">
const props = defineProps<{
    language: 'en' | 'fr'
}>()


const { data: pageEn } = await useAsyncData(() => queryCollection('content').path('/legal-intelligence/en').first())
const { data: pageFr } = await useAsyncData(() => queryCollection('content').path('/legal-intelligence/fr').first())

const page = computed(() => {
    return props.language === 'en' ? pageEn.value : pageFr.value
})
</script>

<template>
    <ContentRenderer v-if="page" class="nuxt-content" :value="page" />
    <div v-else>Page not found</div>
</template>