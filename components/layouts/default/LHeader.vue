<script setup lang="ts">
const {t, locales, setLocale} = useI18n();

const props = defineProps<{
  hasTitle: boolean
}>();
</script>

<template>
  <template v-if="hasTitle">
    <header class="bg-white b-b-(solid 1px gray-2)">
      <div class="max-w-1200px mx-auto flex items-center justify-between h-55px">
        <div class="flex gap-5px items-center">
          <Icon name="twemoji:artist-palette" class="size-22px" />
          <p class="font-600 text-20px text-gray-8">CSS Kit</p>
          <div class="bg-#C6FF00 px-5px py-1px rounded-6px text-12px ml-5px font-500">
            <p>Alpha</p>
          </div>
        </div>
        <div class="flex items-center gap-12px text-13px text-gray-7 font-500">
          <NuxtLink to="/" class="hover:tracking-wider transition-all duration-100">{{ t('layouts.header.home') }}</NuxtLink>
          <NuxtLink to="/tools/" class="hover:tracking-wider transition-all duration-100">{{ t('layouts.header.tools') }}</NuxtLink>
          <select class="bg-white rounded-8px px-5px py-3px transition-colors duration-100 cursor-pointer hover:bg-gray-1">
            <option v-for="locale in locales" @click="setLocale(locale.code)">{{ locale.name }}</option>
          </select>
        </div>
      </div>
    </header>
  </template>
  <template v-else>
    <header class="bg-white b-b-(solid 1px gray-2)">
      <div class="max-w-1200px mx-auto flex items-center justify-end h-55px">
        <div class="flex items-center gap-12px text-13px text-gray-7 font-500">
          <NuxtLink to="/" class="hover:tracking-wider transition-all duration-100">{{ t('layouts.header.home') }}</NuxtLink>
          <NuxtLink to="/tools/" class="hover:tracking-wider transition-all duration-100">{{ t('layouts.header.tools') }}</NuxtLink>
          <select class="bg-white rounded-8px px-5px py-3px transition-colors duration-100 cursor-pointer hover:bg-gray-1">
            <option v-for="locale in locales" @click="setLocale(locale.code)">{{ locale.name }}</option>
          </select>
        </div>
      </div>
    </header>
  </template>
</template>

<style scoped>

</style>