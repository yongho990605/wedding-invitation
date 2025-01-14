<template>
  <Transition name="fade">
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-[#F1E9E9]">
      <div
        class="min-w-screen-sm absolute left-1/2 top-0 z-50 flex h-full w-full max-w-screen-lg -translate-x-1/2 flex-col items-center justify-center">
        <img
          src="/images/shared/splash-screen.png"
          alt="splash-screen"
          class="w-[90%]"
          loading="eager"
          fetchpriority="high" />
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const show = defineModel<boolean>('show', { default: true })

onMounted(() => {
  setTimeout(() => {
    show.value = false
  }, 1500)
})
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
