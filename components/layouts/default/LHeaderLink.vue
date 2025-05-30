<script setup lang="ts">
const props = defineProps<{
  label: string,
  path: string,
  target?: '_blank' | '_parent' | '_self' | '_top'
}>();
</script>

<template>
  <NuxtLink :to="path" :target class="flex gap-3px items-center hover:bg-gray-1 rounded-6px px-8px py-3px transition-all duration-100 text-13px text-gray-7 font-500 cursor-pointer">
    {{ label }}
  </NuxtLink>
</template>

<style scoped>

</style>