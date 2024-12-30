<template>
  <div :class="cn(badgeVariants({ rounded, size, color }), props.class)">
    <span v-if="prefix">{{ prefix }}</span>
    <slot />
    <span v-if="suffix">{{ suffix }}</span>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { badgeVariants } from '.'
import type { BadgeProps } from './types'

const props = withDefaults(defineProps<BadgeProps>(), {
  rounded: false,
  size: 'md',
  color: 'slate'
})
</script>
