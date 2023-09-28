<template>
  <div class="slides">
    <div class="slides__top">
      <img src="@/assets/images/progress-divider.svg" class="slides__top-before" width="8" height="6" alt="" />
      <span :style="`width: calc(100 / 10 *` +  slide.activeSlide + `%`"></span>
      <img src="@/assets/images/progress-divider.svg" class="slides__top-after" width="8" height="6" alt="" />
    </div>
    <div class="slides__bottom">
      <Slide1 v-if="slide.activeSlide === 1" />
      <Slide2 v-if="slide.activeSlide === 2" />
      <Slide3 v-if="slide.activeSlide === 3" />
      <Slide4 v-if="slide.activeSlide === 4" />
      <Slide5 v-if="slide.activeSlide === 5" />
      <Slide6 v-if="slide.activeSlide === 6" />
      <Slide7 v-if="slide.activeSlide === 7" />
      <Slide8 v-if="slide.activeSlide === 8" />
      <Slide9 v-if="slide.activeSlide === 9" />
      <Slide10 v-if="slide.activeSlide === 10" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useSlidesStore} from "~/stores/slides";
const slide = useSlidesStore();
</script>

<style lang="scss">
@import "@/assets/styles/components/slides";
</style>
