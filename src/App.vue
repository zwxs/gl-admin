<template>
  <transition name="fade">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {};
</script>

<style lang="css">
.el-tooltip__popper {
  max-width: 50%;
}
</style>