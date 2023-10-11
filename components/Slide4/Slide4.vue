<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">{{ $t('slide4.title') }}</h1>
    </div>
    <div class="grid">
      <LocLink v-for="(variant, index) in 2" to="/slides/5" @click="setSlide(5)" :class="`grid__block`" :key="index" >
        <div class="grid__block-img">
          <img
              :src="`/images/slides/slide4/${index + 1}.png`"
              alt=""
          />
        </div>
        <div class="grid__block-text">{{ $t(`slide4.variant${index + 1}`) }}</div>
      </LocLink>
      <nuxt-link to="/slides/5" @click="setSlide(5)" :class="`flex__block`">
        <div class="flex__block-text">{{ $t(`slide4.variant3`) }}</div>
        <div class="flex__block-img">
          <img
              :src="`/images/slides/slide4/3.png`"
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

onMounted(() => {
  age.loadAge();
  gender.loadGender();
  slide.setSlide(4);
})

const setSlide = (index: number) => {
  slide.setSlide(index);
}

</script>

<style lang="scss" scoped>
  .grid {
    &__block {
      grid-column: span 1/span 1;
      justify-content: center;
      padding: 2rem 0.5rem;
      align-items: center;
      &-img {
        width: 60px;
        height: 60px;
      }
      &-text {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 700;
        margin-top: 0.75rem;
      }
    }
  }
  .flex {
    &__block {
      margin-top: 0;
      grid-column: span 2/span 2;
      &-img {
        width: 2.25rem;
        height: 2.25rem;
      }
    }
  }
</style>
