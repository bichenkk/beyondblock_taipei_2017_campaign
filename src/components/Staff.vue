<template>
  <section class="staff">
    <div class="title">
      <i class="title__icon"></i>
      <h1 class="title__wording">{{$t('staffTitle')}}</h1>
    </div>

    <div class="staff__box">
      <div class="staff__img"></div>
      <div class="staff__img"></div>
      <div class="staff__img"></div>
      <div class="staff__img"></div>
      <div class="staff__img staff__logo"></div>
      <div class="staff__img"></div>
      <div class="staff__img"></div>
      <div class="staff__img"></div>
      <div class="staff__img"></div>
    </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'staff'
}
</script>

<style scoped lang="scss">
.staff {
  &__box {
    margin: 0 auto;
    width: 600px;
  }
  &__img {
    display: inline-block;
    margin: 24px;
    height: 135px;
    width: 135px;
    background: #D8D8D8;
    border: 3px solid #50E3C2;
    border-radius: 50%; 
  }
}

@media only screen and (max-width: 767px) {
  .staff__box {
    width: 590px;
    padding: 10px;
  }
}

@media only screen and (max-width: 575px) {
  .staff__box {
    width: 375px;
    padding: 0px;
  }

  .staff__logo {
    display: none;
  }
}
</style>
