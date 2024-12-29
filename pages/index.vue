<template>
  <div class="flex flex-col">
    <div class="relative h-fit w-full">
      <div class="absolute left-0 top-1/2 z-10 h-1/2 w-full bg-gradient-to-b from-transparent to-white" />
      <NuxtImg src="/image1.jpg" class="w-full" />
      <div class="absolute top-[71%] z-20 flex w-full flex-col px-1">
        <div class="font-gyeonggi-batang flex justify-center gap-[clamp(0.375rem,1vw,0.75rem)]">
          <span class="text-[clamp(1.25rem,5vw,1.75rem)] font-bold">최원비</span>
          <span class="mt-[clamp(0.5rem,3vw,1rem)] text-[clamp(1rem,2.5vw,1.4rem)]">그리고</span>
          <span class="text-[clamp(1.25rem,5vw,1.75rem)] font-bold">장용호</span>
        </div>
        <div class="flex justify-center font-[ink-lipquid] text-[clamp(3rem,10vw,8rem)]">우리 결혼합니다</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
@font-face {
  font-family: 'ink-lipquid';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_one@1.0/InkLipquid.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
</style>
