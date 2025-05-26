<script setup lang="ts">
const props = defineProps<{
  type: 'solid' | 'dashed' | 'dotted' | 'double'
}>();
</script>

<template>
  <div class="w-full b-t-(1px gray-2)" :style="{ 'border-style': props.type }" />
</template>

<style scoped>

</style>