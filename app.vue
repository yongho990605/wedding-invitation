<template>
  <div class="overflow-hidden bg-[#333]">
    <NuxtLoadingIndicator />
    <SnowEffect />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster position="bottom-center" />
  </div>
</template>

<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
</script>

<style>
body {
  padding: 0 !important;
  margin: 0 !important;
}
</style>
