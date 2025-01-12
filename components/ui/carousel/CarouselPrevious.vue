<template>
  <Button
    :disabled="!canScrollPrev"
    :class="cn('h-8 w-8 touch-manipulation p-0', props.class)"
    variant="ghost"
    @click="scrollPrev">
    <slot>
      <Icon name="heroicons:arrow-left" class="h-5 w-5 text-[#BBBBBB]" />
      <span class="sr-only">Previous Slide</span>
    </slot>
  </Button>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { WithClassAsProps } from './interface'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { canScrollPrev, scrollPrev } = useCarousel()
</script>
