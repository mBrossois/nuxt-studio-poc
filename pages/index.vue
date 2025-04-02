<script setup lang="ts">
const route = useRoute()
const path =  '/' + (route.query.name ?? '')

console.log(path)

const { data: page } = await useAsyncData(() => queryCollection('content').path(path).first())

useSeoMeta({
  title: page.value?.title,
  description: page.value?.description
})
</script>

<template>
  <ContentRenderer v-if="page" :value="page" />
  <div v-else>Page not found</div>
</template>
