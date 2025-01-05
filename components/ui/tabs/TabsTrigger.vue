<template>
  <TabsTrigger v-bind="forwardedProps" :class="cn(tabsTriggerVariants({ active: props.active }), props.class)">
    <span class="truncate">
      <slot />
    </span>
  </TabsTrigger>
</template>

<script setup lang="ts">
import { TabsTrigger, useForwardProps } from 'radix-vue'
import { cn } from '@/lib/utils'
import { tabsTriggerVariants } from './index'
import { type TabsTriggerProps } from './types'

const props = defineProps<TabsTriggerProps>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>
