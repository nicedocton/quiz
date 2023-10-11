<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">{{ $t('slide5.title') }}</h1>
    </div>
    <div class="grid">
      <div class="grid__col">
        <div class="grid__col-img">
          <img
              :src="`/images/slides/slide5/${gender.gender}/${age.activeAge}.png`"
              alt=""
          />
        </div>
      </div>
      <div class="grid__col">
        <LocLink v-for="(variant, index) in 4" to="/slides/6" @click="setSlide(6)" :class="`grid__block`" :key="index" >
          <div class="grid__block-text">{{ $t(`slide5.variant${index + 1}`) }}</div>
        </LocLink>
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
  slide.setSlide(5);
})

const setSlide = (index: number) => {
  slide.setSlide(index);
}

</script>

<style lang="scss" scoped>
.grid {
  &__block {
    padding: 1.25rem;
    margin-top: 1rem;
    &:first-child {
      margin-top: 0;
    }
  }
  &__col {
    &-img {
      height: 100%;
      position: relative;
      &:after {
        display: block;
        content: "";
        height: 20%;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(to bottom,transparent, #fff, #fff);
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
}
</style>
