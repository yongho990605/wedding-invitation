<template>
  <span :class="cn(avatarVariant({ size }), props.class)">
    <img :src="withDomain(props.src)" class="h-full w-full object-cover" />
  </span>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { withDomain } from '~/utils/withDomain'
import { avatarVariant } from '.'
import type { AvatarProps } from './types'

const props = withDefaults(defineProps<AvatarProps>(), {
  class: '',
  size: 'md'
})
</script>
