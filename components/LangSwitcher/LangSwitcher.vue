<script setup lang="ts">
import { LocaleObject } from "@nuxtjs/i18n/dist/runtime/composables"
const { locale, locales } = useI18n()
const supportedLocales = locales.value as Array<LocaleObject>

const router = useRouter()
const switchLocalePath = useSwitchLocalePath()

function onLocaleChanged(value:string) {
  router.push({ path: switchLocalePath(value) })
}
</script>

<template>
  <div class="lang">
<!--    <select :value="locale" @change="onLocaleChanged">-->
<!--      <option v-for="loc in supportedLocales" :key="loc.code" :value="loc.code">-->
<!--        {{ loc.name }}-->
<!--      </option>-->
<!--    </select>-->
    <SelectItem :list="supportedLocales" :value="locale" @on:change="onLocaleChanged" />
  </div>
</template>


<style lang="scss" scoped>
.lang {
  position: absolute;
  top: 25px;
  right: 10px;
  display: flex;
  gap: 0;
  select {
    font-size: 12px;
    line-height: 1.2;
    font-weight: 400;
    color: var(--text-main);
  }
}
</style>