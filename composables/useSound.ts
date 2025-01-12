export const useSound = (source: string) => {
  const audio = ref<HTMLAudioElement | null>(null)
  const isPlaying = ref(false)

  onMounted(() => {
    audio.value = new Audio(source)
    audio.value.loop = true // 반복 재생
  })

  const play = () => {
    if (audio.value) {
      audio.value.play()
      isPlaying.value = true
    }
  }

  const pause = () => {
    if (audio.value) {
      audio.value.pause()
      isPlaying.value = false
    }
  }

  // 컴포넌트가 언마운트될 때 정리
  onUnmounted(() => {
    if (audio.value) {
      audio.value.pause()
      audio.value = null
    }
  })

  return {
    isPlaying,
    play,
    pause
  }
}
