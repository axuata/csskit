<script setup lang="ts">
const props = defineProps<{
  label: string,
  type: 'primary' | 'secondary',
  icon?: string,
  to?: string
}>();

const classes = computed(() => {
  switch (props.type) {
    case 'primary':
      return "bg-blue-5 hover:bg-blue-4 text-white";
    case 'secondary':
      return "bg-white hover:bg-gray-1 b-(solid 1px gray-2) text-gray-8";
  }
});
</script>

<template>
  <NuxtLink :to class="flex gap-5px items-center text-14px font-500 px-10px py-4px rounded-8px transition-colors duration-150" :class="classes">
    <Icon v-if="icon" :name="icon" />
    {{ label }}
  </NuxtLink>
</template>

<style scoped>

</style>