<template>
    <span>{{ text }}</span>
</template>

<script setup lang="ts">
const props = defineProps<{
    file: 'globalTranslations' | 'secondPageTranslations'
    translation: string
}>()
const activeLocale = useI18n().locale.value

const appConfig = useAppConfig()

const text = computed(() => {
 return appConfig[page.file][activeLocale][props.translation]
})
</script>