<template>
  <Button
    :disabled="!canScrollNext"
    :class="cn('h-8 w-8 touch-manipulation p-0', orientation !== 'horizontal' && 'rotate-90', props.class)"
    variant="ghost"
    @click="scrollNext">
    <slot>
      <Icon name="heroicons:arrow-right" class="h-5 w-5 text-[#BBBBBB]" />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { WithClassAsProps } from './interface'
import { useCarousel } from './useCarousel'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>
