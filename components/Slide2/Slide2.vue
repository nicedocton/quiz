<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">Choose your current income level</h1>
    </div>
    <div class="flex flex-col">
      <nuxt-link v-for="variant in variants" to="/slides/3" @click="setSlide(3)" :class="`flex__block`" :key="variant.id" >
        <div class="flex__block-text">{{ variant.text }}</div>
        <div class="flex__block-img">
          <img
              :src="`/images/slides/slide2/${variant.id}.svg`"
              alt=""
          />
        </div>
      </nuxt-link>
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

const variants:object = [
  {
    id: 1,
    text: "Low",
  },
  {
    id: 2,
    text: "Middle",
  },
  {
    id: 3,
    text: "High",
  }
];

onMounted(() => {
  slide.setSlide(2);
})

const setSlide = (index: number) => {
  slide.setSlide(index);
  console.log(slide.activeSlide)
}

onMounted(() => {
  age.loadAge();
  gender.loadGender();
})

</script>
