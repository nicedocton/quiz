<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">Annual income level you want to have</h1>
    </div>
    <div class="flex flex-col">
      <nuxt-link v-for="variant in variants" to="/slides/4" @click="setSlide(4)" :class="`flex__block`" :key="variant.id" >
        <div class="flex__block-text">{{ variant.text }}</div>
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
    text: "$50,000 - $100,000",
  },
  {
    id: 2,
    text: "$100,000 - $250,000",
  },
  {
    id: 3,
    text: "More than $250,000",
  }
];

const setSlide = (index: number) => {
  slide.setSlide(index);
}

onMounted(() => {
  age.loadAge();
  gender.loadGender();
  slide.setSlide(3);
})

</script>
