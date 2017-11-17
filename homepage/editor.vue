<template>
  <div class="editor">
    <div class="qrcode-con">
      <img :src="url" />
    </div>
    <div style="margin-top: 30px;" class="form-group">
      <input class="form-control" :placeholder="placeHolderText" v-model="text" type="text" />
    </div>
  </div>
</template>
<script>
const QRCode = require('qrcode');

const pkg = require('../package');

const getUrlParams = name => {
  var results = new RegExp(`[\\?&]${name}=([^&#]*)`).exec(location.href);
  return results ? results[1] : null;
};

const query = getUrlParams('url');

const defaultUrl = query ? decodeURIComponent(getUrlParams('url')) : location.href;

export default {
  name: 'editor',
  data() {
    return {
      text: defaultUrl,
      url: defaultUrl,
      placeHolderText: 'please input to generate qrcode'
    };
  },

  beforeMount() {
    QRCode.toDataURL(this.text, (err, url) => {
      this.url = url;
    });
  },
  watch: {
    text : function (val) {
      this.refleshQRCode(val);
    }
  },
  methods: {
    refleshQRCode(text) {
      QRCode.toDataURL(text, (err, url) => {
        this.url = url;
        history.pushState({}, document.title, `?url=${encodeURIComponent(this.text)}`);
      });
    }
  }
};
</script>
<style lang="less">
.qrcode-con {
  text-align: center;
  margin-top: 100px;
  img {
    min-height: 200px;
    max-height: 500px;
  }
}
</style>
