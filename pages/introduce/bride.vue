<template>
  <NuxtLayout name="introdution">
    <template #background>
      <img src="/images/bride/image2.jpg" alt="bride" class="h-full w-full rounded-b object-cover" />
    </template>
    <template #profile>
      <Avatar src="/images/bride/profile.jpg" size="lg" class="lg:h-24 lg:w-24" />
    </template>
    <template #title>
      <span class="lg:text-lg">{{ $t('bride') }}</span>
      <span class="text-2xl font-bold lg:text-3xl">{{ $t('person-name.wonbi') }}</span>
    </template>
    <template #hash-tags>
      <Badge
        v-for="tag in tm('tags') as string[]"
        :key="tag"
        class="bg-[#F9E6EC] sm:px-2 sm:py-0.5 sm:text-[0.8125rem] md:px-3 md:py-0.5 md:text-[0.92rem] lg:text-base"
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
            <span class="sm:text-base lg:text-lg">{{ BRIDE.PHONE_NUMBER }}</span>
            <Button class="bg-[#E58AAB] text-[0.8125rem] font-semibold text-white" rounded>
              <a :href="`sms:${BRIDE.PHONE_NUMBER}`">{{ $t('send-sms') }}</a>
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="acoount-number" class="border-b border-[#EEEEEE] py-4">
          <AccordionTrigger class="w-full justify-between p-3 font-semibold lg:text-lg">
            {{ $t('send-your-kind-blessing') }}
          </AccordionTrigger>
          <AccordionContent class="flex flex-row items-center justify-center gap-2 py-3">
            <p class="sm:text-base lg:text-lg">
              <span class="font-bold">{{ $t('bank.hana') }}</span>
              {{ BRIDE.ACCOUNT_NUMBER }}
            </p>
            <Button
              class="bg-[#E4E4E4] text-[0.8125rem] font-semibold"
              rounded
              @click="
                () => {
                  clipboard.copy(BRIDE.ACCOUNT_NUMBER)
                  toast.success($t('copy-account'))
                }
              ">
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
import { toast } from 'vue-sonner'
import { BRIDE } from '~/constants/contact'

definePageMeta({ introdution: 'bride' })

const { rt, tm } = useI18n({ useScope: 'local' })
const { t: $t } = useI18n({ useScope: 'global' })
const clipboard = useClipboard()

const images: string[] = [
  '/images/bride/image1.jpg',
  '/images/bride/image2.jpg',
  '/images/bride/image3.jpg',
  '/images/bride/image4.jpg',
  '/images/bride/image5.jpg',
  '/images/bride/image6.jpg',
  '/images/bride/image7.jpg',
  '/images/bride/image8.jpg'
]
</script>

<i18n>
{
  "ko": {
    "tags": ["와비", "ENFP", "덤벙이", "1등 신부감", "웹 디자이너", "모리 맘", "예술가의 혼", "1px의 신중함"]
  },
  "en": {
    "tags": ["Wabi", "ENFP", "Clumsy Queen", "Top Bride Material", "Web Designer", "Mori Mom", "Artist Soul", "Pixel Perfectionist"]
  },
  "ja": {
    "tags": ["ワビ", "ENFP", "おっちょこちょいクイーン", "最高の花嫁候補", "Web Designer", "モリママ", "芸術的魂", "ピクセルの完璧主義者"]
  } 
} 
</i18n>
