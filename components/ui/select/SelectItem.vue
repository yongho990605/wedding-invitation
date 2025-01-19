<template>
  <BaseSelectItem :value class="w-full focus:outline-none">
    <slot>
      <Button variant="ghost" class="w-full cursor-pointer rounded text-center hover:bg-[#f8eef1]">
        {{ label }}
      </Button>
    </slot>
  </BaseSelectItem>
</template>

<script setup lang="ts">
import { SelectItem as BaseSelectItem } from 'radix-vue'
import { type SelectItemProps } from './types'

defineProps<SelectItemProps>()
</script>
