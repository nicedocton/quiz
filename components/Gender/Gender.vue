<template>
  <div class="gender">
    <div class="title">
      <h1 class="h1">Let's Create Your Wealth Growth Plan</h1>
      <p>Select your gender:</p>
    </div>
    <div class="grid">
      <nuxt-link to="/age-picker" @click="setMan" class="grid__item _male">
        <div class="grid__item-img"></div>
        <button>
          <span>Male</span>
          <i class="caret"></i>
        </button>
      </nuxt-link>
      <nuxt-link to="/age-picker" @click="setWoman" class="grid__item _female">
        <div class="grid__item-img"></div>
        <button>
          <span>Female</span>
          <i class="caret"></i>
        </button>
      </nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useGendersStore} from "~/stores/genders";
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
