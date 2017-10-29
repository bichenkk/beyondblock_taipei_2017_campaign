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

    <div class="mobile-nav">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto mt-lg-0">
          <li class="nav-item active">
            <a class="nav-link" href="#">報名網站</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">議程資訊</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">人員招募</a>
          </li>
        </ul>
      </div>
      <nav class="navbar navbar-toggleable-xs navbar-inverse bg-faded navbar-cover">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>

    <h1 class="banner__title">Taipei Ethereum Meetup</h1>
    <h3 class="banner__date">Oct. 27</h3>
    <div class="banner__participate">
      <a class="banner__btn"><span>由此購票</span></a>
    </div>

    <nav class="nav-middle bg-green clearfix">
      <div class="float-left">
         <a class="navbar-brand" href="#">
          <img src="../assets/meetup_logo.jpeg" width="30" height="30" class="d-inline-block align-top logo" alt="">
        </a>
      </div>

      <div class="float-right nav-menu">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link" href="#">報名網站</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">議程資訊</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">人員招募</a>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped lang="scss">
$font-family: 'Open+Sans', 'Lato', sans-serif, Helvetica, Arial;

.navbar-cover {
  padding: 0px;
  z-index: 100;
}

.navbar-toggler {
  margin-top: 30px;
}

.mobile-nav {
  display: none;
  text-align: center;
  width: 100%;
  font-family: $font-family;
  color: #FFF;
  position: absolute;
  top: 0;
  
  .navbar-collapse {
    background: transparent;
  }

  .nav-item {
    margin-right: 0px;
  }

  a {
    text-align: center;
    color: #FFF;
  }
}

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
    top: 30%;
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
    top: 40%;
    transform: translate(-50%, -50%);
  }

  &__participate {
    cursor: pointer;
    height: 50px;
    width: 166px;
    left: 50%;
    margin: 0;
    position: absolute;
    top: 55%;
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

.bg-green {
  background: linear-gradient(to right, rgba(68, 234, 188, 1.0), rgba(115, 176, 209, 1.0));
}

.logo {
  margin-left: 69px;
}

.nav-menu a {
  color: #FFF;
}

.nav-item {
  margin-right: 32px;
}

@media only screen and (max-width: 767px) {
  .banner__title {
    width: 486px;
    top: 30%;
  }

  .banner__date {
    width: 486px;
    top: 50%;
  }

  .banner__participate {
    top: 65%;
  }
}

@media only screen and (max-width: 575px) {
  .mobile-nav {
    display: block;
  }
  .nav-middle {
    display: none;
  }

  .banner__title {
    top: 35%;
    width: 274px;
    font-size: 36px;
  }

  .banner__date {
    top: 45%;
    width: 274px;
    font-size: 24px;
  }
  
  .banner__participate {
    top: 55%;
  }
}
</style>
