<template>
  <span :class="cn(avatarVariant({ size }), props.class)">
    <img :src class="h-full w-full object-cover" />
  </span>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { avatarVariant } from '.'
import type { AvatarProps } from './types'
const props = withDefaults(defineProps<AvatarProps>(), {
  class: '',
  size: 'md'
})
</script>
