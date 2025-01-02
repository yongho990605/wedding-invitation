<template>
  <Primitive v-bind="props" :class="cn(buttonVariants({ color, rounded, size }), props.class)" :as-child>
    <slot>{{ label }}</slot>
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive } from 'radix-vue'
import { cn } from '~/lib/utils'
import { buttonVariants } from '.'
import type { ButtonProps } from './types'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button'
})
</script>
