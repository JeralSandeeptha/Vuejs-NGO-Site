<script setup lang="ts">
import { ButtonProps } from '../../types/components.types.ts';

const props = defineProps<ButtonProps>();

</script>

<template>

<button
  v-on:click="props.closeNav"
  class="px-[2rem] py-[0.5rem] rounded cursor-pointer"
  :style="{ color: props.textColor, backgroundColor: props.bgColor }"
>{{ props.text }}</button>

</template>

<style scoped>

</style>