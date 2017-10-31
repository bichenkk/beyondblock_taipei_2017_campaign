<template>
  <section class="contact contact__bg">
    <div class="contact__box">
      <div class="contact__icon">
        <i class="fa fa-facebook icon" aria-hidden="true"></i>
      </div>
      <div class="contact__icon">
        <i class="fa fa-slack icon" aria-hidden="true"></i>
      </div>
      <div class="contact__icon">
        <i class="fa fa-github icon" aria-hidden="true"></i>
      </div>
    </div>
    <p class="contact__organizer">
      2017 © Taipei Ethereum Meetup
    </p>
  </section>
</template>

<script>
export default {
  name: 'contact'
}
</script>

<style scoped lang="scss">
.icon-inverse {
  color: transparent;
}
.contact {
  &__bg {
    height: 120px;
    width: 100%;
    background-image: linear-gradient(-90deg, #37ECBA 0%, #72AFD3 100%);
  }
  &__icon {
    margin: 0px 24px;
    margin-top: 26px; 
    margin-bottom: 10px;
    border-radius: 50%;
    display: inline-block;
    text-align: center;
    width: 135px;
    line-height: 50px;
    font-size: 40px;
    color: #FFF;
  }
  &__box {
    margin: 0 auto;
    width: 600px;
  }
  &__organizer {
    display: block;
    margin: 0 auto;
    color: #FFF;
    text-align: center;
  }
}

@media only screen and (max-width: 575px) {
  .contact__box {
    width: 380px;
    padding-top: 20px;
    margin-bottom: 10px;
  }
  .contact__icon {
    margin: 0 auto;
    margin: 0px 10px;
    width: 100px;
  }
}
</style>
