<template>
    <span>{{ text }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string
}>()
const appConfig = useAppConfig()

const text = computed(() => {
 return appConfig.translations.en[props.name]
})
</script>