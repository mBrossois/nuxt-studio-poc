<template>
    <div :class="color"></div>
</template>

<script setup lang="ts">
const props = defineProps<{
    color: 'red' | 'blue'
}>()

const color = computed(() => {
    return [
        `${props.color}-block`
    ]
})
</script>

<style scoped>
.blue-block {
    width: 200px;
    height: 200px;
    background-color: blue;
}

.red-block {
    width: 200px;
    height: 200px;
    background-color: red;
}
</style>