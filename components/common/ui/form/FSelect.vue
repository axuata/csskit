<script setup lang="ts">
const model = defineModel<string | string[]>();
const props = defineProps<{
  id: string,
  selects: string[],
  initialValue?: string,
  autoComplete?: string,
  isDisable?: boolean
}>();

function onChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  model.value = target.value;
}

onMounted(() => {
  if (props.initialValue) {
    const selectElement: HTMLSelectElement = document.getElementById(props.id) as HTMLSelectElement;

    selectElement.value = props.initialValue;
    model.value = props.initialValue;
  }
});
</script>

<template>
  <select :id :autocomplete="autoComplete" :disabled="isDisable" @change="onChange($event)" class="bg-white b-(solid 1px gray-3) h-30px flex items-center px-6px rounded-8px text-14px cursor-pointer">
    <option v-for="select in selects">{{ select }}</option>
  </select>
</template>

<style scoped>

</style>