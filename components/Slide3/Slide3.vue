<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">{{ $t(`slide3.title`) }}</h1>
    </div>
    <div class="flex flex-col">
      <LocLink v-for="(variant, index) in 3" to="/slides/4" @click="setSlide(4)" :class="`flex__block`" :key="index" >
        <div class="flex__block-text">{{ $t(`slide3.variant${index + 1}`) }}</div>
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

const setSlide = (index: number) => {
  slide.setSlide(index);
}

onMounted(() => {
  age.loadAge();
  gender.loadGender();
  slide.setSlide(3);
})

</script>
