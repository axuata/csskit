<script setup lang="ts">
const model = defineModel<string>();
const props = defineProps<{
  groupId: string,
  radios: string[],
  initialValue?: string,
  isDisable?: boolean
}>();

function onChange(value: string) {
  model.value = value;
}

onMounted(() => {
  if (props.initialValue) {
    props.radios.forEach((radio) => {
      const radioElement: HTMLInputElement = document.getElementById(props.groupId + radio) as HTMLInputElement;
      console.log(radioElement)
      if (radioElement.id === props.groupId + props.initialValue) {
        model.value = radio;
        radioElement.checked = true;
      }
    });
  } else {
  }
});
</script>

<template>
  <div class="flex gap-6px">
    <div v-for="radio in radios" class="flex items-center bg-white b-(solid 1px gray-3) h-30px px-6px rounded-8px">
      <input type="radio" :name="groupId" :id="groupId + radio" :disabled="isDisable" @change="onChange(radio)" class="appearance-none i-tabler:check w-0 transition-all duration-100 checked:(w-16px mr-4px) cursor-pointer" />
      <label :for="groupId + radio" class="text-14px cursor-pointer">{{ radio }}</label>
    </div>
  </div>
</template>

<style scoped>

</style>