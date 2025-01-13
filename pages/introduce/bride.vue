<template>
  <NuxtLayout name="introdution">
    <template #background>
      <img src="images/bride/image2.jpg" alt="groom" class="h-full w-full rounded-b object-cover" />
    </template>
    <template #profile>
      <Avatar src="images/bride/profile.jpg" size="lg" class="lg:h-24 lg:w-24" />
    </template>
    <template #title>
      <span>신부</span>
      <span class="text-2xl font-bold">최원비</span>
    </template>
    <template #hash-tags>
      <Badge
        v-for="tag in brideHashTags"
        :key="tag"
        class="bg-[#F9E6EC] sm:px-2 sm:py-0.5 sm:text-[0.8125rem] md:px-3 md:py-0.5 md:text-[0.92rem] lg:text-base"
        prefix="#"
        prefix-class="text-[#E58AAB]"
        outline
        size="lg"
        rounded>
        {{ tag }}
      </Badge>
    </template>
    <template #contact>
      <Accordion type="multiple" class="w-full" collapsible>
        <AccordionItem value="mobile" class="border-b border-[#EEEEEE] py-3">
          <AccordionTrigger class="w-full justify-between p-3 font-semibold">Mobile</AccordionTrigger>
          <AccordionContent class="flex flex-row items-center justify-center gap-2 py-3">
            <span class="sm:text-base lg:text-lg">{{ phoneNumber }}</span>
            <Button class="bg-[#E58AAB] text-[0.8125rem] font-semibold text-white" rounded>
              <a :href="`sms:${phoneNumber}`">문자 보내기</a>
            </Button>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="acoount-number" class="border-b border-[#EEEEEE] py-4">
          <AccordionTrigger class="w-full justify-between p-3 font-semibold">계좌번호</AccordionTrigger>
          <AccordionContent class="flex flex-row items-center justify-center gap-2 py-3">
            <span class="sm:text-base lg:text-lg">{{ accountBank }} {{ accountNumber }}</span>
            <Button class="bg-[#E4E4E4] text-[0.8125rem] font-semibold" rounded @click="copyAccount">복사하기</Button>
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

definePageMeta({ introdution: 'bride' })

const brideHashTags = ['와비', 'ENFP', '덤벙이', '1등 신부감', '웹 디자이너', '모리 맘', '예술가의 혼', '1px의 신중함']

const phoneNumber = '010-2938-4368'
const accountBank = '하나은행'
const accountNumber = '137-910347-04807'

const accountClipboard = useClipboard({ source: accountNumber })

const copyAccount = () => {
  accountClipboard.copy()
  toast.success('계좌번호가 복사되었습니다')
}

const images: string[] = [
  'images/bride/image1.jpg',
  'images/bride/image2.jpg',
  'images/bride/image3.jpg',
  'images/bride/image4.jpg',
  'images/bride/image5.jpg',
  'images/bride/image6.jpg',
  'images/bride/image7.jpg',
  'images/bride/image8.jpg'
]
</script>
