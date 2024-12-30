<template>
  <div ref="mapRef" class="w-full overflow-hidden rounded-[0.5rem]" />
</template>

<script setup lang="ts">
const mapRef = ref<HTMLElement | null>(null)
const map = ref<any>(null)
const weddingHoleLatLng = { lat: 35.1484573066235, lng: 126.837917039111 }

// 지도 초기화 함수
const initMap = () => {
  if (!mapRef.value || !window.naver) return

  const mapOptions = {
    center: new window.naver.maps.LatLng(weddingHoleLatLng.lat, weddingHoleLatLng.lng),
    zoom: 15,
    zoomControl: true,
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
