<template>
  <span :class="cn(avatarVariant({ size }), props.class)">
    <img :src="resource" class="h-full w-full object-cover" />
  </span>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { avatarVariant } from '.'
import type { AvatarProps } from './types'

const config = useRuntimeConfig()

const props = withDefaults(defineProps<AvatarProps>(), {
  class: '',
  size: 'md'
})

const resource = import.meta.dev ? '/' + props.src : config.app.baseURL + props.src
</script>
