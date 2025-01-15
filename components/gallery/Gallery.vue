<template>
  <div>
    <GalleryDialog v-if="images?.length" v-model:open="dialog.open" :initial-index="dialog.initialIndex" :images />
    <div :class="galleryVariants({ layout })">
      <slot>
        <div
          v-for="(image, index) in images"
          :key="image"
          :class="cn('overflow-hidden rounded-lg', layout === 'horizontal' && index % 2 !== 0 && 'mt-10')"
          @click="open(index)">
          <img
            :src="withDomain(image)"
            :alt="`Gallery image ${index + 1}`"
            class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
            oncontextmenu="return false"
            @dragstart.prevent />
        </div>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { useGalleryDialog } from '~/components/gallery/useGalleryDialog'
import { withDomain } from '~/utils/withDomain'
import { galleryVariants } from '.'
import type { GalleryProps } from './types'

withDefaults(defineProps<GalleryProps>(), {
  layout: 'horizontal'
})

const { dialog, open } = useGalleryDialog()
</script>
