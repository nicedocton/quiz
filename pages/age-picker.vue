<template>
  <AgePicker />
</template>

<script setup lang="ts">
import {useGendersStore} from "~/stores/genders";

const gender = useGendersStore();
const route = useRouter();

onMounted(() => {
  const route = useRouter();
  if(gender.gender === '') {
    route.push('/')
  }
})
</script>

<style scoped lang="scss">
</style>
