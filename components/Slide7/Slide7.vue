<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">{{$t('slide7.title') }}</h1>
      <p>{{ $t('slide7.subtitle') }}</p>
    </div>
    <div class="flex flex-col">
      <LocLink v-for="(variant, index) in 5" to="/slides/8" @click="setSlide(8)" :class="`flex__block`" :key="index" >
        <div class="flex__block-text">{{ $t(`slide7.variant${index + 1}`) }}</div>
        <div class="flex__block-img">
          <img
              :src="`/images/slides/slide7/${index + 1}.png`"
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

onMounted(() => {
  age.loadAge();
  gender.loadGender();
  slide.setSlide(7);
})

const setSlide = (index: number) => {
  slide.setSlide(index);
}

</script>

<style lang="scss" scoped>
.flex {
  &__block {
    padding: 0 1.25rem;
    &-img {
      width: 94px;
      height: 94px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &:last-child {
      .flex__block-img {
        img {
          width: 1.5rem;
        }
      }
    }
  }
}
</style>
