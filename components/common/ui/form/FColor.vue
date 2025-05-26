<script setup lang="ts">
const model = defineModel<string>();
const props = defineProps<{
  id: string,
  initialValue?: string,
  isDisable?: boolean
}>();

function onChange(event: Event) {
  const target: HTMLInputElement = event.target as HTMLInputElement;
  model.value = target.value;
}

onMounted(() => {
  if (props.initialValue) {
    const inputElement: HTMLInputElement = document.getElementById(props.id) as HTMLInputElement;
    inputElement.value = props.initialValue;
    model.value = props.initialValue;
  }
});
</script>

<template>
  <div class="flex bg-white b-(solid 1px gray-3) rounded-8px h-30px px-6px items-center w-fit">
    <input type="color" :id :disabled="isDisable" @change="onChange($event)" class="size-14px rounded-50% mr-6px b-none flex cursor-pointer" />
    <label :for="id" class="font-mono text-14px text-gray-7 font-500 cursor-pointer">{{ model }}</label>
  </div>
</template>

<style scoped>

</style>