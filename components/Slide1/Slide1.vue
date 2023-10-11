<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">{{ $t('slide1.title') }}</h1>
    </div>
    <div class="grid gap-2">
      <LocLink v-for="(variant, index) in 4" to="/slides/2" @click="setSlide(2)" :class="`grid__block`" :key="index">
        <div class="grid__block-text">{{ $t(`slide1.variant${index + 1}`) }}</div>
        <div :class="`grid__block-img _${age.activeAge}`">
          <img
              :src="`/images/slides/slide1/${gender.gender}/${age.activeAge}/${index+1}.png`"
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

const setSlide = (index: number) => {
  slide.setSlide(index);
}

onMounted(() => {
  age.loadAge();
  gender.loadGender();
  slide.setSlide(1);
})

</script>
