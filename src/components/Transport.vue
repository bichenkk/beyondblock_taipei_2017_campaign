<template>
  <section class="transport">
    <div class="title">
      <i class="title__icon"></i>
      <h1 class="title__wording">交通資訊</h1>
    </div>

    <div class="iframe-rwd">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.8081211200324!2d121.56483545102182!3d25.040584983890632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abbae36128c7%3A0xcb6539e6686ebbf3!2z6Ie654Gj5b6u6Luf!5e0!3m2!1szh-TW!2stw!4v1509425971416" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>
    </div>
    </section>
</template>

<script>
export default {
  name: 'Transport'
}
</script>

<style scoped>
.iframe-rwd {
    position: relative;
    padding-bottom: 35%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
}
.iframe-rwd iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
@media only screen and (max-width: 767px) {
  .iframe-rwd {
    position: relative;
    padding-bottom: 55%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }
}
@media only screen and (max-width: 575px) {
  .iframe-rwd {
    position: relative;
    padding-bottom: 65%;
    padding-top: 30px;
    height: 0;
    overflow: hidden;
  }
}
</style>
