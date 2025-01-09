<template>
  <div class="bg-[#333]">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster position="bottom-center" />
  </div>
</template>

<script setup lang="ts">
import { Toaster } from '@/components/ui/sonner'
</script>
