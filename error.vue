<script setup lang="ts">
import type {NuxtError} from '#app';

const {locale} = useI18n();
const homePath = `/${locale.value}/`;
const props = defineProps<{
  error: NuxtError
}>();
</script>

<template>
  <div>
    <LHeader />
    <main class="py-24px text-center line-height-tight">
      <p class="text-80px font-700 text-red-5">{{ error.statusCode }}</p>
      <p class="text-14px font-600 text-gray-7">{{ error.message }}</p>
      <NuxtLink :to="homePath" class="text-14px font-500 text-blue-6">Go to Home</NuxtLink>
    </main>
    <LFooter />
  </div>
</template>

<style scoped>

</style>