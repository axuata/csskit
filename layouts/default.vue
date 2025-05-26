<script setup lang="ts">
import {useRoute} from "vue-router";
const path = computed(() => {
  return useRoute().fullPath;
});
</script>

<template>
  <LHeader />
  <slot />
  <LFooter />
</template>

<style scoped>

</style>