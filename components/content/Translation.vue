<template>
    <span>{{ text }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string
}>()
const activeLocale = useI18n().locale.value

const appConfig = useAppConfig()

const text = computed(() => {
 return appConfig.translations[activeLocale][props.name]
})
</script>