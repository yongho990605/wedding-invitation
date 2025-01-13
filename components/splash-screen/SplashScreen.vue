<template>
  <Transition name="fade">
    <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-[#F1E9E9]">
      <div
        class="min-w-screen-sm absolute left-1/2 top-0 z-50 flex h-full w-full max-w-screen-lg -translate-x-1/2 flex-col items-center justify-center">
        <Icon name="shared:couple-hand" size="9rem" />
        <div class="mt-4 flex flex-col items-center font-hakgyoansim-gaeulsopung">
          <div class="flex justify-center gap-3 text-[#827E7A]">
            <span class="text-2xl font-bold lg:text-3xl">장용호</span>
            <span class="mt-3 text-lg font-light lg:text-xl">그리고</span>
            <span class="text-2xl font-bold lg:text-3xl">최원비</span>
          </div>
          <div class="font-hakgyoansim-kossuyeom mt-4 flex justify-center text-3xl text-[#54514E] lg:text-4xl">
            우리 결혼합니다
          </div>
        </div>
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
