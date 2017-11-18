<template>
  <custom-layout>
    <editor></editor>
  </custom-layout>
</template>
<script>
import Layout from './layout.vue';
import Editor from './editor.vue';

export default {
  name: 'app',
  components: {
    'custom-layout': Layout,
    editor: Editor
  }
};
</script>
<style lang="less">
.page {
  width: 550px;
  margin: 0 auto;
  padding-top: 30px;
  color: #444;
}
@media only screen and (max-width: 500px) {
  .page {
    width: 100%;
    padding: 0 8px;
  }
}
</style>
