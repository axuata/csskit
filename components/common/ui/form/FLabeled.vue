<script setup lang="ts">
const props = defineProps<{
  label: string
}>();
</script>

<template>
  <div>
    <p class="text-12px text-gray-8 font-500">{{ label }}</p>
    <slot />
  </div>
</template>

<style scoped>

</style>