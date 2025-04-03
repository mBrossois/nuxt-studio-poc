<template>
    <span>{{ text }}</span>
</template>

<script setup lang="ts">
const {file = 'Global', translation} = defineProps<{
    file: 'Global' | 'SecondPage'
    translation: string
}>()
const activeLocale = useI18n().locale.value

const appConfig = useAppConfig()

const text = computed(() => {
 return appConfig[file][activeLocale][translation]
})
</script>