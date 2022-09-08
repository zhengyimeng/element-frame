<template>
  <div>
    <div class="box">box</div>
    <el-button type="primary">primary</el-button>
  </div>
</template>

<style lang="scss">
.box {
  border: $border-width solid;
  background-color: $my-primary;
  @include width(10px, $sm: 100px, $md: 200px, $lg: 300px, $xl: 400px);
  @include media("sm-and-down") {
    background-color: $my-error;
  }
  @include media("lg") {
    background-color: $my-success;
  }
}
</style>
