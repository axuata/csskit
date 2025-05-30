<script setup lang="ts">
const props = defineProps<{
  label: string,
  icon?: string
}>();
const isOpened = ref<boolean>(false);
</script>

<template>
  <div class="relative">
    <div class="flex gap-3px items-center hover:bg-gray-1 rounded-6px px-8px py-5px transition-all duration-100 text-13px text-gray-7 font-500 cursor-pointer" @click="isOpened = !isOpened">
      <Icon v-if="icon" :name="icon" class="size-16px" />
      <p class="line-height-none cursor-pointer select-none">{{ label }}</p>
      <Icon v-if="isOpened" name="tabler:caret-up-filled" class="size-14px" />
      <Icon v-if="!isOpened" name="tabler:caret-down-filled" class="size-14px" />
    </div>
    <div v-if="isOpened" class="absolute my-5px shadow-md mx-auto bg-white b-(solid 1px gray-2) rounded-10px p-6px">
      <slot />
    </div>
  </div>
</template>

<style scoped>

</style>