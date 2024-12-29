<template>
  <Primitive :as="component()" :class="!icon && cn(buttonVariants({ color, rounded, size }), props.class)" :as-child>
    <Icon v-if="!!icon" :name="icon ?? ''" :class="cn(buttonIconVariants({ size }), props.class)" />
    <div v-else>
      <slot>{{ label }}</slot>
    </div>
  </Primitive>
</template>

<script setup lang="ts">
import { Primitive } from 'radix-vue'
import { NuxtLink } from '#components'
import { cn } from '~/lib/utils'
import { buttonVariants, buttonIconVariants } from '.'
import type { ButtonProps } from './types'

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button'
})

function component() {
  if (props.as === 'NuxtLink') return NuxtLink
  return 'button'
}
</script>
