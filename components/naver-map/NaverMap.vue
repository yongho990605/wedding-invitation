<template>
  <div class="relative z-0 w-full">
    <div ref="mapRef" class="h-[20rem] overflow-hidden rounded-[0.5rem]" />
    <Button
      :class="cn('absolute left-2 top-2 border', isMapControlEnabled ? 'bg-white' : 'bg-slate-300')"
      @click="toggleMapControl">
      <Icon :name="isMapControlEnabled ? 'heroicons:lock-open' : 'heroicons:lock-closed'" />
    </Button>
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils'

const mapRef = ref<HTMLElement | null>(null)
const map = ref<any>(null)
const isMapControlEnabled = ref(false)
const weddingHoleLatLng = { lat: 35.1484573066235, lng: 126.837917039111 }

// 지도 초기화 함수
const initMap = () => {
  if (!mapRef.value || !window.naver) return

  const mapOptions = {
    center: new window.naver.maps.LatLng(weddingHoleLatLng.lat, weddingHoleLatLng.lng),
    zoom: 15,
    zoomControl: false, // 기본적으로 줌 컨트롤 비활성화
    draggable: false, // 기본적으로 드래그 비활성화
    scrollWheel: false, // 기본적으로 스크롤 줌 비활성화
    pinchZoom: false, // 기본적으로 핀치 줌 비활성화
    zoomControlOptions: {
      position: window.naver.maps.Position.TOP_RIGHT
    }
  }

  map.value = new window.naver.maps.Map(mapRef.value, mapOptions)

  // 마커 추가
  // eslint-disable-next-line no-new
  new window.naver.maps.Marker({
    position: new window.naver.maps.LatLng(weddingHoleLatLng.lat, weddingHoleLatLng.lng),
    map: map.value
  })
}

// 지도 컨트롤 토글 함수
const toggleMapControl = () => {
  if (!map.value) return

  isMapControlEnabled.value = !isMapControlEnabled.value

  map.value.setOptions({
    draggable: isMapControlEnabled.value,
    scrollWheel: isMapControlEnabled.value,
    pinchZoom: isMapControlEnabled.value,
    zoomControl: isMapControlEnabled.value
  })
}

// window.naver 객체가 로드된 후 지도 초기화
onMounted(() => {
  const checkNaverMapLoaded = setInterval(() => {
    if (window.naver?.maps) {
      initMap()
      clearInterval(checkNaverMapLoaded)
    }
  }, 200)
})
</script>

<script lang="ts">
declare global {
  interface Window {
    naver: any
  }
}
</script>
