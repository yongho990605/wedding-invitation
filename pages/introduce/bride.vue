<template>
  <NuxtLayout name="introdution">
    <template #background>
      <img src="/bride/image2.jpg" alt="groom" class="h-full w-full rounded-b object-cover" />
    </template>
    <template #profile>
      <Avatar src="/bride/profile.jpg" size="lg" class="lg:h-24 lg:w-24" />
    </template>
    <template #name>
      <span>신부</span>
      <span class="text-2xl font-bold">최원비</span>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({ introdution: 'bride' })
</script>
