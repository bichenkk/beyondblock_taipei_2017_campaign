<template>
  <section class="sponsor">
    <div class="title">
      <i class="title__icon"></i>
      <h1 class="title__wording">{{$t('sponsorTitle')}}</h1>
    </div>

    <!--
    <div class="sponsor__rank">
      <h3>{{$t('platinumSponsorTitle')}}</h3>
    </div>
    -->

    <div class="sponsor__box">
      <div class="sponsor__row">
        <div class="sponsor__logo">
          <img src="../assets/sponsor_ifc.jpg">
        </div>
        <div class="sponsor__logo">
          <img src="../assets/sponsor_cobinhood.jpg">
        </div>
        <div class="sponsor__logo">
          <img src="../assets/sponsor_bitoex.jpg">
        </div>
      </div>
      <div class="sponsor__row">
        <div class="sponsor__logo">
          <img src="../assets/sponsor_amis.svg">
        </div>
      </div>
    </div>

    <!--
    <div class="sponsor__rank">
      <h3>{{$t('goldSponsorTitle')}}</h3>
    </div>

    <div class="sponsor__box">
      <div class="sponsor__row">
        <div class="sponsor__logo"></div>
        <div class="sponsor__logo"></div>
        <div class="sponsor__logo"></div>
      </div>
    </div>

    <div class="sponsor__rank">
      <h3>{{$t('silverSponsorTitle')}}</h3>
    </div>

    <div class="sponsor__box">
      <div class="sponsor__row">
        <div class="sponsor__logo"></div>
        <div class="sponsor__logo"></div>
        <div class="sponsor__logo"></div>
      </div>
    </div>
    -->
  </section>
</template>

<script>
export default {
  name: 'sponsor'
}
</script>

<style scoped lang="scss">
$font-family: 'Open+Sans', Microsoft JhengHei, 'Lato', sans-serif, Helvetica, Arial;

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
    width: 735px;
    margin: 0 auto;
    margin-bottom: 40px;
  }
  &__logo {
    margin: 15px 30px;
    display: inline-block;
    width: 180px;
    height: 135px;
    /* border: 1px solid #E1DFE2; */
    border-radius: 10px;

    img {
        width: 100%;
    }
  }
}

@media only screen and (max-width: 767px) {
  .sponsor {
    &__box {
      margin: 0 auto;
      width: 565px;
    }
    &__row {
      width: 565px;
      margin: 0 auto;
      margin-bottom: 40px;
    }
    &__logo {
      display: inline-block;
      margin: 30px 0px;
      width: 185px;
      height: 135px;
      /* border: 1px solid #E1DFE2; */
      border-radius: 10px;

      img {
        width: 100%;
      }
    }
  }
}

@media only screen and (max-width: 575px) {
  .sponsor {
    &__box {
      margin: 0 auto;
      width: 100%;
    }
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
      /* border: 1px solid #E1DFE2; */
      border-radius: 10px;

      img {
        width: 100%;
      }
    }
  }
}
</style>
