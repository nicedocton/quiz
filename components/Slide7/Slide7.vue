<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">How frequently do you buy stuff with a credit card?</h1>
    </div>
    <div class="flex flex-col">
      <nuxt-link v-for="variant in variants" to="/slides/8" @click="setSlide(8)" :class="`flex__block`" :key="variant.id" >
        <div class="flex__block-text">{{ variant.text }}</div>
        <div class="flex__block-img">
          <img
              :src="`/images/slides/slide7/${variant.id}.png`"
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
    text: "Mortgage",
  },
  {
    id: 2,
    text: "Auto loan",
  },
  {
    id: 3,
    text: "Student loan",
  },
  {
    id: 4,
    text: "Credit card debt",
  },
  {
    id: 5,
    text: "I don't have any debts",
  }
];

onMounted(() => {
  slide.setSlide(7);
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
.flex {
  &__block {
    padding: 0 1.25rem;
    &-img {
      width: 94px;
      height: 94px;
    }
  }
}
</style>
