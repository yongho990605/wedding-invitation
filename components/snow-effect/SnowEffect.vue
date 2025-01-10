<template>
  <canvas ref="canvas" class="pointer-events-none fixed inset-0 z-[9999] h-screen w-screen" />
</template>

<script setup lang="ts">
interface Snowflake {
  x: number
  y: number
  size: number
  speed: number
  wind: number
  rotation: number
  rotationSpeed: number
}

const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null
let animationFrameId: number
let snowflakes: Snowflake[] = []
let lastTime = 0
const FPS = 30 // 프레임 제한
const frameInterval = 1000 / FPS

// 눈송이 개수 설정
const BASE_SNOWFLAKE_COUNT = 60
const MOBILE_BREAKPOINT = 440 // 모바일 기준 너비

// 모바일 여부 감지
const isMobile = ref(false)
const snowflakeCount = computed(() => (isMobile.value ? Math.floor(BASE_SNOWFLAKE_COUNT / 4) : BASE_SNOWFLAKE_COUNT))

// 미리 폰트 설정
const SNOW_FONT = '14px Arial'

function createSnowflake(): Snowflake {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 24 + 12, // 크기 2배 증가 (기존: 12 + 6)
    speed: Math.random() + 0.5, // 속도 1.5배 증가 (기존: 0.3 + 0.2)
    wind: Math.random() * 0.15 - 0.075,
    rotation: Math.random() * Math.PI * 2,
    rotationSpeed: (Math.random() - 0.5) * 0.01
  }
}

// 오프스크린 캔버스 생성
let offscreenCanvas: HTMLCanvasElement | null = null
let offscreenCtx: CanvasRenderingContext2D | null = null

function createOffscreenCanvas() {
  offscreenCanvas = document.createElement('canvas')
  offscreenCanvas.width = 60 // 크기 2배 증가 (기존: 30)
  offscreenCanvas.height = 60 // 크기 2배 증가 (기존: 30)
  offscreenCtx = offscreenCanvas.getContext('2d')

  if (offscreenCtx) {
    offscreenCtx.fillStyle = 'rgba(135, 206, 235, 0.8)'
    offscreenCtx.font = SNOW_FONT // 폰트 크기 2배 증가 (기존: 14px)
    offscreenCtx.textAlign = 'center'
    offscreenCtx.textBaseline = 'middle'
    offscreenCtx.fillText('*', offscreenCanvas.width / 2, offscreenCanvas.height / 2)
  }
}

function drawSnowflake(x: number, y: number, size: number, rotation: number) {
  if (!ctx || !offscreenCanvas) return

  ctx.save()
  ctx.translate(x, y)
  ctx.rotate(rotation)
  ctx.scale(size / 20, size / 20)
  ctx.drawImage(offscreenCanvas, -offscreenCanvas.width / 2, -offscreenCanvas.height / 2)
  ctx.restore()
}

// 모바일 체크 함수
function checkMobile() {
  isMobile.value = window.innerWidth <= MOBILE_BREAKPOINT
}

function init() {
  if (!canvas.value) return

  // 디바이스 픽셀 비율 고려
  const dpr = window.devicePixelRatio || 1
  const rect = canvas.value.getBoundingClientRect()

  canvas.value.width = rect.width * dpr
  canvas.value.height = rect.height * dpr
  canvas.value.style.width = `${rect.width}px`
  canvas.value.style.height = `${rect.height}px`

  ctx = canvas.value.getContext('2d', { alpha: true })

  if (ctx) {
    ctx.scale(dpr, dpr)
    createOffscreenCanvas()
  }

  // 현재 snowflakeCount 값으로 눈송이 생성
  snowflakes = Array(snowflakeCount.value).fill(null).map(createSnowflake)
}

function draw(currentTime: number) {
  if (!ctx || !canvas.value) return

  // FPS 제한
  if (currentTime - lastTime < frameInterval) {
    animationFrameId = requestAnimationFrame(draw)
    return
  }

  lastTime = currentTime

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  snowflakes.forEach((flake) => {
    drawSnowflake(flake.x, flake.y, flake.size, flake.rotation)

    flake.y += flake.speed
    flake.x += flake.wind
    flake.rotation += flake.rotationSpeed

    if (flake.y > window.innerHeight) {
      flake.y = -10
      flake.x = Math.random() * window.innerWidth
    }

    if (flake.x > window.innerWidth) {
      flake.x = 0
    } else if (flake.x < 0) {
      flake.x = window.innerWidth
    }
  })

  animationFrameId = requestAnimationFrame(draw)
}

onMounted(() => {
  checkMobile() // 초기 모바일 체크
  init()
  lastTime = performance.now()
  draw(lastTime)

  window.addEventListener('resize', () => {
    checkMobile() // 리사이즈 시 모바일 체크
    init()
  })
})

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId)
  window.removeEventListener('resize', init)
  offscreenCanvas = null
  offscreenCtx = null
})
</script>
