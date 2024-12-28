<script setup lang="ts">
import { cn } from '@/lib/utils'
import { TabsContent, type TabsContentProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TabsContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <TabsContent
    :class="cn('twmt-2 twring-offset-background focus-visible:twoutline-none focus-visible:twring-2 focus-visible:twring-ring focus-visible:twring-offset-2', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </TabsContent>
</template>
