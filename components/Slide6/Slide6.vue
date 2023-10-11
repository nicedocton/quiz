<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">{{ $t('slide6.title') }}</h1>
    </div>
    <div class="grid">
      <LocLink v-for="(variant, index) in 4" to="/slides/7" @click="setSlide(7)" :class="`grid__block`" :key="index" >
        <div class="grid__block-text">{{ $t(`slide6.variant${index + 1}`) }}</div>
      </LocLink>
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

onMounted(() => {
  age.loadAge();
  gender.loadGender();
  slide.setSlide(6);
})

const setSlide = (index: number) => {
  slide.setSlide(index);
}
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
