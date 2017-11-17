<template>
  <div class="page">
    <slot></slot>
    <footer class="text-center">
      &copy;&nbsp;<a href="//github.com/icanner">iscanner</a> {{ currentYear }}
    </footer>
    <Ribbon
      v-bind="ribbon"
    ></Ribbon>
  </div>
</template>
<script>
const pkg = require('../package');

export default {
  name: 'custom-layout',
  data() {
    return {
      ribbon: {
        text: 'Fork me on GitHub',
        linkUrl: pkg.repository.url,
        fixed: true,
        flat: true,
        classPrefix: pkg.name
      },
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
