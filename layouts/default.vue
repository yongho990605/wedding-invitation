<template>
  <div
    class="min-w-screen-sm relative mx-auto flex w-screen max-w-screen-lg flex-col"
    :class="isOpen.burgerMenu && 'h-screen overflow-hidden'">
    <div
      class="min-w-screen-sm fixed left-1/2 top-0 z-50 w-screen max-w-screen-lg -translate-x-1/2 bg-white"
      :class="scrollY > 60 ? 'opacity-70' : 'opacity-100'">
      <HeaderHamburgerMenu
        v-model:open="isOpen.burgerMenu"
        :items="[
          { label: '처음으로', to: { name: 'index' } },
          { slot: 'introduce-accordion' },
          { label: '갤러리', to: { name: 'gallery' }, class: '-mt-5' },
          { label: '초대 인사말', to: { name: 'index', hash: '#invite' } },
          { label: '오시는길', to: { name: 'index', hash: '#location' } }
        ]">
        <template #introduce-accordion>
          <Accordion type="single" collapsible>
            <AccordionItem
              value="introduce"
              class="w-full items-center justify-center gap-5 font-gyeonggi-batang text-lg"
              :open="isOpen.accordion">
              <AccordionTrigger class="mb-5 gap-5 !text-lg font-bold" @click="isOpen.accordion = !isOpen.accordion">
                신랑 · 신부 소개
              </AccordionTrigger>
              <AccordionContent v-for="content in accordionContents" :key="content.label" class="text-[1.0625rem]">
                <NuxtLink
                  :to="content.to"
                  class="text-[1.0625rem] hover:font-bold hover:text-[#E58AAB]"
                  @click="isOpen.burgerMenu = false">
                  {{ content.label }}
                </NuxtLink>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </template>
      </HeaderHamburgerMenu>
      <Header>
        <HeaderContent>
          <Button variant="ghost" @click="toggleSound">
            <Icon
              :name="isPlaying ? 'heroicons:speaker-wave' : 'heroicons:speaker-x-mark'"
              size="1.8rem"
              class="text-[#333333]" />
          </Button>
        </HeaderContent>
        <HeaderContent>
          <Button variant="ghost">
            <NuxtLink class="cursor-pointer" :to="{ name: 'index' }" @click="scrollToStart">
              <Icon name="shared:logo" size="1.8rem" />
            </NuxtLink>
          </Button>
        </HeaderContent>
        <HeaderContent>
          <div class="flex gap-3">
            <Button variant="ghost" @click="isOpen.burgerMenu = true">
              <Icon name="heroicons:bars-3-bottom-right" size="1.8rem" class="text-[#333333]" />
            </Button>
          </div>
        </HeaderContent>
      </Header>
    </div>
    <div class="relative pt-[60px]">
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSound } from '~/composables/useSound'

const isOpen = ref({ burgerMenu: false, accordion: true })
const { isPlaying, play, pause } = useSound('/sounds/I_See_the_Light.mp3')
const { y: scrollY } = useWindowScroll()

const accordionContents = [
  { label: '신랑 장용호', to: { name: 'introduce-groom' } },
  { label: '신부 최원비', to: { name: 'introduce-bride' } }
]

const scrollToStart = () => {
  if (window && import.meta.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const toggleSound = () => {
  if (isPlaying.value) {
    pause()
  } else play()
}
</script>
