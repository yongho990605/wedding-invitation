<template>
  <div class="overflow-hidden bg-[#333]">
    <SplashScreen v-model:show="showSplash" />
    <NuxtLoadingIndicator />
    <SnowEffect />
    <template v-if="!showSplash">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </template>
    <Toaster position="bottom-center" />
  </div>
</template>

<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'

const showSplash = ref(true)
</script>

<style>
body {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
