<template>
  <section class="banner">
    <agile class="banner__mask"
      :dots="false" :mobileFirst="true"
      :arrows="false" :speed="750"
      :timing="'linear'" :fade="true"
      :autoplay="true" :pauseOnHover="false">
      <div class="slide slide--1"></div>
      <div class="slide slide--2"></div>
      <div class="slide slide--3"></div>
    </agile>

    <h1 class="banner__title">Taipei Ethereum Meetup</h1>
    <h3 class="banner__date">Oct. 27</h3>
    <div class="banner__participate">
      <a class="banner__btn"><span>由此購票</span></a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped lang="scss">
$font-family: 'Open+Sans', 'Lato', sans-serif, Helvetica, Arial;

.banner {
  background: #9B9B9B;

  &__mask:after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: 0;
    content: '';
    background: linear-gradient(to right top, rgba(132, 233, 167, 0.8), rgba(147, 210, 240, 0.7));
  }
  
  &__title {
    text-align: center;
    width: 100%;
    font-family: $font-family;
    font-size: 64px;
    color: #FFF;
    left: 50%;
    margin: 0;
    position: absolute;
    top: 195px;
    transform: translate(-50%, -50%);
  }

  &__date {
    text-align: center;
    opacity: 0.8;
    font-family: $font-family;
    font-size: 48px;
    color: #FFF;
    left: 50%;
    margin: 0;
    position: absolute;
    top: 289px;
    transform: translate(-50%, -50%);
  }

  &__participate {
    cursor: pointer;
    height: 50px;
    width: 166px;
    left: 50%;
    margin: 0;
    position: absolute;
    top: 420px;
    transform: translate(-50%, -50%);

    a {
      display: block;
      background: #50E3C2;
      box-shadow: 0 2px 4px 0 rgba(22,101,69,0.50);
      border-radius: 100px;
    }

    a:active {
      position: relative;
      top: 1px;
    }

    span {
      display: block;
      line-height: 50px;
      text-align: center;
      font-family: $font-family;
      font-size: 16px;
      color: #FFF;
      letter-spacing: 2.22px;
    }
  }
}

.slide {
  background: {
    position: center;
    size: cover;
  }
  height: 557px;
  &--1 {
    background-image: url(../assets/banner1.png);
  }
  &--2 {
    background-image: url(../assets/banner2.png);
  }
  &--3 {
    background-image: url(../assets/banner3.png);
  }
}

@media only screen and (max-width: 767px) {
  .banner__title {
    width: 486px;
    top: 158px;
  }

  .banner__date {
    width: 486px;
    top: 315px;
  }

  .banner__participate {
    top: 444px;
  }
}

@media only screen and (max-width: 575px) {
  .banner__title {
    top: 230px;
    width: 274px;
    font-size: 36px;
  }

  .banner__date {
    top: 300px;
    width: 274px;
    font-size: 24px;
  }
  
  .banner__participate {
    top: 380px;
  }
}
</style>
