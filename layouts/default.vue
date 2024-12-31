<template>
  <div class="mx-auto flex w-screen min-w-[20rem] max-w-[48rem] flex-col" :class="isOpen && 'h-screen overflow-hidden'">
    <div class="relative">
      <HeaderHamburgerMenu
        v-model:open="isOpen"
        :items="[
          { label: '처음으로', to: ROUTE.INDEX },
          { slot: 'introduce-accordion' },
          { label: '갤러리', to: ROUTE.GALLERY, class: '-mt-5' },
          { label: '축하메세지', to: ROUTE.CONGRATULATIONS },
          { label: '오시는길', to: ROUTE.LOCATION }
        ]">
        <template #introduce-accordion>
          <Accordion type="single" collapsible>
            <AccordionItem
              value="introduce"
              class="font-gyeonggi-batang w-full items-center justify-center gap-5 text-[clamp(1.25rem,5vw,1.75rem)]">
              <AccordionTrigger class="mb-5 gap-[clamp(0.5rem,5vw,2rem)]">신랑 · 신부 소개</AccordionTrigger>
              <AccordionContent
                v-for="content in accordionContents"
                :key="content.label"
                class="text-[clamp(1rem,2.5vw,1.4rem)]">
                <NuxtLink :to="content.to" class="hover:text-[#E58AAB]" @click="isOpen = false">
                  {{ content.label }}
                </NuxtLink>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </template>
      </HeaderHamburgerMenu>
      <Header>
        <HeaderContent>
          <Button as="NuxtLink" :to="ROUTE.INDEX" icon="flowbite:home-outline" />
        </HeaderContent>
        <HeaderContent>
          <h2 class="font-hakgyoansim-gaeulsopung text-2xl font-bold text-[#E58AAB]">용호💗원비</h2>
        </HeaderContent>
        <HeaderContent>
          <div class="flex gap-3">
            <Button icon="heroicons:bars-3-bottom-right" @click="isOpen = true" />
          </div>
        </HeaderContent>
      </Header>
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ROUTE } from '~/constants'

const isOpen = ref(false)

const accordionContents = [
  { label: '신랑 장용호', to: ROUTE.INTRODUCE.GROOM },
  { label: '신부 최원비', to: ROUTE.INTRODUCE.BRIDE }
]
</script>
