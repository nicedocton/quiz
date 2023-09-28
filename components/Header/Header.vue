<template>
  <div class="header">
    <div class="header__back" v-if="slide.activeSlide >= 1">
      <div @click="prevPage()">
        <img src="@/assets/images/arrow-left.svg" alt="Back" />
      </div>
    </div>
    <div class="logo">Exnova<span>Academy</span></div>
    <div class="header__pagination" v-if="slide.activeSlide >= 1">
      <span>{{ slide.activeSlide }}</span> / 10
    </div>
  </div>
</template>

<script setup lang="ts">
import {useSlidesStore} from "~/stores/slides";

const router = useRouter();
const slide = useSlidesStore();

const prevPage = () => {
  if(slide.activeSlide === 1) {
    slide.setSlide(0)
    router.back();
  } else {
    slide.setSlide(slide.activeSlide - 1)
  }
}

</script>

<style scoped lang="scss">
@import "@/assets/styles/components/header";
</style>
