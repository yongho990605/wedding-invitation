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
          { label: $t('home'), to: { name: 'index' } },
          { slot: 'introduce-accordion' },
          { label: $t('gallery'), to: { name: 'gallery' }, class: '-mt-5' },
          { label: $t('invitation-message'), to: { name: 'index', hash: '#invite' } },
          { label: $t('directions'), to: { name: 'index', hash: '#location' } }
        ]">
        <template #introduce-accordion>
          <Accordion type="single" collapsible>
            <AccordionItem
              value="introduce"
              class="w-full items-center justify-center gap-5 font-gyeonggi-batang text-lg"
              :open="isOpen.accordion">
              <AccordionTrigger class="mb-5 gap-5 !text-lg font-bold" @click="isOpen.accordion = !isOpen.accordion">
                {{ $t('groom-bride-introduction') }}
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
      <Header class="relative">
        <HeaderContent>
          <Button variant="ghost" @click="toggleSound">
            <Icon
              :name="isPlaying ? 'heroicons:speaker-wave' : 'heroicons:speaker-x-mark'"
              size="1.8rem"
              class="text-[#333333]" />
          </Button>
        </HeaderContent>
        <HeaderContent>
          <Button variant="ghost" class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <NuxtLink class="cursor-pointer" :to="{ name: 'index' }" @click="scrollToStart">
              <Icon name="shared:logo" size="1.8rem" />
            </NuxtLink>
          </Button>
        </HeaderContent>
        <HeaderContent>
          <div class="flex items-center gap-3">
            <Select
              v-model="currentLocale"
              :items="[
                { label: '한국어', value: 'ko' },
                { label: 'English', value: 'en' },
                { label: '日本語', value: 'ja' }
              ]"
              @update:model-value="(value: string) => setLocale(value as typeof locale)">
              <Button
                variant="ghost"
                class="h-8 w-8 overflow-hidden rounded-full p-0 shadow shadow-slate-500 drop-shadow">
                <Avatar :src="`/images/flags/${currentLocale}.png`" class="h-8 w-8" />
              </Button>
            </Select>
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

const { isPlaying, play, pause } = useSound('/sounds/I_See_the_Light.mp3')
const { y: scrollY } = useWindowScroll()
const { locale, setLocale, t: $t } = useI18n({ useScope: 'global' })

const isOpen = ref({ burgerMenu: false, accordion: true })
const currentLocale = ref(locale.value)

const accordionContents = computed(() => [
  { label: `${$t('groom')} ${$t('person-name.yongho')}`, to: { name: 'introduce-groom' } },
  { label: `${$t('bride')} ${$t('person-name.wonbi')}`, to: { name: 'introduce-bride' } }
])

const scrollToStart = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toggleSound = () => {
  if (isPlaying.value) {
    pause()
  } else play()
}
</script>
