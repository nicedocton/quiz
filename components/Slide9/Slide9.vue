<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">{{ $t('slide9.title') }}</h1>
      <p>{{ $t('slide9.subtitle') }}</p>
    </div>
    <div class="flex flex-col">
      <LocLink v-for="(variant, index) in 5" to="/slides/10" @click="setSlide(10)" :class="`flex__block`" :key="index" >
        <div class="flex__block-text">{{ $t(`slide9.variant${index + 1}`) }}</div>
        <div class="flex__block-img">
          <img
              :src="`/images/slides/slide9/${gender.gender}/${index + 1}.png`"
              alt=""
          />
        </div>
      </LocLink>
      <LocLink to="/slides/10" @click="setSlide(10)" :class="`flex__block`" >
        <div class="flex__block-text">{{ $t('slide9.variant6') }}</div>
        <div class="flex__block-img">
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
