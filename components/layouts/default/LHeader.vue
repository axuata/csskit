<script setup lang="ts">
const {t, locales, setLocale} = useI18n();
const currentLocale = ref<string>('ja');

function getLinkWithLocale(path?: string) {
  if (path) {
    if (path.startsWith('/')) {
      return `/${currentLocale.value}${path}`;
    } else {
      return `/${currentLocale.value}/${path}`;
    }
  } else {
    return `/${currentLocale.value}/`;
  }
}

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
      <div class="flex items-center gap-8px">
        <LHeaderLink :label="t('layouts.header.home')" :path="getLinkWithLocale('/')" />
        <LHeaderDropdown :label="t('layouts.header.language')" icon="tabler:world">
          <div class="w-fit flex flex-col gap-5px">
            <div v-for="locale in locales" @click="onLocaleClick(locale.code)" class="bg-white cursor-pointer whitespace-nowrap text-12px text-gray-7 px-6px py-3px b-(solid 1px gray-2) rounded-8px font-500 transition-all duration-100 hover:scale-105">
              <p>{{ locale.name }}</p>
            </div>
          </div>
        </LHeaderDropdown>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>