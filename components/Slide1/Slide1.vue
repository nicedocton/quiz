<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">Choose your current income level</h1>
    </div>
    <div class="grid gap-2">
      <nuxt-link v-for="variant in variants" to="/slides/2" @click="setSlide(2)" :class="`grid__block`" :key="variant.id" >
        <div class="grid__block-text">{{ variant.text }}</div>
        <div :class="`grid__block-img _${age.activeAge}`">
          <img
              :src="`/images/slides/slide1/${gender.gender}/${age.activeAge}/${variant.id}.png`"
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
    text: "Grow wealth",
  },
  {
    id: 2,
    text: "Passive income",
  },
  {
    id: 3,
    text: "Financial independence",
  },
  {
    id: 4,
    text: "Other",
  }
];

const setSlide = (index: number) => {
  slide.setSlide(index);
}

onMounted(() => {
  age.loadAge();
  gender.loadGender();
  onMounted(() => {
    slide.setSlide(1);
  })
})

</script>
