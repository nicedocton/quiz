<template>
  <div class="btn__select" ref="selectMenu" :class="isOpen ? '_active' : ''">
    <div class="btn__select-selected" @click="isOpen = !isOpen">
      <span>
        <slot name="selected" :selected="selected">
          <img :src="`/images/flags/${value}.png`" alt="" />
        </slot>
      </span>
      <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          class="icon"
          :style="isOpen ? {transform: 'rotate3d(1, 0, 0, 180deg)'} : ''"
      >
        <path
            d="M10.667 12.9167L15.3337 8.16675C15.667 7.83341 15.667 7.33341 15.3337 7.00008C15.0003 6.66675 14.5003 6.66675 14.167 7.00008L10.0003 11.0834L5.83366 7.00008C5.50033 6.66675 5.00033 6.66675 4.66699 7.00008C4.50033 7.16675 4.41699 7.33342 4.41699 7.58342C4.41699 7.83342 4.50033 8.00008 4.66699 8.16675L9.33366 12.9167C9.75033 13.2501 10.2503 13.2501 10.667 12.9167C10.5837 12.9167 10.5837 12.9167 10.667 12.9167Z"
        />
      </svg>
    </div>
    <ul v-show="isOpen">
      <slot name="list" v-bind="{ selectValue }">
        <li v-for="(item, index) in list" :key="index" @click="selectValue(item)">
          <slot name="listItem" v-bind="{ item, index }">
            <img :src="`/images/flags/${item.code}.png`" alt="" />
            {{ item.name }}
          </slot>
        </li>
      </slot>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  list: {
    type: [Array, Object],
    required: true
  },
  value: {
    type: String,
    default: ''
  }
})
const selectMenu = ref();
const isOpen = ref(false);
const selected = ref('');
const emit = defineEmits(['on:change']);

watch(
  () => props.value,
  (value) => {
    selected.value = value
  }
)

onMounted(() => {
  selected.value = props.value
  document.addEventListener('click', clickOutSide)
})

onBeforeUnmount(() => {
  document?.removeEventListener('click', clickOutSide)
})

function clickOutSide (event: any) {
  const menu = selectMenu.value
  const clickInside = menu?.contains(event.target)
  if (!clickInside) {
    isOpen.value = false
  }
}

function selectValue (item: any) {
  if (item.value) {
    if (selected.value !== item.value) {
      selected.value = item
      emit('on:change', item.code)
    }
  } else {
    emit('on:change', item.code)
  }

  isOpen.value = !isOpen.value
}



</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/selectMenu";
</style>