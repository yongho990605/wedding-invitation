<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <DialogContent
      v-bind="forwarded"
      :class="
        cn(
          'data-[state=open] :slide-in-from-left-1/2 fixed left-1/2 top-1/2 z-50 flex h-fit w-full min-w-[20rem] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[50%] data-[state=open]:slide-in-from-top-[50%]',
          props.class
        )
      "
      @close-auto-focus="(e) => e.preventDefault()"
      @open-auto-focus="(e) => e.preventDefault()">
      <DialogTitle class="hidden" />
      <DialogDescription class="hidden" />
      <slot />
    </DialogContent>
  </DialogPortal>
</template>

<script setup lang="ts">
import {
  DialogContent,
  type DialogContentEmits,
  type DialogContentProps,
  DialogOverlay,
  DialogPortal,
  useForwardPropsEmits,
  DialogTitle,
  DialogDescription
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'
import { cn } from '@/lib/utils'

const props = defineProps<DialogContentProps & { class?: HTMLAttributes['class'] }>()
const emits = defineEmits<DialogContentEmits>()

const delegatedProps = computed(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { class: _, ...delegated } = props

  return delegated
})

const forwarded = useForwardPropsEmits(delegatedProps, emits)
</script>
