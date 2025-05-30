<script setup lang="ts">
const {t} = useI18n();
const options = ref({
  simple: {
    type: ref<'solid' | 'dashed' | 'dotted' | 'double'>(),
    width: ref<number>(),
    color: ref<string>()
  },
  advanced: {
    top: {
      type: ref<'solid' | 'dashed' | 'dotted' | 'double'>(),
      width: ref<number>(),
      color: ref<string>()
    },
    right: {
      type: ref<'solid' | 'dashed' | 'dotted' | 'double'>(),
      width: ref<number>(),
      color: ref<string>()
    },
    bottom: {
      type: ref<'solid' | 'dashed' | 'dotted' | 'double'>(),
      width: ref<number>(),
      color: ref<string>()
    },
    left: {
      type: ref<'solid' | 'dashed' | 'dotted' | 'double'>(),
      width: ref<number>(),
      color: ref<string>()
    }
  }
});
const mode = ref<'simple' | 'advanced'>('simple');
const generatedCss = computed(() => {
  return {
    simple: {
      short: `border: ${options.value.simple.type?.toLowerCase()} ${options.value.simple.width}px ${options.value.simple.color};`,
      long: `border-style: ${options.value.simple.type?.toLowerCase()};
border-width: ${options.value.simple.width}px;
border-color: ${options.value.simple.color};`
    },
    advanced: {
      short: `border-top: \`${options.value.advanced.top.type?.toLowerCase()} ${options.value.advanced.top.width}px ${options.value.advanced.top.color};
border-right: \`${options.value.advanced.right.type?.toLowerCase()} ${options.value.advanced.right.width}px ${options.value.advanced.right.color};
border-bottom: \`${options.value.advanced.bottom.type?.toLowerCase()} ${options.value.advanced.bottom.width}px ${options.value.advanced.bottom.color};
border-left: \`${options.value.advanced.left.type?.toLowerCase()} ${options.value.advanced.left.width}px ${options.value.advanced.left.color};`,
      long: `border-top-style: ${options.value.advanced.top.type?.toLowerCase()};
border-top-width: ${options.value.advanced.top.width}px;
border-top-color: ${options.value.advanced.top.color};
border-right-style: ${options.value.advanced.right.type?.toLowerCase()};
border-right-width: ${options.value.advanced.right.width}px;
border-right-color: ${options.value.advanced.right.color};
border-bottom-style: ${options.value.advanced.bottom.type?.toLowerCase()};
border-bottom-width: ${options.value.advanced.bottom.width}px;
border-bottom-color: ${options.value.advanced.bottom.color};
border-left-style: ${options.value.advanced.left.type?.toLowerCase()};
border-left-width: ${options.value.advanced.left.width}px;
border-left-color: ${options.value.advanced.left.color};`
    }
  };
});

function onTabChange(value: 'simple' | 'advanced') {
  mode.value = value;
}

function onCopyClick(text: string) {
  navigator.clipboard.writeText(text);
}
</script>

<template>
  <div class="max-w-1200px mx-auto px-10px">
    <CToolTitle :title="t('tools.border-generator.meta.title')" :desc="t('tools.border-generator.meta.desc')" />
    <main>
      <div class="flex gap-6px mb-10px">
        <div class="px-8px py-2px b-(solid 1px gray-2) rounded-8px transition-all duration-100 shadow-sm" :class="mode === 'simple' ? 'bg-gray-1' : 'bg-white'">
          <input type="radio" name="tab" id="tab-simple" @change="onTabChange('simple')" class="appearance-none">
          <label for="tab-simple" class="cursor-pointer text-14px text-gray-8 font-500">{{ t('tools.border-generator.mode.simple') }}</label>
        </div>
        <div class="px-8px py-2px b-(solid 1px gray-2) rounded-8px transition-all duration-100 shadow-sm"  :class="mode === 'advanced' ? 'bg-gray-1' : 'bg-white'">
          <input type="radio" name="tab" id="tab-advanced" @change="onTabChange('advanced')" class="appearance-none">
          <label for="tab-advanced" class="cursor-pointer text-14px text-gray-8 font-500">{{ t('tools.border-generator.mode.advanced') }}</label>
        </div>
      </div>

      <template v-if="mode === 'simple'">
        <div class="flex max-md:block gap-10px">
          <section>
            <div class="bg-#fbfbfd b-(solid 1px gray-2) rounded-10px p-12px shadow-sm">
              <p class="font-500 text-gray-8 mb-4px">{{ t('tools.border-generator.main.options') }}</p>
              <div class="bg-white b-(solid 1px gray-2) rounded-10px p-8px shadow-sm flex flex-col gap-4px">
                <FLabeled :label="t('tools.border-generator.main.option.type')">
                  <FRadio v-model="options.simple.type" group-id="options-type" :radios="['Solid', 'Dashed', 'Dotted']" initial-value="Solid" />
                </FLabeled>
                <FLabeled :label="t('tools.border-generator.main.option.width')">
                  <FInput v-model="options.simple.width" id="options-width" type="number" initial-value="1" />
                </FLabeled>
                <FLabeled :label="t('tools.border-generator.main.option.color')">
                  <FColor v-model="options.simple.color" id="options-color" initial-value="#000000" />
                </FLabeled>
              </div>
            </div>
          </section>
          <section class="w-full flex flex-col gap-10px max-md:mt-10px">
            <div class="bg-white b-(solid 1px gray-2) rounded-10px p-12px shadow-sm w-full">
              <div class="h-150px flex items-center justify-center" :style="{'border': `${options.simple.type?.toLowerCase()} ${options.simple.width}px ${options.simple.color}`}">
                <p class="font-500 text-gray-4 text-24px">{{ t('tools.border-generator.main.preview') }}</p>
              </div>
            </div>
            <div class="bg-white b-(solid 1px gray-2) rounded-10px p-12px shadow-sm w-full flex justify-between items-center">
              <Shiki lang="css" :code="generatedCss.simple.short" />
              <CButton :label="t('tools.border-generator.main.copy')" type="secondary" icon="tabler:copy" @click="onCopyClick(generatedCss.simple.short)" />
            </div>
            <div class="bg-white b-(solid 1px gray-2) rounded-10px p-12px shadow-sm w-full flex justify-between items-center">
              <Shiki lang="css" :code="generatedCss.simple.long" />
              <CButton :label="t('tools.border-generator.main.copy')" type="secondary" icon="tabler:copy" @click="onCopyClick(generatedCss.simple.long)" />
            </div>
          </section>
        </div>
      </template>

      <template v-else-if="mode === 'advanced'">
        <div class="flex max-md:block gap-10px">
          <section class="flex flex-col gap-10px">
            <div class="bg-#fbfbfd b-(solid 1px gray-2) rounded-10px p-12px shadow-sm flex flex-col gap-4px">
              <p class="font-500 text-gray-8">{{ t('tools.border-generator.main.options') }}</p>
              <div class="bg-white b-(solid 1px gray-2) rounded-10px p-8px shadow-sm flex gap-4px">
                <div class="flex items-center justify-center">
                  <Icon name="tabler:border-top" class="size-26px text-gray-7" />
                </div>
                <div class="flex flex-col gap-4px">
                  <FLabeled :label="t('tools.border-generator.main.option.type')">
                    <FRadio v-model="options.advanced.top.type" group-id="options-top-type" :radios="['Solid', 'Dashed', 'Dotted']" initial-value="Solid" />
                  </FLabeled>
                  <FLabeled :label="t('tools.border-generator.main.option.width')">
                    <FInput v-model="options.advanced.top.width" id="options-top-width" type="number" initial-value="1" />
                  </FLabeled>
                  <FLabeled :label="t('tools.border-generator.main.option.color')">
                    <FColor v-model="options.advanced.top.color" id="options-top-color" initial-value="#000000" />
                  </FLabeled>
                </div>
              </div>
              <div class="bg-white b-(solid 1px gray-2) rounded-10px p-8px shadow-sm flex gap-4px">
                <div class="flex items-center justify-center">
                  <Icon name="tabler:border-right" class="size-26px text-gray-7" />
                </div>
                <div class="flex flex-col gap-4px">
                  <FLabeled :label="t('tools.border-generator.main.option.type')">
                    <FRadio v-model="options.advanced.right.type" group-id="options-right-type" :radios="['Solid', 'Dashed', 'Dotted']" initial-value="Solid" />
                  </FLabeled>
                  <FLabeled :label="t('tools.border-generator.main.option.width')">
                    <FInput v-model="options.advanced.right.width" id="options-right-width" type="number" initial-value="1" />
                  </FLabeled>
                  <FLabeled :label="t('tools.border-generator.main.option.color')">
                    <FColor v-model="options.advanced.right.color" id="options-right-color" initial-value="#000000" />
                  </FLabeled>
                </div>
              </div>
              <div class="bg-white b-(solid 1px gray-2) rounded-10px p-8px shadow-sm flex gap-4px">
                <div class="flex items-center justify-center">
                  <Icon name="tabler:border-bottom" class="size-26px text-gray-7" />
                </div>
                <div class="flex flex-col gap-4px">
                  <FLabeled :label="t('tools.border-generator.main.option.type')">
                    <FRadio v-model="options.advanced.bottom.type" group-id="options-bottom-type" :radios="['Solid', 'Dashed', 'Dotted']" initial-value="Solid" />
                  </FLabeled>
                  <FLabeled :label="t('tools.border-generator.main.option.width')">
                    <FInput v-model="options.advanced.bottom.width" id="options-bottom-width" type="number" initial-value="1" />
                  </FLabeled>
                  <FLabeled :label="t('tools.border-generator.main.option.color')">
                    <FColor v-model="options.advanced.bottom.color" id="options-bottom-color" initial-value="#000000" />
                  </FLabeled>
                </div>
              </div>
              <div class="bg-white b-(solid 1px gray-2) rounded-10px p-8px shadow-sm flex gap-4px">
                <div class="flex items-center justify-center">
                  <Icon name="tabler:border-left" class="size-26px text-gray-7" />
                </div>
                <div class="flex flex-col gap-4px">
                  <FLabeled :label="t('tools.border-generator.main.option.type')">
                    <FRadio v-model="options.advanced.left.type" group-id="options-left-type" :radios="['Solid', 'Dashed', 'Dotted']" initial-value="Solid" />
                  </FLabeled>
                  <FLabeled :label="t('tools.border-generator.main.option.width')">
                    <FInput v-model="options.advanced.left.width" id="options-left-width" type="number" initial-value="1" />
                  </FLabeled>
                  <FLabeled :label="t('tools.border-generator.main.option.color')">
                    <FColor v-model="options.advanced.left.color" id="options-left-color" initial-value="#000000" />
                  </FLabeled>
                </div>
              </div>
            </div>
          </section>
          <section class="w-full flex flex-col gap-10px max-md:mt-10px">
            <div class="bg-white b-(solid 1px gray-2) rounded-10px p-12px shadow-sm w-full">
              <div class="h-150px flex items-center justify-center" :style="{
                'border-top': `${options.advanced.top.type?.toLowerCase()} ${options.advanced.top.width}px ${options.advanced.top.color}`,
                'border-right': `${options.advanced.right.type?.toLowerCase()} ${options.advanced.right.width}px ${options.advanced.right.color}`,
                'border-bottom': `${options.advanced.bottom.type?.toLowerCase()} ${options.advanced.bottom.width}px ${options.advanced.bottom.color}`,
                'border-left': `${options.advanced.left.type?.toLowerCase()} ${options.advanced.left.width}px ${options.advanced.left.color}`}">
                <p class="font-500 text-gray-4 text-24px">{{ t('tools.border-generator.main.preview') }}</p>
              </div>
            </div>
            <div class="bg-white b-(solid 1px gray-2) rounded-10px p-12px shadow-sm w-full flex justify-between items-center">
              <Shiki lang="css" :code="generatedCss.advanced.short" />
              <CButton label="Copy" type="secondary" icon="tabler:copy" @click="onCopyClick(generatedCss.advanced.short)" />
            </div>
            <div class="bg-white b-(solid 1px gray-2) rounded-10px p-12px shadow-sm w-full flex justify-between items-center">
              <Shiki lang="css" :code="generatedCss.advanced.long" />
              <CButton label="Copy" type="secondary" icon="tabler:copy" @click="onCopyClick(generatedCss.advanced.long)" />
            </div>
          </section>
        </div>
      </template>

      <template v-else>
        <p>バグが起こったみたいですね、Githubでissueを作れ</p>
      </template>
    </main>
  </div>
</template>

<style scoped>

</style>