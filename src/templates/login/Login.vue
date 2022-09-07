<script lang="ts" setup>
const account = ref("");
const password = ref("");
</script>

<template>
  <div class="login-page">
    <el-form class="form">
      <el-input v-model="account" />
      <el-input v-model="password" />
      <el-button type="primary">{{ $t("login") }}</el-button>
    </el-form>
    <HelloWorld></HelloWorld>

    <div class="box">box</div>
  </div>
</template>

<style lang="scss">
.form {
  width: clamp(400px, 40vw, 500px);
}

.box {
  border: $border-width solid;
  background-color: $my-primary;
  @include width(10px, $sm: 20px, $md: 30px, $lg: 50px, $xl: 80px);
  @include media("sm-and-down") {
    background-color: $my-error;
  }
  @extend %flex-center;
}
</style>
