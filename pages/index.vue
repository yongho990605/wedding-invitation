<template>
  <div class="flex flex-col bg-white">
    <GalleryDialog
      v-model:open="dialog.open"
      :initial-index="dialog.initialIndex"
      :images="Object.values(GALLERY_IMAGES).flat()" />
    <div class="relative w-full overflow-hidden">
      <div class="relative w-full">
        <div class="relative h-[23.5rem] w-full overflow-hidden md:h-[28.5rem] lg:h-[34rem]">
          <div v-for="(image, index) in images" :key="image" class="w-full">
            <div
              class="absolute left-0 top-[60%] z-10 h-[40%] w-full bg-gradient-to-b from-transparent via-white/50 to-white" />
            <img
              :src="withDomain(image)"
              :class="[
                'absolute left-0 top-0 -mt-[4.0625rem] w-full transition-opacity duration-500',
                currentImageIndex === index ? 'opacity-100' : 'opacity-0'
              ]" />
          </div>
        </div>

        <div
          class="absolute z-20 flex w-full flex-col"
          :class="getLocaleClass(locale, { en: 'top-[64%]', ko: 'top-[70%]' })">
          <div class="flex justify-center gap-3 font-gyeonggi-batang">
            <span class="text-xl font-bold lg:text-2xl">{{ $t('yongho') }}</span>
            <span class="mt-2 lg:text-lg">{{ $t('and') }}</span>
            <span class="text-xl font-bold lg:text-2xl">{{ $t('wonbi') }}</span>
          </div>
          <div
            class="z-10 mt-3 text-center text-5xl lg:text-6xl"
            :class="getLocaleClass(locale, { en: 'font-bonitalia !text-6xl', ko: 'font-[ink-lipquid]' })">
            {{ t('we-are-getting-married') }}
          </div>
        </div>
      </div>
    </div>

    <div class="relative flex flex-col items-center justify-center">
      <img
        src="/images/shared/spinning-scroll.png"
        class="absolute z-30 flex h-[4.625rem] w-[4.625rem] animate-[spin_6s_linear_infinite] justify-center"
        :class="locale === 'ko' ? '-top-3' : 'top-5 lg:top-0'" />
      <div class="mt-28 flex flex-col items-center justify-center pb-7">
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
                is-gradient />
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
          class="mb-7 mt-2 flex flex-col items-center justify-center gap-2 font-gyeonggi-batang lg:text-lg">
          <p class="whitespace-pre-line text-center">{{ t('wedding-hall-venue') }}</p>
          <p class="whitespace-pre-line">{{ t('wedding-date') }}</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center bg-gradient-to-bl from-[#E8E3F5] to-[#F8E2DC] p-4">
      <Card class="w-full divide-y p-5 font-gyeonggi-batang">
        <CardHeader class="flex flex-col gap-1 pb-4 lg:gap-2">
          <p class="text-xl font-medium lg:text-2xl">{{ t('cherished-moment') }}</p>
          <p class="text-3xl font-bold lg:text-4xl">{{ t('invite-you') }}</p>
        </CardHeader>
        <CardContent class="py-4 lg:text-[1.0625rem]">
          <div class="flex flex-col gap-2.5 break-keep">
            <p>{{ t('invitation-message-paragraph[0]') }}</p>
            <p>{{ t('invitation-message-paragraph[1]') }}</p>
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
        <div class="flex items-center gap-2">
          <span>{{ $t('gallery') }}</span>
          <Button
            variant="outline"
            class="h-6 border-[#E58AAB] font-pretendard text-[0.6875rem] font-semibold text-[#E58AAB] lg:h-8 lg:px-3 lg:py-1 lg:text-sm"
            size="sm"
            rounded>
            <NuxtLink :to="{ name: 'gallery' }" :class="getLocaleClass(locale, { en: 'font-bold' })">
              {{ $t('view-more') }}
            </NuxtLink>
          </Button>
        </div>
        <div class="flex">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </div>
      <CarouselContent class="flex w-full gap-20 pt-10 sm:max-w-[18.75rem] md:max-w-[21.875rem] lg:max-w-[25rem]">
        <CarouselItem
          v-for="(imgSource, index) in Object.values(GALLERY_IMAGES).flat()"
          :key="imgSource"
          class="w-full shrink-0 grow-0 basis-full cursor-pointer"
          @click="openGalleryDialog(index)">
          <div class="h-fit w-fit overflow-hidden rounded-2xl">
            <img
              :src="withDomain(imgSource)"
              :alt="imgSource"
              loading="lazy"
              class="max-h-[26.25rem] object-contain"
              oncontextmenu="return false"
              @dragstart.prevent />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>

    <div class="flex flex-col items-center justify-center divide-y px-4 py-10">
      <div id="location" class="flex w-full flex-col items-center justify-center gap-4 pb-4">
        <span class="font-gyeonggi-batang text-xl lg:text-2xl">{{ $t('directions') }}</span>
        <div class="flex flex-col items-center justify-center gap-2">
          <div class="flex items-center gap-1">
            <p class="cursor-pointer text-[#333333] sm:text-sm lg:text-lg">
              {{ t('wedding-hall-direction') }}
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
        <NaverMap />
        <Card orientation="horizontal" class="w-full divide-x border p-2 shadow-none">
          <template v-if="locale === 'ko'">
            <CardContent class="w-full flex-row items-center justify-center gap-2">
              <img src="/images/maps/naver.jpeg" alt="naver-map" class="w-5" />
              <NuxtLink to="https://naver.me/FvEI6CAZ" target="_blank">네이버 지도</NuxtLink>
            </CardContent>
            <CardContent class="w-full flex-row items-center justify-center gap-2">
              <img src="/images/maps/kakao.jpeg" alt="kakao-map" class="w-5" />
              <NuxtLink to="https://kko.kakao.com/LrrRMT4k-u" target="_blank">카카오 맵</NuxtLink>
            </CardContent>
          </template>
          <template v-else>
            <CardContent class="w-full flex-row items-center justify-center gap-2">
              <img src="/images/maps/google.png" alt="google-map" class="w-5" />
              <NuxtLink
                to="https://www.google.com/maps/dir//59+Sangmunuri-ro,+Seo-gu,+Gwangju/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x35718917aef01569:0x4a4a35705e229224!2m2!1d126.8381198!2d35.1484032?entry=ttu&g_ep=EgoyMDI1MDEyMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank">
                Google Map
              </NuxtLink>
            </CardContent>
          </template>
        </Card>
      </div>
      <div class="flex w-full flex-col">
        <div class="flex items-center gap-1 border-b border-dashed border-[#EEEEEE] py-3 text-lg lg:gap-1.5 lg:text-xl">
          <span class="w-fit rounded-full border px-2 text-center font-semibold lg:px-2">P</span>
          <span class="font-gyeonggi-batang font-bold text-[#777777]">{{ $t('parking-info') }}</span>
        </div>
        <ul class="list-disc space-y-2 py-3 pl-5">
          <li>
            <i18n-t keypath="free-parking" tag="p" class="lg:text-lg">
              <template #parkingLot>
                <span class="rounded bg-[#F9E6EC] px-1 font-bold">{{ t('la-boum-parking-lot') }}</span>
              </template>
            </i18n-t>
          </li>
          <li>
            <i18n-t keypath="free-parking" tag="p" class="lg:text-lg">
              <template #parkingLot>
                <span class="rounded bg-[#F9E6EC] px-1 font-bold">{{ t('kim-dae-jung-convention-parking-lot') }}</span>
              </template>
            </i18n-t>
          </li>
          <li>
            <i18n-t keypath="parking-spaces-accommodate" tag="p" class="lg:text-lg">
              <template #concurrentParking>
                <span class="font-bold">{{ t('concurrency-parking-thousand-vehicles') }}</span>
              </template>
            </i18n-t>
          </li>
        </ul>
      </div>
      <div class="flex w-full flex-col items-center justify-center divide-y py-4">
        <span class="pb-5 pt-3 font-gyeonggi-batang text-lg lg:text-2xl">{{ t('chartered-bus-info') }}</span>
        <Accordion type="single" collapsible class="w-full">
          <AccordionItem
            v-for="({ departureFrom, pickupLocation }, i) in accordionItems"
            :key="i"
            :value="`item-${i}`"
            class="border-b border-[#EEEEEE] py-6">
            <AccordionTrigger class="w-full justify-between">
              <i18n-t keypath="from-region-to-gwangju" tag="p" class="font-light lg:text-lg">
                <template #region>
                  <span class="font-semibold">{{ departureFrom.region }}</span>
                </template>
                <template #time>
                  <span class="whitespace-nowrap font-semibold">
                    {{ getLocaleTime(locale, departureFrom.time) }}
                  </span>
                </template>
              </i18n-t>
            </AccordionTrigger>
            <AccordionContent class="flex flex-row gap-2 py-3 text-[0.9375rem] font-light lg:text-base">
              <span class="w-1/6 font-semibold text-[#BBBBBB]">{{ $t('location') }}</span>
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
import { useGalleryDialog } from '~/components/gallery/useGalleryDialog'
import { GALLERY_IMAGES } from '~/constants/gallery'
import { withDomain } from '~/utils/withDomain'
interface AccordionItem {
  departureFrom: { region: string; time: number }
  pickupLocation: { name: string; address?: string; type?: 'badge' | 'text' }[]
}

const { locale, t: $t } = useI18n({ useScope: 'global' })
const { t } = useI18n({ useScope: 'local' })
const { dialog, open: openGalleryDialog } = useGalleryDialog()
const now = useNow()

const addressClipboard = useClipboard({ source: t('wedding-hall-direction') })
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
const images = ['images/main1.jpg', 'images/main2.jpg', 'images/main3.jpg']
const accordionItems = computed<AccordionItem[]>(() => [
  {
    departureFrom: { region: $t('region.daejeon'), time: 11 },
    pickupLocation: [{ name: t('pickup-location.daejeon[0].name'), address: t('pickup-location.daejeon[0].address') }]
  },
  {
    departureFrom: { region: $t('region.yeosu'), time: 11 },
    pickupLocation: [
      { name: t('pickup-location.yeosu[0].name'), address: t('pickup-location.yeosu[0].address') },
      { type: 'badge', name: t('pickup-location.yeosu[1].name') },
      { name: t('pickup-location.yeosu[2].name'), address: t('pickup-location.yeosu[2].address') }
    ]
  },
  {
    departureFrom: { region: $t('region.damyang'), time: 12 },
    pickupLocation: [{ name: t('pickup-location.damyang[0].name'), address: t('pickup-location.damyang[0].address') }]
  }
])

const copyAddress = () => {
  addressClipboard.copy(t('wedding-hall-direction'))
  toast.success(t('copy-address'))
}

const getLocaleTime = (_locale: typeof locale.value, time: number) => {
  switch (_locale) {
    case 'ko':
      return time + '시'
    case 'en':
      return time + (time % 12 === 0 ? ' PM' : ' AM')
    case 'ja':
      return time + '時'
    default:
      return time
  }
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
</style>

<i18n> 
  {
    ko: {
      "free-parking": "{parkingLot} 무료", 
      "copy-address": "주소가 복사되었습니다",
      "we-are-getting-married": "우리 결혼합니다",  
      "wedding-hall-venue": "광주 라붐웨딩홀 1층 리즈홀",
      "wedding-date": "2025. 2. 22. 토요일 오후 2:00",
      "cherished-moment": "소중한 결실의 순간,",
      "invite-you": "당신을 초대합니다.",
      "invitation-message-paragraph": ["축복이 내림처럼 포근한 눈이 내리는 2월의 하늘 아래, 저희 두 사람이 하나 되어 새로운 가정을 이루고자 합니다.", "저희의 삶에 귀하고 특별한 의미가 되어 주신 당신께서 소중한 발걸음을 해 주시어, 이 자리에서 우리의 새로운 시작을 함께 축복해 주신다면 더할나위 없는 기쁨으로 저희의 영원을 약속하는 이 자리가 더 큰 축복 속에 아름답게 빛날 것입니다."],
      "wedding-hall-direction": "광주 서구 상무누리로 59 (치평동 268-18)",
      "la-boum-parking-lot": "라붐 웨딩홀 내부 주차장",
      "kim-dae-jung-convention-parking-lot": "김대중컨벤션 제1주차장", 
      "concurrency-parking-thousand-vehicles": "동시주차 1,000대", 
      "parking-spaces-accommodate": "주차공간은 {concurrentParking} 가능합니다.",
      "chartered-bus-info": "전세버스 안내",
      "from-region-to-gwangju": "{region}에서 광주 출발 {time}",
      "pickup-location": {
        "daejeon": [
          {
            name: "죽동임시공영주차장",
            address: "(유성불백 건너편, 대전 유성구 죽동 731-1)"
          }
        ],
        "yeosu": [
          {
            name: "여수 시민회관",
            address: "(전남 여수시 좌수영로 69 진남문예회관) →" 
          },
          { name: "여천에서 경유" }, 
          {
            name: "여수 소방서",
            address: "(전남 여수시 망마로 20)"
          }
        ],
        "damyang": [  
          {
            name: "수북면사무소 앞",
            address: "(수북면 수북리 600)"
          }
        ]
      }
    }, 
    en: {
      "free-parking": "Free parking available at {parkingLot}", 
      "copy-address": "Address has been copied.",
      "we-are-getting-married": "We are getting married",  
      "wedding-hall-venue": "LaBoum Wedding Hall, \n1st Floor - Leez Hall, Gwangju",  
      "wedding-date": "Saturday, February 22, 2025, 2:00 PM",
      "cherished-moment": "A cherished moment of union,",
      "invite-you": "we warmly invite you.",
      "invitation-message-paragraph": ["Under the dreamy February sky, as gentle as a blessing of falling snow, we come together as one to begin our journey as a new family.", "You have been a precious and meaningful part of our lives, and it would be our greatest joy and honor to have your presence as we promise forever to each other. Your blessings will make this celebration even more radiant and filled with love."],
      "wedding-hall-direction": "59 Sangmunuri-ro, Seo-gu, Gwangju", 
      "la-boum-parking-lot": "La Boum Wedding Hall’s parking lot.",
      "kim-dae-jung-convention-parking-lot": "the Kim Daejung Convention Center’s Parking Lot #1.",
      "concurrency-parking-thousand-vehicles": "up to 1,000 vehicles simultaneously.",
      "parking-spaces-accommodate": "Parking spaces accommodate {concurrentParking}",
      "chartered-bus-info": "Chartered Bus Information",
      "from-region-to-gwangju": "From {region} to Gwangju {time}" ,
      "pickup-location": {
        "daejeon": [
          {
            name: "Jukdong Temporary Public Parking Lot", 
            address: "(731-1, Juk-dong, Yuseong-gu, Daejeon)"
          }
        ],
        "yeosu": [
          {  
            name: "Yeosu Civic Center",
            address: "(69, Jwasuyeong-ro, Yeosu-si, Jeollanam-do) →" 
          },
          { name: 'Stopover at Yeocheon' },
          {
            name: "Yeosu Fire Station",
            address: "(20, Mangma-ro, Yeosu-si, Jeollanam-do)"
          }
        ], 
        "damyang": [
          { 
            name: "In front of Subuk-myeon Community Center",
            address: "(600, Subuk-ri, Subuk-myeon, Damyang-gun, Jeollanam-do)"
          }
        ]
      }
    }
  } 
</i18n>
