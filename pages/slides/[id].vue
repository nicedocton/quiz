<template>
  <div>
    <Slides />
  </div>
</template>

<script setup lang="ts">
import {useSlidesStore} from "~/stores/slides";
const slide = useSlidesStore();

definePageMeta({
  layout: 'common',
  validate: async (route) => {
    const slides= useSlidesStore();
    return slides.slidesList.some((slide) => slide.id === Number(route.params.id));
  }
})

onMounted(() => {
  slide.loadSlide();
  if(slide.activeSlide === 0) {
    slide.setSlide(1);
  }
})



</script>

<style scoped>
</style>
