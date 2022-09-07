<script lang="ts" setup>
import { STORAGE_KEY } from "@/assets/js/consts";

const lang = window.localStorage.getItem(STORAGE_KEY.locale);
const [locale, setLocale] = useLocale();
setLocale(lang || locale.value);
</script>

<template>
  <slot />
</template>
