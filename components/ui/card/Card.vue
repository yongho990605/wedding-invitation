<template>
  <div :class="cn(cardVariants({ outline, orientation }), props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'
import { cardVariants } from './index'
const props = defineProps<{
  class?: HTMLAttributes['class']
  outline?: boolean
  orientation?: 'vertical' | 'horizontal'
}>()
</script>
