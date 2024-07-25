import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(),
  ],
  transformers: [
    transformerVariantGroup(),
  ],
})
