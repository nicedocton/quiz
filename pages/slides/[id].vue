<template>
  <div>
    <Slides />
  </div>
</template>

<script setup lang="ts">
import {useSlidesStore} from "~/stores/slides";

const slide = useSlidesStore();
const route = useRouter();
const localePath = useLocalePath();

definePageMeta({
  layout: 'common',
  validate: async (route) => {
    const slides = useSlidesStore();
    return slides.slidesList.some((slide) => slide.id === Number(route.params.id));
  },
})

onMounted(() => {
  const url = route.currentRoute.value.fullPath;
  const parts = url.split('/');
  const lastPart = Number(parts[parts.length - 1]);
  if(slide.activeSlide === 0) {
    route.push(`${localePath('/')}`)
  }
  else if(lastPart > 0) {
    slide.setSlide(lastPart);
    route.push(localePath())
  }
})
</script>

<style scoped>
</style>
