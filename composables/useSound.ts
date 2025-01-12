export const useSound = (source: string) => {
  const audio = ref<HTMLAudioElement | null>(null)
  const isPlaying = ref(false)

  // 자동 재생 시도 함수
  const attemptAutoplay = async () => {
    if (!audio.value) return

    try {
      // 음소거 상태로 자동 재생 시도 (브라우저 정책상 더 수용적)
      audio.value.muted = true
      await audio.value.play()

      // 재생이 시작되면 음소거 해제
      audio.value.muted = false
      isPlaying.value = true
    } catch (error) {
      console.warn('자동 재생이 차단되었습니다:', error)
      audio.value.muted = false
    }
  }

  onMounted(() => {
    audio.value = new Audio(source)
    audio.value.loop = true

    attemptAutoplay()
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
