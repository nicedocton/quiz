<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">{{ $t('slide10.title') }}</h1>
    </div>
    <div class="flex flex-col">
      <LocLink v-for="(variant, index) in 3" to="/final" @click="setType(index + 1)" :class="`flex__block`" :key="index" >
        <div class="flex__block-text">{{ $t(`slide10.variant${index + 1}`) }}</div>
      </LocLink>
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
  console.log(trade.tradeType)
}

onMounted(() => {
  slide.setSlide(10);
  age.loadAge();
  gender.loadGender();
})

</script>
