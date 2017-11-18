<template>
  <div class="page">
    <slot></slot>
    <footer>
      &copy;&nbsp;<a href="//github.com/iscanner">iscanner</a> {{ currentYear }}
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
      currentYear: new Date().getFullYear(),
      version: pkg.version
    };
  }
};
</script>
<style lang="less">
footer {
  width: 550px;
  margin: 10px;
  position: fixed;
  bottom: 0;
  text-align: center;
}
@media only screen and (max-width: 500px) {
  footer {
    width: 100%;
  }
}

</style>
