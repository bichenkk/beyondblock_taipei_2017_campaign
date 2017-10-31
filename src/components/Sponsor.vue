<template>
  <section class="sponsor">
    <div class="title">
      <i class="title__icon"></i>
      <h1 class="title__wording">贊助商</h1>
    </div>

    <div class="sponsor__rank">
      <h3>Platinum Sponsors</h3>
    </div>

    <div class="sponsor__box">
      <div class="sponsor__row">
        <div class="sponsor__logo"></div>
        <div class="sponsor__logo"></div>
        <div class="sponsor__logo"></div>
      </div>
    </div>

    <div class="sponsor__rank">
      <h3>Gold Sponsors</h3>
    </div>

    <div class="sponsor__box">
      <div class="sponsor__row">
        <div class="sponsor__logo"></div>
        <div class="sponsor__logo"></div>
        <div class="sponsor__logo"></div>
      </div>
    </div>

    <div class="sponsor__rank">
      <h3>Silver Sponsors</h3>
    </div>

    <div class="sponsor__box">
      <div class="sponsor__row">
        <div class="sponsor__logo"></div>
        <div class="sponsor__logo"></div>
        <div class="sponsor__logo"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'sponsor'
}
</script>

<style scoped lang="scss">
$font-family: 'Open+Sans', 'Lato', sans-serif, Helvetica, Arial;

.sponsor {
  &__rank {
    text-align: center;
  }
  &__rank h3 {
    font-family: $font-family;
    font-size: 24px;
    color: #4A4A4A;
    letter-spacing: 0;
  }
  &__row {
    width: 750px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  &__logo {
    margin: 15px 30px;
    display: inline-block;
    width: 180px;
    height: 135px;
    border: 1px solid #E1DFE2;
    border-radius: 10px;
  }
}

@media only screen and (max-width: 767px) {
  .sponsor {
    &__row {
      width: 610px;
      margin: 0 auto;
      margin-bottom: 40px;
    }
    &__logo {
      display: inline-block;
      margin: 0 auto;
      margin-top: 30px;
      margin-bottom: 30px;
      width: 200px;
      height: 135px;
      border: 1px solid #E1DFE2;
      border-radius: 10px;
    }
  }
}

@media only screen and (max-width: 575px) {
  .sponsor {
    &__row {
      width: 100%;
      margin: 0 auto;
      margin-bottom: 40px;
    }
    &__logo {
      display: block;
      margin: 0 auto;
      margin-top: 30px;
      margin-bottom: 30px;
      width: 266px;
      height: 135px;
      border: 1px solid #E1DFE2;
      border-radius: 10px;
    }
  }
}
</style>
