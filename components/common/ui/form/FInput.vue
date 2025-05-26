<script setup lang="ts">
const model = defineModel<string | number>();
const props = defineProps<{
  id: string,
  type: 'text' | 'number',
  initialValue?: string,
  placeholder?: string,
  autoComplete?: string,
  pattern?: string,
  minLength?: number,
  maxLength?: number,
  isDisable?: boolean,
  isRequired?: boolean,
  isReadOnly?: boolean,
  isAutoFocus?: boolean
}>();

function onInput(event: Event) {
  const target = event.target as HTMLInputElement;
  model.value = target.value;
}

onMounted(() => {
  if (props.initialValue) {
    const inputElement: HTMLInputElement = document.getElementById(props.id) as HTMLInputElement;
    if (inputElement) {
      inputElement.value = props.initialValue;
      model.value = props.initialValue;
    }
  }
});
</script>

<template>
    <input :id :type :placeholder :autocomplete="autoComplete" :pattern :minlength="minLength" :maxlength="maxLength" :disabled="isDisable" :required="isRequired" :readonly="isReadOnly" :autofocus="isAutoFocus" @input="onInput($event)" class="bg-white b-(solid 1px gray-3) h-30px flex items-center px-6px rounded-8px text-14px invalid:b-(solid 1px red-6)">
</template>

<style scoped>

</style>