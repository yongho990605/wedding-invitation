<script setup lang="ts">
import { cn } from '@/lib/utils'
import { TabsTrigger, type TabsTriggerProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<TabsTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <TabsTrigger
    v-bind="forwardedProps"
    :class="cn(
      'twinline-flex twitems-center twjustify-center twwhitespace-nowrap twrounded-sm twpx-3 twpy-1.5 twtext-sm twfont-medium twring-offset-background twtransition-all focus-visible:twoutline-none focus-visible:twring-2 focus-visible:twring-ring focus-visible:twring-offset-2 disabled:twpointer-events-none disabled:twopacity-50 data-[state=active]:twbg-background data-[state=active]:twtext-foreground data-[state=active]:twshadow-sm',
      props.class,
    )"
  >
    <span class="twtruncate">
      <slot />
    </span>
  </TabsTrigger>
</template>
