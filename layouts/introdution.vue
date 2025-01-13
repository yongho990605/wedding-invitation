<template>
  <div class="flex flex-col items-center justify-center gap-6 bg-white px-4 py-6">
    <Tabs class="w-full">
      <TabsList class="grid w-full grid-cols-2 gap-1 bg-[#F9E6EC] lg:gap-1.5 lg:p-1.5">
        <TabsTrigger
          v-for="trigger in tabsTriggers"
          :key="trigger.value"
          :as="NuxtLink"
          :to="`/introduce/${trigger.value}`"
          :value="trigger.value"
          :active="trigger.value === introdution"
          class="flex justify-center text-[#E58AAB] hover:bg-pink-50">
          {{ trigger.label }}
        </TabsTrigger>
      </TabsList>
    </Tabs>

    <div class="relative mx-2 mb-[2.5rem] flex flex-col">
      <div class="h-[clamp(25rem, 30vh, 34rem)] relative flex w-full flex-col overflow-hidden rounded-t-full">
        <slot name="background" />
      </div>
      <div class="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 translate-y-1/2">
        <slot name="profile" />
      </div>
    </div>
    <div class="flex items-center gap-2 font-gyeonggi-batang">
      <slot name="title" />
    </div>
    <BadgeGroup class="!gap-1.5">
      <slot name="hash-tags" />
    </BadgeGroup>
    <hr class="w-full border-t border-[#EEEEEE]" />
    <div class="flex w-full flex-col">
      <span
        class="content-center border-b border-[#EEEEEE] pb-5 pt-3 text-center font-gyeonggi-batang text-lg lg:text-xl">
        연락처
      </span>
      <slot name="contact" />
    </div>
    <div class="mb-10 flex w-full flex-col items-center">
      <span class="font-bonitalia text-3xl lg:text-4xl">Photos</span>
      <slot name="gallery" layout="horizontal" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'
const route = useRoute()

const introdution = route.meta.introdution
const tabsTriggers = [
  { label: '신랑 소개', value: 'groom' },
  { label: '신부 소개', value: 'bride' }
]
</script>
