<template>
  <div class="bg-white">
    <GalleryDialog
      v-if="currentGallery === 'CONCEPT_5'"
      v-model:open="dialog.open"
      :initial-index="dialog.initialIndex"
      :images="GALLERY_IMAGES[currentGallery]" />
    <div
      ref="scrollContainer"
      class="flex cursor-grab select-none gap-3 overflow-x-auto bg-[#FFFAFB] px-4 [-ms-overflow-style:none] [-webkit-user-drag:none] [scrollbar-width:none] [user-drag:none] active:cursor-grabbing lg:gap-4 [&::-webkit-scrollbar]:hidden"
      @mousedown="onMouseDown"
      @mouseleave="isDragging = false">
      <div
        v-for="(value, key, index) in GALLERY_IMAGES"
        :key="key"
        class="flex cursor-pointer flex-col items-center gap-2 py-5"
        @click="currentGallery = key">
        <Avatar
          :src="value[0]"
          :class="
            cn(
              'pointer-events-none h-12 w-12 [-webkit-user-drag:none] [user-drag:none] lg:h-14 lg:w-14',
              currentGallery === key && 'border-2 border-white outline outline-2 outline-[#E58AAB]'
            )
          "
          @dragstart.prevent />
        <span
          class="pointer-events-none"
          :class="
            cn('whitespace-nowrap text-xs text-[#777777] lg:text-sm', currentGallery === key && 'text-[#E58AAB]')
          ">
          {{ galleryOrder[index] }}
        </span>
      </div>
    </div>
    <div
      class="flex flex-col items-center justify-center px-4"
      :class="GALLERY_IMAGES[currentGallery].length % 2 === 0 && currentGallery !== 'CONCEPT_2' ? 'pb-16' : 'pb-6'">
      <span class="py-5 font-bonitalia text-3xl">gallery</span>

      <Gallery v-if="currentGallery === 'CONCEPT_5'" class="mb-2">
        <template #default>
          <div
            v-for="(image, index) in GALLERY_IMAGES[currentGallery].slice(0, 4)"
            :key="image"
            class="col-span-2 overflow-hidden rounded-lg"
            @click="open(index)">
            <img
              :src="withDomain(image)"
              :alt="`Gallery image ${index + 1}`"
              class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              oncontextmenu="return false"
              @dragstart.prevent />
          </div>
          <div
            v-for="(image, index) in GALLERY_IMAGES[currentGallery].slice(4, 9)"
            :key="image"
            :class="cn('overflow-hidden rounded-lg', index % 2 !== 0 && 'mt-10')"
            @click="open(index + 4)">
            <img
              :src="withDomain(image)"
              :alt="`Gallery image ${index + 5}`"
              class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              loading="lazy"
              oncontextmenu="return false"
              @dragstart.prevent />
          </div>
        </template>
      </Gallery>

      <Gallery
        v-else
        :images="GALLERY_IMAGES[currentGallery]"
        :layout="currentGallery === 'CONCEPT_2' ? 'vertical' : 'horizontal'" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'
import { useGalleryDialog } from '~/components/gallery/useGalleryDialog'
import { GALLERY_IMAGES } from '~/constants/gallery'
import { withDomain } from '~/utils/withDomain'

const { dialog, open } = useGalleryDialog()
const { t: $t } = useI18n({ useScope: 'global' })

const galleryOrder = computed(() => [
  $t('count.first'),
  $t('count.second'),
  $t('count.third'),
  $t('count.fourth'),
  $t('count.fifth'),
  $t('count.sixth'),
  $t('count.seventh'),
  $t('count.eighth')
])
const currentGallery = ref<keyof typeof GALLERY_IMAGES>('CONCEPT_1')

// 마우스 드래그 관련 상태 추가
const isDragging = ref(false)
const startX = ref(0)
const scrollLeft = ref(0)
const scrollContainer = ref<HTMLElement | null>(null)

// 마우스 이벤트 핸들러
const onMouseDown = (e: MouseEvent) => {
  isDragging.value = true
  if (!scrollContainer.value) return

  startX.value = e.pageX - scrollContainer.value.offsetLeft
  scrollLeft.value = scrollContainer.value.scrollLeft
}

const onMouseMove = (e: MouseEvent) => {
  if (!isDragging.value || !scrollContainer.value) return

  const x = e.pageX - scrollContainer.value.offsetLeft
  const walk = (x - startX.value) * 1 // 스크롤 속도 조절
  scrollContainer.value.scrollLeft = scrollLeft.value - walk
}

const onMouseUp = () => {
  isDragging.value = false
}

// 컴포넌트가 언마운트될 때 이벤트 리스너 제거
onUnmounted(() => {
  window.removeEventListener('mouseup', onMouseUp)
  window.removeEventListener('mousemove', onMouseMove)
})

// 전역 이벤트 리스너 등록
onMounted(() => {
  window.addEventListener('mouseup', onMouseUp)
  window.addEventListener('mousemove', onMouseMove)
})
</script>
