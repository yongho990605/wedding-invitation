<template>
  <Dialog>
    <slot />
    <template #content>
      <Carousel class="relative flex h-full w-full items-center justify-center" @init-api="setApi">
        <header
          class="fixed inset-x-0 top-0 z-10 flex h-14 items-center justify-between bg-gradient-to-b from-black/50 to-transparent px-4">
          <div class="rounded-lg px-3 py-1 text-white">{{ current }} / {{ totalCount }}</div>
          <DialogClose
            class="rounded-lg p-1 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <Icon name="heroicons:x-mark" class="h-6 w-6 text-white" />
          </DialogClose>
        </header>
        <div class="absolute left-0 z-10 flex w-full justify-between px-3">
          <CarouselPrevious>
            <Icon name="heroicons:chevron-left" class="h-10 w-10 text-white" />
          </CarouselPrevious>
          <CarouselNext>
            <Icon name="heroicons:chevron-right" class="h-10 w-10 text-white" />
          </CarouselNext>
        </div>
        <CarouselContent class="flex w-full gap-40 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg">
          <CarouselItem v-for="(image, i) in images" :key="i" class="shrink-0 grow-0 basis-full">
            <img :src="withDomain(image)" class="object-cover" />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import type { CarouselApi } from '@/components/ui/carousel'
import { withDomain } from '~/utils/withDomain'
import type { GalleryDialogProps } from './types'

const props = withDefaults(defineProps<GalleryDialogProps>(), {
  initialIndex: 0
})

const api = ref<CarouselApi>()
const totalCount = ref(0)
const current = ref(0)

function setApi(val: CarouselApi) {
  api.value = val
}

watch(api, (api) => {
  if (!api) return

  totalCount.value = api.scrollSnapList().length

  if (props.initialIndex >= 0 && props.initialIndex < totalCount.value) {
    api.scrollTo(props.initialIndex, true)
    current.value = props.initialIndex + 1
  } else {
    current.value = api.selectedScrollSnap() + 1
  }

  api.on('select', () => {
    current.value = api.selectedScrollSnap() + 1
  })
})
</script>
