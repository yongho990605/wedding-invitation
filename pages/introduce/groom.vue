<template>
  <NuxtLayout name="introdution">
    <template #background>
      <img src="/images/groom/image1.jpg" alt="groom" class="h-full w-full rounded-b object-cover" />
    </template>
    <template #profile>
      <Avatar src="/images/groom/profile.jpg" size="lg" class="lg:h-24 lg:w-24" />
    </template>
    <template #title>
      <span class="lg:text-lg">{{ $t('groom') }}</span>
      <span class="text-2xl font-bold lg:text-3xl">{{ $t('yongho') }}</span>
    </template>
    <template #hash-tags>
      <Badge
        v-for="tag in tm('tags') as string[]"
        :key="tag"
        class="bg-[#F9E6EC] sm:px-2 sm:py-0 sm:text-[0.8125rem] md:px-3 md:py-0.5 md:text-[0.92rem] lg:text-base"
        prefix="#"
        prefix-class="text-[#E58AAB]"
        outline
        size="lg"
        rounded>
        {{ rt(tag) }}
      </Badge>
    </template>
    <template #contact>
      <Accordion type="multiple" class="w-full" collapsible>
        <AccordionItem value="mobile" class="border-b border-[#EEEEEE] py-3">
          <AccordionTrigger class="w-full justify-between p-3 font-semibold lg:text-lg">Mobile</AccordionTrigger>
          <AccordionContent class="flex flex-row items-center justify-center gap-2 py-3">
            <span class="sm:text-base lg:text-lg">{{ GROOM.PHONE_NUMBER }}</span>
            <Button class="bg-[#E58AAB] text-[0.8125rem] font-semibold text-white" rounded>
              <a :href="`sms:${GROOM.PHONE_NUMBER}`">{{ $t('send-sms') }}</a>
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="acoount-number" class="border-b border-[#EEEEEE] py-4">
          <AccordionTrigger class="w-full justify-between p-3 font-semibold lg:text-lg">
            {{ $t('send-your-kind-blessing') }}
          </AccordionTrigger>
          <AccordionContent class="flex flex-row items-center justify-center gap-2 py-3">
            <p class="sm:text-base lg:text-lg">
              <span class="font-bold">{{ t('toss-bank') }}</span>
              {{ GROOM.ACCOUNT_NUMBER }}
            </p>
            <Button class="bg-[#E4E4E4] text-[0.8125rem] font-semibold" rounded @click="copyAccount">
              {{ $t('copy') }}
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </template>
    <template #gallery>
      <Gallery :images class="mb-10 mt-5" />
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue-sonner'
import { GROOM } from '~/constants/contact'

definePageMeta({ introdution: 'groom' })

const { rt, tm, t } = useI18n({ useScope: 'local' })
const { t: $t } = useI18n({ useScope: 'global' })

const accountClipboard = useClipboard({ source: GROOM.ACCOUNT_NUMBER })

const copyAccount = () => {
  accountClipboard.copy()
  toast.success($t('copy-account'))
}

const images: string[] = [
  '/images/groom/image1.jpg',
  '/images/groom/image2.jpg',
  '/images/groom/image3.jpg',
  '/images/groom/image4.jpg',
  '/images/groom/image5.jpg',
  '/images/groom/image6.jpg'
]
</script>

<i18n>
  { 
    ko: { 
     "tags": ['용고', 'ENTJ', '계획적', '1등 신랑감', '프론트엔드 개발자', '일론머스크 광팬', '초보 투자자', '테슬라💕'],
     "toss-bank": "토스뱅크",
    },
    en: {  
      "tags": ['Yong-go', 'ENTJ', 'Strategist', 'Top Groom Material', 'Frontend Developer', 'Elon Musk Fanatic', 'NoviceInvestor', 'Tesla Lover💕'],
      "toss-bank": "Toss Bank",
    },    
    ja: {
      "tags": ['ヨンゴ', 'ENTJ', '戦略家', '最高の花婿候補', 'Frontend Developer', 'イーロン・マスクファン', '初心者投資家', 'テスララバー💕'],
      "toss-bank": "Toss Bank",
    }
  }
</i18n>
