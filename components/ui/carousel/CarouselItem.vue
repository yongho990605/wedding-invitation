<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="cn('flex min-w-0 shrink-0 items-center justify-center', props.class)">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import type { WithClassAsProps } from './interface'

const props = defineProps<WithClassAsProps>()
</script>
