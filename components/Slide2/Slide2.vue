<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">{{ $t('slide2.title') }}</h1>
    </div>
    <div class="flex flex-col">
      <LocLink v-for="(variant, index) in 3" to="/slides/3" @click="setSlide(3)" :class="`flex__block`" :key="index" >
        <div class="flex__block-text">{{ $t(`slide2.variant${index + 1}`) }}</div>
        <div class="flex__block-img">
          <img
              :src="`/images/slides/slide2/${index + 1}.svg`"
              alt=""
          />
        </div>
      </LocLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useAgesStore} from "~/stores/ages";
import {useSlidesStore} from "~/stores/slides";
import {useGendersStore} from "~/stores/genders";

const age = useAgesStore();
const slide = useSlidesStore();
const gender = useGendersStore();

onMounted(() => {
  age.loadAge();
  gender.loadGender();
  slide.setSlide(2);
})

const setSlide = (index: number) => {
  slide.setSlide(index);
  console.log(slide.activeSlide)
}

</script>
