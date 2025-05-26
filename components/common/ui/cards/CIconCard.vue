<script setup lang="ts">
const props = defineProps<{
  icon: string,
  title: string,
  desc: string,
  to?: string
}>();
</script>

<template>
  <NuxtLink class="flex items-center transition-all duration-100 hover:scale-105" :to>
    <div class="flex items-center justify-center bg-white size-56px rounded-12px b-(solid 1px gray-2)">
      <Icon :name="icon" class="size-20px" />
    </div>
    <div class="ml-6px">
      <p class="text-18px font-600 text-gray-8">{{ title }}</p>
      <p class="text-12px font-500 text-gray-6">{{ desc }}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>