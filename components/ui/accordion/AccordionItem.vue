<template>
  <AccordionItem v-bind="forwardedProps" :class="cn('flex flex-col', props.class)">
    <slot />
  </AccordionItem>
</template>

<script setup lang="ts">
import { AccordionItem, type AccordionItemProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>
