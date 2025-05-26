<script setup lang="ts">
const {t} = useI18n();
const options = ref({
  type: ref<string>(''),
  width: ref<number>(0),
  color: ref<string>(''),
});

const generatedCss = computed(() => {
  return `border: ${options.value.type} ${options.value.width} ${options.value.color}`;
});
</script>

<template>
  <div class="px-10px">
    <div class="max-w-1200px mx-auto py-38px line-height-tight">
      <p class="font-600 text-gray-8 text-38px">{{ t('tools.border-generator.title') }}</p>
      <p class="font-500 text-gray-6 text-14px">{{ t('tools.border-generator.desc') }}</p>
    </div>

    <div class="bg-#fbfbfd flex max-md:block gap-12px max-w-1200px mx-auto b-(solid 1px gray-2) p-12px rounded-12px">
      <section>
        <p class="text-16px font-600 text-gray-7 mb-4px">Options</p>
        <div class="bg-white b-(solid 1px gray-2) px-10px py-8px rounded-10px w-300px">
          <FLabeled label="Type">
            <div class="py-4px">
              <FRadio v-model="options.type" group-id="typeRadio" :radios="['Solid', 'Dashed' , 'Dotted' , 'Double']" initial-value="Solid" />
            </div>
          </FLabeled>
          <FLabeled label="Width (px)">
            <div class="py-4px flex gap-4px">
              <FInput v-model="options.width" id="width" type="number" initial-value="1" />
            </div>
          </FLabeled>
          <FLabeled label="Color">
            <div class="py-4px flex gap-4px">
              <FColor v-model="options.color" id="color" initial-value="#000000" />
            </div>
          </FLabeled>
        </div>
      </section>
      <section>
        <p class="text-16px font-600 text-gray-7 mb-4px">Live Preview</p>
        <div class="bg-white b-(solid 1px gray-2) w-400px h-186px p-32px rounded-10px">
          <div :style="{ 'border': `${options.type.toLowerCase()} ${options.width}px ${options.color}` }" class="w-full h-full" />
        </div>
      </section>
      <section>
        <p class="text-16px font-600 text-gray-7 mb-4px">Code Preview</p>
        <Shiki lang="css" :code="generatedCss" class="bg-white b-(solid 1px gray-2) p-16px rounded-8px" />
        <CButton label="Copy" type="secondary" icon="tabler:copy" class="w-full mt-4px" />
      </section>
    </div>
  </div>
</template>

<style scoped>

</style>