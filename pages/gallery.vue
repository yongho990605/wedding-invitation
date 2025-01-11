<template>
  <div class="bg-white">
    <div
      class="flex gap-3 overflow-x-auto bg-[#FFFAFB] px-4 [-ms-overflow-style:none] [scrollbar-width:none] lg:gap-4 [&::-webkit-scrollbar]:hidden">
      <div
        v-for="(value, key, index) in GALLERY_IMAGES"
        :key="key"
        class="flex cursor-pointer flex-col items-center gap-2 py-5"
        @click="currentGallery = key">
        <Avatar
          :src="value[0]"
          :class="
            cn(
              'h-12 w-12 lg:h-14 lg:w-14',
              currentGallery === key && 'border-2 border-white outline outline-2 outline-[#E58AAB]'
            )
          " />
        <span
          :class="
            cn('whitespace-nowrap text-xs text-[#777777] lg:text-sm', currentGallery === key && 'text-[#E58AAB]')
          ">
          {{ galleryOrder[index] }}
        </span>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center px-4"
      :class="GALLERY_IMAGES[currentGallery].length % 2 === 0 && currentGallery !== 'CONCEPT_2' ? 'pb-16' : 'pb-6'">
      <span class="py-5 font-bonitalia text-3xl">gallery</span>
      <template v-if="currentGallery === 'CONCEPT_5'">
        <Gallery :images="GALLERY_IMAGES[currentGallery].slice(0, 4)" layout="vertical" class="mb-2.5" />
        <Gallery :images="GALLERY_IMAGES[currentGallery].slice(4, 9)" />
      </template>
      <template v-else>
        <Gallery
          :images="GALLERY_IMAGES[currentGallery]"
          :layout="currentGallery === 'CONCEPT_2' ? 'vertical' : 'horizontal'" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { GALLERY_IMAGES } from '~/constants/gallery'

const galleryOrder = ['첫 번째', '두 번째', '세 번째', '네 번째', '다섯 번째', '여섯 번째', '일곱 번째', '여덟 번째']
const currentGallery = ref<keyof typeof GALLERY_IMAGES>('CONCEPT_1')
</script>
