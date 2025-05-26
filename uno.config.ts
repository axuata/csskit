import {defineConfig, presetWind3, presetIcons, transformerDirectives, transformerVariantGroup} from 'unocss';

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons()
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup()
  ]
})