<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <main>
    <div>
      <div class="i-carbon-warning inline-block" />
    </div>
    <div>Not found</div>
    <div>
      <button class="bg-amber" @click="router.back()">
        Back
      </button>
    </div>
  </main>
</template>
