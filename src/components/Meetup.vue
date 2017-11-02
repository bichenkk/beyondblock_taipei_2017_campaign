<template>
  <section class="meetup">
    <div class="title">
      <i class="title__icon"></i>
      <h1 class="title__wording">{{$t('meetupTitle')}}</h1>
    </div>

    <div class="paragraph">
      <p>{{$t('meetupDescription')}}</p>
    </div>

    <div class="title">
      <i class="title__icon"></i>
      <h1 class="title__wording">{{$t('newsTitle')}}</h1>
    </div>

    <div class="paragraph">
      <p class="text-center">{{$t('newsDescription')}}</p>
    </div>

    <a class="more" href="https://www.facebook.com/eth.taipei" target="_blank">
      <span class="more__text">{{$t('moreBtn')}}</span>
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
