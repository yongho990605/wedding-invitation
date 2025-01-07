<template>
  <AvatarRoot :class="cn(avatarVariant({ size }), props.class)">
    <AvatarImage :src :referrer-policy class="h-full w-full object-cover" />
  </AvatarRoot>
</template>

<script setup lang="ts">
import { AvatarRoot, AvatarImage } from 'radix-vue'
import { cn } from '@/lib/utils'
import { avatarVariant } from '.'
import type { AvatarProps } from './types'
const props = withDefaults(defineProps<AvatarProps>(), {
  class: '',
  size: 'md'
})
</script>
