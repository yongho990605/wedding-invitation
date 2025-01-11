<template>
  <div :class="galleryVariants({ layout })">
    <div
      v-for="(image, index) in images"
      :key="image"
      :class="cn('overflow-hidden rounded-lg', layout === 'horizontal' && index % 2 !== 0 && 'mt-10')">
      <img
        :src="isDevMode ? image : config.app.baseURL + image"
        :alt="`Gallery image ${index + 1}`"
        class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        loading="lazy"
        oncontextmenu="return false"
        @dragstart.prevent />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { galleryVariants } from '.'
import type { GalleryProps } from './types'

withDefaults(defineProps<GalleryProps>(), {
  layout: 'horizontal'
})

const config = useRuntimeConfig()
const isDevMode = import.meta.dev
</script>
