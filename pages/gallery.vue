<template>
  <div class="bg-white">
    <GalleryDialog
      v-if="currentGallery === 'CONCEPT_5'"
      v-model:open="dialog.open"
      :initial-index="dialog.initialIndex"
      :images="GALLERY_IMAGES[currentGallery]" />
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

      <Gallery v-if="currentGallery === 'CONCEPT_5'" class="mb-2">
        <template #default>
          <div
            v-for="(image, index) in GALLERY_IMAGES[currentGallery].slice(0, 4)"
            :key="image"
            class="col-span-2 overflow-hidden rounded-lg"
            @click="open(index)">
            <img
              :src="withDomain(image)"
              :alt="`Gallery image ${index + 1}`"
              class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              oncontextmenu="return false"
              @dragstart.prevent />
          </div>
          <div
            v-for="(image, index) in GALLERY_IMAGES[currentGallery].slice(4, 9)"
            :key="image"
            :class="cn('overflow-hidden rounded-lg', index % 2 !== 0 && 'mt-10')"
            @click="open(index + 4)">
            <img
              :src="withDomain(image)"
              :alt="`Gallery image ${index + 5}`"
              class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              oncontextmenu="return false"
              @dragstart.prevent />
          </div>
        </template>
      </Gallery>

      <Gallery
        v-else
        :images="GALLERY_IMAGES[currentGallery]"
        :layout="currentGallery === 'CONCEPT_2' ? 'vertical' : 'horizontal'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { useGalleryDialog } from '~/components/gallery/useGalleryDialog'
import { GALLERY_IMAGES } from '~/constants/gallery'
import { withDomain } from '~/utils/withDomain'

const { dialog, open } = useGalleryDialog()

const galleryOrder = ['첫 번째', '두 번째', '세 번째', '네 번째', '다섯 번째', '여섯 번째', '일곱 번째', '여덟 번째']
const currentGallery = ref<keyof typeof GALLERY_IMAGES>('CONCEPT_1')
</script>
