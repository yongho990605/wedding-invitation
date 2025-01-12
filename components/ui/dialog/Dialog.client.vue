<template>
  <DialogRoot v-bind="forwarded">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent>
      <slot name="content" />
    </DialogContent>
  </DialogRoot>
</template>

<script setup lang="ts">
import { DialogRoot, type DialogRootEmits, type DialogRootProps, useForwardPropsEmits } from 'radix-vue'

const props = defineProps<DialogRootProps>()
const emits = defineEmits<DialogRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
