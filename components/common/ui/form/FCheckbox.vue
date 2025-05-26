<script setup lang="ts">
const model = defineModel<string[]>();
const props = defineProps<{
  groupId: string,
  checkboxes: string[],
  initialValue?: string[],
  isDisable?: boolean
}>();

function onChange(event: Event, value: string) {
  const target: HTMLInputElement = event.target as HTMLInputElement;
  if (target.checked) {
    model.value?.push(value);
  } else {
    model.value = model.value?.filter((v) => v !== value);
  }
}

onMounted(() => {
  if (props.initialValue) {
    props.initialValue.forEach((initialValue) => {
      const checkboxElement: HTMLInputElement = document.getElementById(props.groupId + initialValue) as HTMLInputElement;
      if (checkboxElement.id === props.groupId + initialValue) {
        checkboxElement.checked = true;
        model.value?.push(initialValue);
      }
    });
  }
});
</script>

<template>
  <div class="flex gap-6px">
    <div v-for="checkbox in checkboxes" class="flex items-center bg-white b-(solid 1px gray-3) h-30px px-6px rounded-8px">
      <input type="checkbox" :name="groupId" :id="groupId + checkbox" :disabled="isDisable" @change="onChange($event, checkbox)" class="appearance-none i-tabler:check text-green-6 w-0 transition-all duration-100 checked:(w-16px mr-4px) cursor-pointer" />
      <label :for="groupId + checkbox" class="text-14px cursor-pointer">{{ checkbox }}</label>
    </div>
  </div>
</template>

<style scoped>

</style>