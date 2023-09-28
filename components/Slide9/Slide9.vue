<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">Is there something special you want to accumulate money for?</h1>
      <p>You're more likely to reach your goal if you have something important to aim for</p>
    </div>
    <div class="flex flex-col">
      <nuxt-link v-for="variant in variants" to="/slides/10" @click="setSlide(10)" :class="`flex__block`" :key="variant.id" >
        <div class="flex__block-text">{{ variant.text }}</div>
        <div class="flex__block-img">
          <img
              :src="`/images/slides/slide9/${gender.gender}/${variant.id}.png`"
              alt=""
          />
        </div>
      </nuxt-link>
      <nuxt-link to="/slides/10" @click="setSlide(10)" :class="`flex__block`" >
        <div class="flex__block-text">Other</div>
        <div class="flex__block-img">
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

interface Variant {
  id: number;
  text: string;
}

const variants = ref<Variant[]>([
  {
    id: 1,
    text: "Buy a house",
  },
  {
    id: 2,
    text: "Wedding",
  },
  {
    id: 3,
    text: "Vacation",
  },
  {
    id: 4,
    text: "Buy a car",
  },
  {
    id: 5,
    text: "Retirement",
  }
]);

const setSlide = (index: number) => {
  slide.setSlide(index);
}

onMounted(() => {
  slide.setSlide(9);
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
