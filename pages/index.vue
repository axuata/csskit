<script setup lang="ts">
const {t} = useI18n();
const features = [
  {
    icon: 'twemoji:high-voltage',
    title: t('pages.home.features.lightweight.title'),
    desc: t('pages.home.features.lightweight.desc')
  },
  {
    icon: 'twemoji:shield',
    title: t('pages.home.features.secure.title'),
    desc: t('pages.home.features.secure.desc')
  },
]
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="max-w-1200px mx-auto py-70px max-md:px-10px">
      <div class="text-44px line-height-tight font-600 mb-16px">
        <p>CSS Kit</p>
        <p v-html="t('pages.home.html_hero')"></p>
      </div>
      <div class="flex gap-6px px-5px">
        <CButtonLink :label="t('pages.home.try')" type="primary" to="/tools/" />
        <CButtonLink label="GitHub" type="secondary" icon="logos:github-icon" to="https://github.com/axuata/csskit" />
      </div>
      <div class="max-w-1200px mx-auto flex gap-12px mt-20px">
        <div v-for="feature in features" class="flex flex-wrap gap-8px p-10px b-(solid 1px gray-2) rounded-12px">
          <div class="size-35px bg-gray-1 rounded-8px flex items-center justify-center">
            <Icon :name="feature.icon" class="size-20px" />
          </div>
          <div>
            <p class="text-18px font-600 text-gray-8">{{ feature.title }}</p>
            <p class="text-12px font-500 text-gray-7">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tools Section -->
    <section class="bg-#f3f8fc min-h-300px py-24px max-md:px-10px">
      <div class="max-w-1200px mx-auto">
        <h1 class="text-24px font-600 text-gray-9">{{ t('pages.home.all_tools') }}</h1>
        <div class="flex flex-wrap gap-22px pt-4px">
          <CIconCard icon="twemoji:straight-ruler" :title="t('tools.border-generator.meta.title')" :desc="t('tools.border-generator.meta.desc')" to="/tools/border-generator/" />
        </div>
      </div>
    </section>
  </div>


  <div class="hidden">
    <!-- DUMMY DOM -->
    <p class="text-blue-5"></p>
  </div>
</template>

<style scoped>

</style>