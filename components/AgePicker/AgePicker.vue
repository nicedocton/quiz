<template>
  <div class="age-picker">
    <div class="title">
      <h1 class="h2">{{ $t('age.title') }}</h1>
    </div>
    <div class="grid">
      <LocLink v-for="(age, index) in ages" to="/slides/1" @click="setAge(age.age)" :class="`grid__item _${gender.gender}`" :key="age.id" >
        <div :class="`grid__item-img _${age.age}`"></div>
        <button class="btn">
          <span>{{ $t(`age.variant${index + 1}`) }}</span>
          <i class="caret"></i>
        </button>
      </LocLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useGendersStore} from "~/stores/genders"
import {useAgesStore} from "~/stores/ages";
import {useSlidesStore} from "~/stores/slides";

const gender = useGendersStore();
const age = useAgesStore();
const slide = useSlidesStore();

onMounted(() => {
  gender.loadGender();
})

const setAge = (period: number) => {
  age.setAge(period);
  slide.setSlide(1);
}
interface AgesType {
  id: number;
  age: number;
  text: string;
}

const ages = ref<AgesType[]>([
  {
    id: 1,
    age: 18,
    text: "18-25"
  },
  {
    id: 2,
    age: 25,
    text: "26-35"
  },
  {
    id: 3,
    age: 35,
    text: "36-45"
  },
  {
    id: 4,
    age: 45,
    text: "46+"
  }
])
</script>

<style scoped lang="scss">
@import "@/assets/styles/components/age-picker";
</style>
