<template>
  <div ref="carouselRef" class="overflow-hidden">
    <div :class="cn('flex w-full items-center', props.class)" v-bind="$attrs">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { WithClassAsProps } from './interface'
import { useCarousel } from './useCarousel'

defineOptions({
  inheritAttrs: false
})

const props = defineProps<WithClassAsProps>()

const { carouselRef } = useCarousel()
</script>
