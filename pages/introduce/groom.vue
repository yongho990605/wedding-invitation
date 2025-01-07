<template>
  <NuxtLayout name="introdution">
    <template #background>
      <img src="/groom/image1.jpg" alt="groom" class="h-full w-full rounded-b object-cover" />
    </template>
    <template #profile>
      <Avatar src="/groom/profile.jpg" size="lg" class="lg:h-24 lg:w-24" />
    </template>
    <template #name>
      <span>신랑</span>
      <span class="text-2xl font-bold">장용호</span>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({ introdution: 'groom' })
</script>
