<script setup lang="ts">
const values = ref({
  finputText: ref<string>(),
  finputNumber: ref<number>(),
  fselect: ref<string | string[]>(),
  fradio: ref<string>(),
  fcheckbox: ref<string[]>([]),
  fcolor: ref<string>()
});
</script>

<template>
  <div class="b-(solid 1px gray-1) max-w-1200px mx-auto mt-20px p-20px">
    <FLabeled label="FInput">
      <FInput v-model="values.finputText" id="finputText" type="text" initial-value="初期値テスト" />
      <FInput v-model="values.finputNumber" id="finputNumber" type="number" initial-value="111001011000100010011101" />
    </FLabeled>
    <FLabeled label="FSelect">
      <FSelect v-model="values.fselect" id="fselect" :selects="['こんにちは', 'Hello', 'Bonjour']" initial-value="Hello" />
    </FLabeled>
    <FLabeled label="FRadio">
      <FRadio v-model="values.fradio" group-id="fradio" :radios="['Cześć', 'Buongiorno', 'Hola']" initial-value="Buongiorno" />
    </FLabeled>
    <FLabeled label="FCheckbox">
      <FCheckbox v-model="values.fcheckbox" group-id="fcheckbox" :checkboxes="['Cześć', 'Buongiorno', 'Hola']" :initial-value="['Cześć', 'Hola']" />
    </FLabeled>
    <FLabeled label="FColor">
      <FColor v-model="values.fcolor" id="fcolor" initial-value="#efefef" />
    </FLabeled>
    <hr class="my-16px">
    <p>finputText: {{ values.finputText }}</p>
    <p>finputNumber: {{ values.finputNumber }}</p>
    <p>fselect: {{ values.fselect }}</p>
    <p>fradio: {{ values.fradio }}</p>
    <p>fcheckbox: {{ values.fcheckbox }}</p>
    <p>fcolor: {{ values.fcolor}}</p>
  </div>
</template>

<style scoped>

</style>