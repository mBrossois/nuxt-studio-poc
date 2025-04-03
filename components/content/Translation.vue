<template>
    <span>{{ text }}</span>
</template>

<script setup lang="ts">
const {file = 'globalTranslations', translation} = defineProps<{
    file: 'globalTranslations' | 'secondPageTranslations'
    translation: string
}>()
const activeLocale = useI18n().locale.value

const appConfig = useAppConfig()

const text = computed(() => {
 return appConfig[file][activeLocale][translation]
})
</script>