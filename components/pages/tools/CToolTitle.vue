<script setup lang="ts">
const props = defineProps<{
  title: string,
  desc: string
}>();
</script>

<template>
  <section class="py-42px line-height-tight">
    <p class="font-600 text-gray-8 text-38px">{{ title }}</p>
    <p class="font-500 text-gray-6 text-14px">{{ desc }}</p>
  </section>
</template>

<style scoped>

</style>