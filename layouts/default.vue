<template>
  <div
    class="mx-auto flex w-screen min-w-[20rem] max-w-[27.5rem] flex-col"
    :class="isOpen && 'h-screen overflow-hidden'">
    <div class="relative">
      <HeaderHamburgerMenu
        v-model:open="isOpen"
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
              class="w-full items-center justify-center gap-5 font-gyeonggi-batang text-lg">
              <AccordionTrigger class="mb-5 gap-5 !text-lg font-bold">신랑 · 신부 소개</AccordionTrigger>
              <AccordionContent
                v-for="content in accordionContents"
                :key="content.label"
                class="text-[1.0625rem] font-bold">
                <NuxtLink :to="content.to" class="text-[1.0625rem] hover:text-[#E58AAB]" @click="isOpen = false">
                  {{ content.label }}
                </NuxtLink>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </template>
      </HeaderHamburgerMenu>
      <Header>
        <HeaderContent>
          <Button variant="ghost">
            <NuxtLink class="cursor-pointer" :to="{ name: 'index' }">
              <Icon name="flowbite:home-outline" size="1.8rem" class="text-[#333333]" />
            </NuxtLink>
          </Button>
        </HeaderContent>
        <HeaderContent>
          <h2 class="font-hakgyoansim-gaeulsopung text-2xl font-bold text-[#E58AAB]">용호💗원비</h2>
        </HeaderContent>
        <HeaderContent>
          <div class="flex gap-3">
            <Button variant="ghost" @click="isOpen = true">
              <Icon name="heroicons:bars-3-bottom-right" size="1.8rem" class="text-[#333333]" />
            </Button>
          </div>
        </HeaderContent>
      </Header>
      <slot />
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const accordionContents = [
  { label: '신랑 장용호', to: { name: 'introduce-groom' } },
  { label: '신부 최원비', to: { name: 'introduce-bride' } }
]
</script>
