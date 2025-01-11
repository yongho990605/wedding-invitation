<template>
  <div :class="galleryVariants({ layout })">
    <template v-if="layout === 'vertical'">
      <div v-for="(image, index) in images" :key="image" class="overflow-hidden rounded-lg">
        <img
          :src="isDevMode ? image : config.app.baseURL + image"
          :alt="`Gallery image ${index + 1}`"
          class="h-full w-full object-contain transition-transform duration-300 hover:scale-105"
          loading="lazy"
          oncontextmenu="return false"
          @dragstart.prevent />
      </div>
    </template>
    <template v-else-if="layout === 'horizontal'">
      <div
        v-for="(image, index) in images"
        :key="image"
        class="overflow-hidden rounded-lg"
        :class="index % 2 !== 0 && 'mt-10'">
        <img
          :src="image"
          :alt="`Gallery image ${index + 1}`"
          class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
          oncontextmenu="return false"
          @dragstart.prevent />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { galleryVariants } from '.'
import type { GalleryProps } from './types'

const config = useRuntimeConfig()
const isDevMode = import.meta.dev

withDefaults(defineProps<GalleryProps>(), {
  layout: 'horizontal'
})
</script>
