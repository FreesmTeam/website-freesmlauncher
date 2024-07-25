<script setup lang="ts">
import { appDescription, appName } from '~/constants'

useHead({
  htmlAttrs: {
    lang: 'en',
  },
  title: appName,
})
useSeoMeta({
  title: appName,
  ogTitle: appName,
  description: appDescription,
  ogDescription: appDescription,
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
