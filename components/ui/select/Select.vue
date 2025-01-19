<template>
  <SelectRoot v-bind="forwarded">
    <SelectTrigger>
      <slot />
    </SelectTrigger>
    <SelectContent :class="props.class">
      <SelectItem v-for="item in items" :key="item.value" v-bind="item" />
    </SelectContent>
  </SelectRoot>
</template>

<script setup lang="ts">
import type { SelectRootEmits } from 'radix-vue'
import { SelectRoot, useForwardPropsEmits } from 'radix-vue'
import type { SelectProps } from './types'

const props = defineProps<SelectProps>()
const emits = defineEmits<SelectRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>
