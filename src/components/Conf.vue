<template>
  <section class="conf">
    <div class="title">
      <i class="title__icon"></i>
      <h1 class="title__wording">{{$t('confTitle')}}</h1>
    </div>

    <div class="paragraph">
      <p>{{$t('confDescription')}}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'conf'
}
</script>

<style scoped lang="scss">
$font-family: 'Open+Sans', Microsoft JhengHei, 'Lato', sans-serif, Helvetica, Arial;

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

  &:hover {
    background: #50E3C2;
  }

  &:active {
    position: relative; 
    top: 1px;
  }

  &__text {
    display: block;
    font-family: $font-family;
    font-size: 16px;
    text-align: center;
    line-height: 50px;
    color: #50E3C2;
    letter-spacing: 2.22px;
  }

  &__text:hover {
    color: #FFF;
  }
}

.text-center {
  text-align: center;
}
</style>
