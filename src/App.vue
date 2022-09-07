<script setup lang="ts">
import Provider from "./providers/Provider.vue";

const [, toogleTheme] = useTheme();
</script>

<template>
  <Provider>
    <router-view />

    <el-button @click="toogleTheme()">switch theme</el-button>
  </Provider>
</template>
