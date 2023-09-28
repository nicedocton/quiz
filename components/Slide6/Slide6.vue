<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">How frequently do you buy stuff with a credit card?</h1>
    </div>
    <div class="grid">
      <nuxt-link v-for="variant in variants" to="/slides/7" @click="setSlide(7)" :class="`grid__block`" :key="variant.id" >
        <div class="grid__block-text">{{ variant.text }}</div>
      </nuxt-link>
    </div>
    <div class="h300">
      <div class="grid__img">
        <img :src="`/images/slides/slide6/${gender.gender}/${age.activeAge}.png`" alt="" />
      </div>
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
    text: "Every day",
  },
  {
    id: 2,
    text: "Once a week",
  },
  {
    id: 3,
    text: "1-4 times a month",
  },
  {
    id: 4,
    text: "I do not have a credit card",
  }
];

onMounted(() => {
  slide.setSlide(6);
})

const setSlide = (index: number) => {
  slide.setSlide(index);
}

onMounted(() => {
  age.loadAge();
  gender.loadGender();
})

</script>

<style lang="scss" scoped>
.grid {
  &__block {
    padding: 1.25rem;
  }
}
.h300 {
  height: 300px;
  margin-top: 1.25rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
