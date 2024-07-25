<script setup lang="ts">
import { appName } from '~/constants'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: appName,
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
