<template>
    <input :type="type" :placeholder="placeholder" />  
</template>

<script setup lang="ts">
defineProps({
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default: ''
    },
})
</script>