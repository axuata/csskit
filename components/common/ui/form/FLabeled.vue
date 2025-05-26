<script setup lang="ts">
const props = defineProps<{
  label: string
}>();
</script>

<template>
  <div>
    <p class="text-12px text-gray-8 font-500 mb-1px">{{ label }}</p>
    <slot />
  </div>
</template>

<style scoped>

</style>