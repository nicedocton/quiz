<template>
  <Gender />
</template>
<script setup lang="ts">
import {useSlidesStore} from "~/stores/slides";
import {useUrlParamsStore} from "~/stores/urlParams";
const slide = useSlidesStore();
const paramsStore = useUrlParamsStore();

const getUrlParams = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  if (urlParams.has("aff")) {
    const affValue = urlParams.get("aff");
    if(affValue != null) {
      paramsStore.setAff(affValue.toString());
    }
  }
  if (urlParams.has("afftrack")) {
    const affTrackValue = urlParams.get("afftrack");
    if(affTrackValue != null) {
      paramsStore.setAffTrack(affTrackValue.toString());
    }
  }
}

onMounted(() => {
  slide.setSlide(0);
  getUrlParams()
})
</script>

<style lang="scss">
</style>
