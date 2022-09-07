<script lang="ts" setup>
import ElementProvider from "./Element.vue";
import I18nProvider from "./I18n.vue";
import ThemeProvider from "./Theme.vue";
</script>

<template>
  <I18nProvider>
    <ElementProvider>
      <ThemeProvider>
        <slot />
      </ThemeProvider>
    </ElementProvider>
  </I18nProvider>
</template>
