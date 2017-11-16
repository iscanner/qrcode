<template>
  <div class="page">
    <slot></slot>
    <footer class="text-center">
      &copy;&nbsp;<a href="//github.com/xudafeng">xdf</a> {{ currentYear }}
    </footer>
  </div>
</template>
<script>
export default {
  name: 'custom-layout',
  data() {
    return {
      currentYear: new Date().getFullYear()
    };
  }
};
</script>
<style lang="less">
footer {
  margin: 10px;
}
</style>
