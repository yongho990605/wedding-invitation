<template>
  <div v-show="open" class="absolute left-0 top-0 z-50 h-screen w-full bg-[#F1E9E9E5]">
    <div class="relative flex h-full w-full flex-col items-center justify-center gap-10">
      <Button class="absolute right-4 top-4" variant="ghost" @click="open = false">
        <Icon name="heroicons:x-mark" size="1.5rem" class="text-[#333333]" />
      </Button>
      <template v-for="item in items" :key="item.label">
        <slot :name="item.slot">
          <NuxtLink
            v-if="item.label"
            v-bind="item"
            :class="cn('font-gyeonggi-batang text-lg font-bold hover:text-[#E58AAB]', item.class)"
            @click="open = false">
            {{ item.label }}
          </NuxtLink>
        </slot>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NuxtLink } from '#components'
import { cn } from '@/lib/utils'
import type { HeaderHamburgerMenuProps } from './types'

defineProps<HeaderHamburgerMenuProps>()
const open = defineModel<boolean>('open', { default: false })
</script>
