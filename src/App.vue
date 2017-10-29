<template>
  <div id="app">
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
    <Banner/>
    <nav class="nav-middle bg-green clearfix">
      <div class="float-left">
         <a class="navbar-brand" href="#">
          <img src="./assets/meetup_logo.jpeg" width="30" height="30" class="d-inline-block align-top logo" alt="">
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
    <Meetup/>
    <Speaker/>
    <Session/>
    <Transport/>
    <Sponsor/>
    <Staff/>
    <Contact/>
  </div>
</template>

<script>
import Banner from './components/Banner'
import Meetup from './components/Meetup'
import Speaker from './components/Speaker'
import Session from './components/Session'
import Transport from './components/Transport'
import Sponsor from './components/Sponsor'
import Staff from './components/Staff'
import Contact from './components/Contact'

export default {
  name: 'app',
  components: {
    Banner,
    Meetup,
    Speaker,
    Session,
    Transport,
    Sponsor,
    Staff,
    Contact
  }
}
</script>

<style lang="scss">
$font-family: 'Open+Sans', 'Lato', sans-serif, Helvetica, Arial;

.navbar-cover {
  padding: 0px;
  z-index: 100;
}

.navbar-toggler {
  margin-top: 10px;
}

.mobile-nav {
  display: none;
  text-align: center;
  width: 100%;
  font-family: $font-family;
  color: #FFF;
  position: absolute;
  top: 0;
  z-index: 100;
  
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

.title {
  margin: 0 auto;
  width: 300px;
  line-height: 143px;
  text-align: center;
}

.title__wording {
  display: inline-block;
  font-family: $font-family;
  font-size: 36px;
  color: #4A4A4A;
  letter-spacing: 5px;
}

.title__icon {
  margin-right: 20px;
}

.title__icon:before {
  display: inline-block;
  content: '';
  background-image: url('./assets/icon.svg');
  background-size: 28px 28px;
  height: 28px;
  width: 28px;
}

.paragraph {
  margin: 0 auto;
  padding-bottom: 30px;
  width: 687px;
  font-family: $font-family;
  font-size: 16px;
  color: #4A4A4A;
  letter-spacing: 0;
}

@media only screen and (max-width: 767px) {
  .paragraph {
    width: 580px;
  }
}

@media only screen and (max-width: 575px) {
  .mobile-nav {
    display: block;
  }
  .nav-middle {
    display: none;
  }

  .paragraph {
    width: 266px;
  }
}
</style>
