<template>
  <AvatarRoot :class="cn(avatarVariant({ size }), props.class)">
    <img :src class="h-full w-full object-cover" />
  </AvatarRoot>
</template>

<script setup lang="ts">
import { AvatarRoot } from 'radix-vue'
import { cn } from '@/lib/utils'
import { avatarVariant } from '.'
import type { AvatarProps } from './types'
const props = withDefaults(defineProps<AvatarProps>(), {
  class: '',
  size: 'md'
})
</script>
