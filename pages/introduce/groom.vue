<template>
  <NuxtLayout name="introdution">
    <template #background>
      <img src="/groom/image1.jpg" alt="groom" class="h-full w-full rounded-b object-cover" />
    </template>
    <template #profile>
      <Avatar src="/groom/profile.jpg" size="lg" class="lg:h-24 lg:w-24" />
    </template>
    <template #title>
      <span class="lg:text-lg">신랑</span>
      <span class="text-2xl font-bold lg:text-3xl">장용호</span>
    </template>
    <template #badge-group>
      <BadgeGroup class="sm:gap-1.5 md:gap-2 lg:gap-2.5">
        <Badge
          v-for="tag in hashTags"
          :key="tag"
          class="bg-[#F9E6EC] sm:px-2 sm:py-0 sm:text-[0.8125rem] md:px-3 md:py-0.5 md:text-[0.92rem] lg:text-base"
          prefix="#"
          prefix-class="text-[#E58AAB]"
          outline
          size="lg"
          rounded>
          {{ tag }}
        </Badge>
      </BadgeGroup>
    </template>
    <template #contact>
      <ClientOnly>
        <Accordion type="multiple" class="w-full" collapsible>
          <AccordionItem value="mobile" class="border-b border-[#EEEEEE] py-3">
            <AccordionTrigger class="w-full justify-between p-3 font-semibold">Mobile</AccordionTrigger>
            <AccordionContent class="flex flex-row items-center justify-center gap-2 py-3">
              <span class="sm:text-base lg:text-lg">{{ phoneNumber }}</span>
              <ClientOnly>
                <Button class="bg-[#E58AAB] text-[0.8125rem] font-semibold text-white" rounded>
                  <a :href="`sms:${phoneNumber}`">문자 보내기</a>
                </Button>
              </ClientOnly>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="acoount-number" class="border-b border-[#EEEEEE] py-4">
            <AccordionTrigger class="w-full justify-between p-3 font-semibold">계좌번호</AccordionTrigger>
            <AccordionContent class="flex flex-row items-center justify-center gap-2 py-3">
              <span class="sm:text-base lg:text-lg">{{ accountBank }} {{ accountNumber }}</span>
              <ClientOnly>
                <Button class="bg-[#E4E4E4] text-[0.8125rem] font-semibold" rounded @click="copyAccount">
                  복사하기
                </Button>
              </ClientOnly>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ClientOnly>
    </template>
  </NuxtLayout>
</template>

<script setup lang="ts">
import { useClipboard } from '@vueuse/core'
import { toast } from 'vue-sonner'

definePageMeta({ introdution: 'groom' })

const hashTags = [
  '용고',
  'ENTJ',
  '계획적',
  '1등 신랑감',
  '프론트엔드 개발자',
  '일론머스크 광팬',
  '초보 투자자',
  '테슬라💕'
]

const phoneNumber = '010-9213-5518'
const accountBank = '토스뱅크'
const accountNumber = '1000-5493-4058'

const accountClipboard = useClipboard({ source: accountNumber })

const copyAccount = () => {
  accountClipboard.copy()
  toast.success('계좌번호가 복사되었습니다')
}
</script>
