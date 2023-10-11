<template>
  <div class="gender">
    <div class="title">
      <h1 class="h1">{{ $t('mainPage.title') }}</h1>
      <p>{{ $t('mainPage.subtitle') }}</p>
    </div>
    <div class="grid">
      <LocLink to="/age-picker" @click="setMan" class="grid__item _male">
        <div class="grid__item-img"></div>
        <button class="btn">
          <span>{{ $t('gender.male') }}</span>
          <i class="caret"></i>
        </button>
      </LocLink>
      <LocLink to="/age-picker" @click="setWoman" class="grid__item _female">
        <div class="grid__item-img"></div>
        <button class="btn">
          <span>{{ $t('gender.female') }}</span>
          <i class="caret"></i>
        </button>
      </LocLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useGendersStore} from "~/stores/genders";
const localePath = useLocalePath();
const gender = useGendersStore();

const setMan = () => {
  gender.setMan()
}

const setWoman = () => {
  gender.setWoman()
}

</script>

<style scoped lang="scss">
@import "@/assets/styles/components/gender";
</style>
