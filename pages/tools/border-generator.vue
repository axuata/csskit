<script setup lang="ts">
const {t} = useI18n();
const options = ref({
  type: ref<string>(''),
  width: ref<number>(0),
  color: ref<string>('')
});

const generatedCss = computed(() => {
  return {
    short: `border: ${options.value.type.toLowerCase()} ${options.value.width}px ${options.value.color};`,
    long: `border-style: ${options.value.type.toLowerCase()};
border-width: ${options.value.width}px;
border-color: ${options.value.color};`
  };
});

function onCopyClick(text: string) {
  navigator.clipboard.writeText(text);
}
</script>

<template>
  <div class="px-10px">
    <!-- Title -->
    <div class="max-w-1200px mx-auto py-38px line-height-tight">
      <p class="font-600 text-gray-8 text-38px">{{ t('tools.border-generator.title') }}</p>
      <p class="font-500 text-gray-6 text-14px">{{ t('tools.border-generator.desc') }}</p>
    </div>

    <!-- Tool -->
    <div class="max-w-1200px mx-auto flex gap-16px">
      <!-- Options -->
      <div>
        <div class="px-16px py-14px bg-#fbfbfd max-w-1200px mx-auto b-(solid 1px gray-2) rounded-12px shadow-sm">
          <div class="w-300px">
            <p class="font-600 text-gray-8 mb-4px">{{ t('tools.border-generator.main.options') }}</p>
            <div class="bg-white b-(solid 1px gray-2) rounded-10px h-full px-10px py-8px flex flex-col gap-4px">
              <FLabeled :label="t('tools.border-generator.main.type')">
                <FRadio v-model="options.type" group-id="type" :radios="['Solid', 'Dashed', 'Dotted']" initial-value="Solid" />
              </FLabeled>
              <FLabeled :label="t('tools.border-generator.main.width_px')">
                <FInput v-model="options.width" id="width" type="number" initial-value="1" />
              </FLabeled>
              <FLabeled :label="t('tools.border-generator.main.color')">
                <FColor v-model="options.color" id="color" initial-value="#000000" />
              </FLabeled>
            </div>
          </div>
        </div>
      </div>

      <!-- Results -->
      <div class="b-(solid 1px gray-2) rounded-12px w-full shadow-sm">
        <div class="flex h-200px w-full items-center justify-center">
          <div class="p-24px w-300px h-150px" :style="{'border': `${options.type.toLowerCase()} ${options.width}px ${options.color}`}" />
        </div>
        <hr />
        <div class="p-10px flex flex-col gap-8px">
          <div class="bg-white flex justify-between items-center px-12px py-8px rounded-10px b-(solid 1px gray-2)">
            <Shiki lang="css" :code="generatedCss.short" />
            <CButton :label="t('tools.border-generator.main.copy')" type="secondary" icon="tabler:copy" @click="onCopyClick(generatedCss.short)" />
          </div>
          <div class="bg-white flex justify-between items-center px-12px py-8px rounded-10px b-(solid 1px gray-2)">
            <Shiki lang="css" :code="generatedCss.long" />
            <CButton :label="t('tools.border-generator.main.copy')" type="secondary" icon="tabler:copy" @click="onCopyClick(generatedCss.long)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>