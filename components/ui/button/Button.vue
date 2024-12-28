<template>
  <button v-if="!!icon" :type>
    <Icon :name="icon ?? ''" :class="cn(buttonIconVariants({ size }), props.class)" />
  </button>

  <button v-else :type :class="cn(buttonVariants({ color, rounded, size }), props.class)">
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup lang="ts">
import { cn } from '~/lib/utils'
import { buttonVariants, buttonIconVariants } from '.'
import type { ButtonProps } from './types'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button'
})
</script>
