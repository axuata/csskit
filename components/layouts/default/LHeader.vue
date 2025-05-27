<script setup lang="ts">
const {t, locales, setLocale} = useI18n();
const currentLocale = ref<string>('ja');
const homePath = computed(() => {
  return `/${currentLocale.value}/`;
});

function onLocaleClick(localeCode: any) {
  setLocale(localeCode);
  currentLocale.value = localeCode;
  console.log(currentLocale.value)
}
</script>

<template>
  <header class="bg-white b-b-(solid 1px gray-2) px-10px">
    <div class="max-w-1200px mx-auto flex items-center justify-between h-55px">
      <div class="flex gap-5px items-center">
        <Icon name="twemoji:artist-palette" class="size-22px" />
        <p class="font-600 text-20px text-gray-8">CSS Kit</p>
        <div class="bg-#C6FF00 px-5px py-1px rounded-6px text-12px ml-5px font-500">
          <p>Alpha</p>
        </div>
      </div>
      <div class="flex items-center gap-12px text-13px text-gray-7 font-500">
        <NuxtLink :to="homePath" class="hover:tracking-wider transition-all duration-100">{{ t('layouts.header.home') }}</NuxtLink>
        <select class="bg-white rounded-8px px-5px py-3px transition-colors duration-100 cursor-pointer hover:bg-gray-1 w-fit">
          <option v-for="locale in locales" @click="onLocaleClick(locale.code)">{{ locale.name }}</option>
        </select>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>