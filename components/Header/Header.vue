<template>
  <div class="header">
    <div class="header__back" v-if="slide.activeSlide >= 1">
      <div @click="prevPage()">
        <img src="@/assets/images/arrow-left.svg" alt="Back" />
      </div>
    </div>
    <LocLink to="/" @click="slide.setSlide(0)" class="logo">Exnova<span>Academy</span></LocLink>
    <div class="header__pagination" v-if="slide.activeSlide >= 1">
      <span>{{ slide.activeSlide }}</span> / 10
    </div>
  </div>
</template>

<script setup lang="ts">
import {useSlidesStore} from "~/stores/slides";

const localePath = useLocalePath();
const router = useRouter();
const slide = useSlidesStore();

onMounted(() => {
  slide.loadSlide();
})

const prevPage = () => {
  console.log(localePath('/slides/')+slide.activeSlide)
  if(slide.activeSlide === 1) {
    router.push(`${localePath('/age-picker/')}`);
    slide.setSlide(0)
  } else {
    router.back();
  }
}

</script>

<style scoped lang="scss">
@import "@/assets/styles/components/header";
</style>
