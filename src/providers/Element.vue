<script lang="ts" setup>
// https://element-plus.gitee.io/zh-CN/guide/i18n.html
import zh from "element-plus/lib/locale/lang/zh-cn";
import en from "element-plus/lib/locale/lang/en";

const [l] = useLocale();
const locale = computed(() => (l.value === "zh" ? zh : en));
</script>

<template>
  <el-config-provider :locale="locale" :button="{ autoInsertSpace: false }">
    <slot />
  </el-config-provider>
</template>
