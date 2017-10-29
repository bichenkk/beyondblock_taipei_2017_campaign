<template>
  <section class="meetup">
    <div class="title">
      <i class="title__icon"></i>
      <h1 class="title__wording">關於</h1>
    </div>

    <div class="paragraph">
      <p>專注在 Ethereum 技術理論、實作、與應用的討論社群，目前每月由社群參加者自願分享。 Ethereum 是具有智慧契約功能的區塊鏈平台。</p>
    </div>

    <div class="title">
      <i class="title__icon"></i>
      <h1 class="title__wording">最新消息</h1>
    </div>

    <div class="paragraph">
      <p class="text-center">請關注社團，隨時得知最新消息</p>
    </div>

    <a class="more" href="https://www.facebook.com/eth.taipei" target="_blank">
      <span class="more__text">更多</span>
    </a>
  </section>
</template>

<script>
export default {
  name: 'meetup'
}
</script>

<style scoped lang="scss">
$font-family: 'Open+Sans', 'Lato', sans-serif, Helvetica, Arial;

.more {
  text-decoration: none;
  cursor: pointer;
  margin: 0 auto;
  margin-bottom: 30px;
  display: block;
  width: 166px;
  height: 50px;
  border: 1px solid #50E3C2;
  border-radius: 100px;

  &__text {
    display: block;
    font-family: $font-family;
    font-size: 16px;
    text-align: center;
    line-height: 50px;
    color: #50E3C2;
    letter-spacing: 2.22px;
  }
}

.text-center {
  text-align: center;
}
</style>
