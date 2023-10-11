<template>
  <Final />
</template>

<script setup lang="ts">
import {useGendersStore} from "~/stores/genders";

const gender = useGendersStore();
const route = useRouter();

definePageMeta({
  layout: 'final',
})

onMounted(() => {
  const route = useRouter();
  if(gender.gender === '') {
    route.push('/')
  }
})

</script>

<style scoped lang="scss">
</style>

