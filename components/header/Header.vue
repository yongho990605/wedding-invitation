<template>
  <header
    class="flex w-full items-center justify-between bg-white p-4 transition-all duration-300"
    :class="scrollY > 0 ? '' : 'shadow-sm'">
    <slot />
  </header>
</template>

<script setup lang="ts">
const { y: scrollY } = useWindowScroll()
</script>
