<template>
  <div class="flex flex-col bg-white">
    <div class="relative h-fit w-full overflow-hidden">
      <div class="relative h-fit w-full">
        <TransitionGroup name="fade">
          <div v-for="(image, index) in images" :key="image" class="w-full">
            <div
              class="absolute left-0 top-[60%] z-10 h-[42%] w-full bg-gradient-to-b from-transparent via-white/50 to-white" />
            <img v-show="currentImageIndex === index" :key="image" :src="image" class="-mt-[4.0625rem] w-full" />
          </div>
        </TransitionGroup>
        <div class="absolute top-[72%] z-20 flex w-full flex-col px-1">
          <div class="flex justify-center gap-3 font-gyeonggi-batang">
            <span class="text-xl font-bold lg:text-2xl">장용호</span>
            <span class="mt-2 lg:text-lg">그리고</span>
            <span class="text-xl font-bold lg:text-2xl">최원비</span>
          </div>
          <div class="mt-3 flex justify-center font-[ink-lipquid] text-5xl lg:text-6xl">우리 결혼합니다</div>
        </div>
      </div>
    </div>

    <div class="relative flex flex-col items-center justify-center">
      <img
        src="/shared/spinning-scroll.png"
        class="absolute -top-5 z-30 flex h-[4.625rem] w-[4.625rem] animate-[spin_6s_linear_infinite] justify-center" />
      <div class="mt-20 flex flex-col items-center justify-center pb-7">
        <span class="font-gyeonggi-batang text-xl font-bold">D-day</span>
        <div class="flex w-full items-center justify-center gap-5">
          <div
            v-for="(value, key) in remainingDueDate"
            :key="key"
            :class="
              cn(
                'mb-7 mt-5 flex flex-col items-center gap-2 sm:gap-1.5 lg:gap-2.5',
                key === 'Seconds' && 'hidden md:flex lg:flex'
              )
            ">
            <div class="relative">
              <ClientOnly>
                <CircleProgress
                  :border-width="3.5"
                  :border-bg-width="3.5"
                  :size="70"
                  empty-color="#EEEEEE"
                  :gradient="{
                    angle: 90,
                    startColor: '#EEACC1',
                    stopColor: '#D0D0F3'
                  }"
                  :percent="value.precentage"
                  unit="''"
                  is-gradient>
                  뭐 나옴?
                </CircleProgress>
              </ClientOnly>
              <span
                class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-gyeonggi-batang text-2xl font-bold">
                {{ value.text }}
              </span>
            </div>
            <span class="text-[0.8125rem] text-[#BBBBBB] lg:text-base">{{ key }}</span>
          </div>
        </div>
        <div
          id="invite"
          class="mb-7 mt-2 flex flex-col items-center justify-center gap-2 font-gyeonggi-batang text-[0.9375rem] lg:text-base">
          <p>광주 라붐웨딩홀 1층 리즈홀</p>
          <p>2025. 02. 22. 토요일 오후 2:00</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center bg-gradient-to-bl from-[#E8E3F5] to-[#F8E2DC] p-4">
      <Card class="w-full divide-y p-5 font-gyeonggi-batang">
        <CardHeader class="flex flex-col gap-1 pb-4 lg:gap-2">
          <p class="text-xl font-medium lg:text-2xl">소중한 결실의 순간,</p>
          <p class="text-[1.625rem] font-bold lg:text-4xl">당신을 초대합니다.</p>
        </CardHeader>
        <CardContent class="py-4 lg:text-[1.0625rem]">
          <div class="flex flex-col gap-2.5 break-keep">
            <p>
              축복이 내림처럼 포근한 눈이 내리는 2월의 하늘 아래, 저희 두 사람이 하나 되어 새로운 가정을 이루고자
              합니다.
            </p>
            <p>
              저희의 삶에 귀하고 특별한 의미가 되어 주신 당신께서 소중한 발걸음을 해 주시어, 이 자리에서 우리의 새로운
              시작을 함께 축복해 주신다면 더할나위 없는 기쁨으로 저희의 영원을 약속하는 이 자리가 더 큰 축복 속에
              아름답게 빛날 것입니다.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>

    <Carousel
      class="flex flex-col items-center justify-center border-b border-[#EEEEEE] px-4 py-10 font-gyeonggi-batang text-xl lg:text-2xl"
      :plugins="[carouselPlugin]"
      :options="{ loop: true }"
      @mouseenter="carouselPlugin.stop"
      @mouseleave="[carouselPlugin.reset(), carouselPlugin.play()]">
      <div class="flex w-full items-center justify-between border-b border-[#EEEEEE] pb-4">
        <span>앨범</span>
        <div class="flex">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
      <CarouselContent class="pt-10">
        <CarouselItem v-for="imgSource in Object.values(GALLERY_IMAGES).flat()" :key="imgSource" class="w-full">
          <img
            :src="`${config.app.baseURL === '/' ? '' : '/wedding-invitation'}${imgSource}`"
            :alt="imgSource"
            loading="lazy"
            class="h-[26.25rem] w-full rounded-2xl object-contain"
            oncontextmenu="return false"
            @dragstart.prevent />
        </CarouselItem>
      </CarouselContent>
    </Carousel>

    <div class="flex flex-col items-center justify-center divide-y px-4 py-10">
      <div id="location" class="flex w-full flex-col items-center justify-center gap-4 pb-4">
        <span class="font-gyeonggi-batang text-xl lg:text-2xl">오시는 길</span>
        <div class="flex flex-col items-center justify-center gap-2">
          <div class="flex items-center gap-1">
            <p class="cursor-pointer text-[#333333] sm:text-sm lg:text-lg">
              {{ weddingHoleAddress }}
            </p>
            <Button variant="ghost" class="p-0 hover:text-slate-500" @click="copyAddress">
              <Icon name="iconamoon:copy-duotone" />
            </Button>
          </div>
          <p class="text-[#999999] lg:text-lg">
            Tel.
            <a href="tel:062-380-7000" class="cursor-pointer font-semibold hover:text-[#E58AAB]">062-380-7000</a>
          </p>
        </div>
        <ClientOnly>
          <NaverMap class="h-[20rem]" />
        </ClientOnly>
        <Card orientation="horizontal" class="w-full divide-x border p-2 shadow-none">
          <CardContent class="w-full flex-row items-center justify-center gap-2">
            <img src="/map/naver.jpeg" alt="naver-map" class="w-5" />
            <NuxtLink to="https://naver.me/FvEI6CAZ" target="_blank">네이버 지도</NuxtLink>
          </CardContent>
          <CardContent class="w-full flex-row items-center justify-center gap-2">
            <img src="/map/kakao.jpeg" alt="kakao-map" class="w-5" />
            <NuxtLink to="https://kko.kakao.com/LrrRMT4k-u" target="_blank">카카오 맵</NuxtLink>
          </CardContent>
        </Card>
      </div>
      <div class="flex w-full flex-col items-center justify-center divide-y py-4">
        <span class="pb-5 pt-3 font-gyeonggi-batang text-lg lg:text-2xl">전세버스 안내</span>
        <Accordion type="single" collapsible class="w-full">
          <AccordionItem
            v-for="({ departureFrom, pickupLocation }, i) in accordionItems"
            :key="i"
            :value="`item-${i}`"
            class="border-b border-[#EEEEEE] py-6">
            <AccordionTrigger class="w-full justify-between">
              <div class="flex font-light lg:text-lg">
                <span class="font-semibold">{{ departureFrom.region }}</span>
                에서 광주 출발: &nbsp;
                <span class="font-semibold">{{ departureFrom.time }}시</span>
              </div>
            </AccordionTrigger>
            <AccordionContent class="flex flex-row gap-2 py-3 text-[0.9375rem] font-light lg:text-base">
              <span class="w-1/6 text-[#BBBBBB]">장소</span>
              <div class="flex flex-col gap-2">
                <template v-for="(item, j) in pickupLocation" :key="j">
                  <Badge v-if="item.type === 'badge'" class="text-[0.8rem] font-bold lg:text-[0.9125rem]" rounded>
                    {{ item.name }}
                  </Badge>
                  <div v-else class="flex flex-col gap-1.5">
                    <p class="font-semibold">{{ item.name }}</p>
                    <p class="text-[0.85rem] font-light lg:text-base">{{ item.address }}</p>
                  </div>
                </template>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useClipboard, useNow } from '@vueuse/core'
import Autoplay from 'embla-carousel-autoplay'
import { toast } from 'vue-sonner'
// @ts-ignore
import CircleProgress from 'vue3-circle-progress'
import { cn } from '@/lib/utils'
import { GALLERY_IMAGES } from '~/constants/gallery'

interface AccordionItem {
  departureFrom: { region: string; time: string | number }
  pickupLocation: { name: string; address?: string; type?: 'badge' | 'text' }[]
}

const config = useRuntimeConfig()
const weddingHoleAddress = '광주 서구 상무누리로 59 (치평동 268-18)'
const addressClipboard = useClipboard({ source: weddingHoleAddress })
const now = useNow()
const remainingDueDate = computed(() => {
  const diff = weddingDate.getTime() - now.value.getTime()
  const dueDays = Math.floor(diff / (1000 * 60 * 60 * 24))
  const dueHours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const dueMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const dueSeconds = Math.floor((diff % (1000 * 60)) / 1000)

  return {
    Days: { precentage: Math.floor((dueDays / 100) * 100), text: dueDays },
    Hours: { precentage: Math.floor((dueHours / 24) * 100), text: dueHours },
    Minutes: { precentage: Math.floor((dueMinutes / 60) * 100), text: dueMinutes },
    Seconds: { precentage: Math.floor((dueSeconds / 60) * 100), text: dueSeconds }
  }
})
const currentImageIndex = ref(0)
let intervalId: NodeJS.Timeout
onMounted(() => {
  intervalId = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length
  }, 3000)
})

onUnmounted(() => {
  clearInterval(intervalId)
})

const carouselPlugin = Autoplay({ delay: 3000, stopOnMouseEnter: true, stopOnInteraction: false })
const weddingDate = new Date('2025-02-22 14:00:00')
const images = ['main_image1.jpg', 'main_image2.jpg', 'main_image3.jpg']
const accordionItems: AccordionItem[] = [
  {
    departureFrom: { region: '대전', time: 11 },
    pickupLocation: [{ name: '죽동임시공영주차장', address: '(유성불백 건너편, 대전 유성구 죽동 731-1)' }]
  },
  {
    departureFrom: { region: '여수', time: 11 },
    pickupLocation: [
      { name: '여수 시민회관', address: '(전남 여수시 좌수영로 69 진남문예회관) →' },
      { type: 'badge', name: '여천에서 경유' },
      { name: '여수 소방서', address: '(전남 여수시 망마로 20)' }
    ]
  },
  {
    departureFrom: { region: '담양', time: 12 },
    pickupLocation: [{ name: '수북면사무소 앞', address: '(수북면 수북리 600)' }]
  }
]

const copyAddress = () => {
  addressClipboard.copy(weddingHoleAddress)
  toast.success('주소가 복사되었습니다')
}
</script>

<style scoped>
@import 'vue3-circle-progress/dist/circle-progress.css';

@font-face {
  font-family: 'ink-lipquid';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/InkLipquid.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
