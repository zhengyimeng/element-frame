<script lang="ts" setup>
import { STORAGE_KEY } from "@/assets/js/consts";

const [theme, toogleTheme] = useTheme();

const t = window.localStorage.getItem(STORAGE_KEY.theme) || "";
toogleTheme(t);

watch(
  theme,
  (t) => {
    (document.querySelector("html") as HTMLElement).classList.value = t;
  },
  { immediate: true }
);
</script>

<template>
  <slot />
</template>
