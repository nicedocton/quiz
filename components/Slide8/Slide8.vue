<template>
  <div class="question">
    <div class="question__title">
      <h1 class="h1">Choose topics you are interested in</h1>
    </div>
    <div class="flex justify-center">
      <button
          @click="toggleActive(variant.id)"
          class="rounded"
          :class="variant.isActive ? '_active' : ''"
          v-for="variant in variants"
          :key="variant.id"
      >
        {{ variant.text }}
      </button>
    </div>
    <div v-if="activeVariants.length" class="btn-wrapper">
      <button class="btn" @click="goToNextSLide(9)">Continue</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {useAgesStore} from "~/stores/ages";
import {useSlidesStore} from "~/stores/slides";
import {useGendersStore} from "~/stores/genders";

const route = useRouter();
const age = useAgesStore();
const slide = useSlidesStore();
const gender = useGendersStore();

interface Variant {
  id: number;
  text: string;
  isActive: boolean;
}

const variants = ref<Variant[]>([
  {
    id: 1,
    text: "Investing",
    isActive: false
  },
  {
    id: 2,
    text: "Stocks",
    isActive: false
  },
  {
    id: 3,
    text: "Crypto",
    isActive: false
  },
  {
    id: 4,
    text: "Debt management",
    isActive: false
  },
  {
    id: 5,
    text: "Business",
    isActive: false
  },
  {
    id: 6,
    text: "Forex trading",
    isActive: false
  },
  {
    id: 7,
    text: "Passive income",
    isActive: false
  },
  {
    id: 8,
    text: "Financial literacy",
    isActive: false
  },
  {
    id: 9,
    text: "Real estate",
    isActive: false
  },
  {
    id: 10,
    text: "Entrepreneurship",
    isActive: false
  }
]);

const setSlide = (index: number) => {
  slide.setSlide(index);
}

const goToNextSLide = (index: number) => {
  slide.setSlide(index);
  route.push("/slides/9");
}

const activeVariants = computed(() => {
  return variants.value.filter((variant) => variant.isActive);
});

const toggleActive = (index: number) => {
  if(variants.value[index - 1].isActive) {
    variants.value[index - 1].isActive = false;
  } else {
    variants.value[index - 1].isActive = true;
  }
};

onMounted(() => {
  slide.setSlide(8);
  age.loadAge();
  gender.loadGender();
})

</script>

<style lang="scss" scoped>
.flex {
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;
}
.question {
  padding-bottom: 110px;
}
</style>
