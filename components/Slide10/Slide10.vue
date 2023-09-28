<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">How do you want to trade?</h1>
    </div>
    <div class="flex flex-col">
      <nuxt-link v-for="variant in variants" to="/final" @click="setType(variant.id)" :class="`flex__block`" :key="variant.id" >
        <div class="flex__block-text">{{ variant.text }}</div>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useAgesStore} from "~/stores/ages";
import {useSlidesStore} from "~/stores/slides";
import {useGendersStore} from "~/stores/genders";
import {useTradesStore} from "~/stores/trades";

const age = useAgesStore();
const slide = useSlidesStore();
const gender = useGendersStore();
const trade = useTradesStore();

const variants:object = [
  {
    id: 1,
    text: "Use signals",
  },
  {
    id: 2,
    text: "With the help of a robot",
  },
  {
    id: 3,
    text: "Using Strategies",
  }
];

const setType = (id:number) => {
  if(id === 1) {
    trade.setSignal();
  }
  else if(id === 2) {
    trade.setRobot();
  }
  else if(id === 3) {
    trade.setStrategy();
  }
}

onMounted(() => {
  slide.setSlide(10);
})

onMounted(() => {
  age.loadAge();
  gender.loadGender();
})

</script>
