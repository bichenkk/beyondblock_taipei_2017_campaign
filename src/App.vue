<template>
  <div id="app">
    <div class="mobile-nav">
      <nav class="navbar navbar-toggleable-xs navbar-inverse bg-faded navbar-cover">
        <button ref="mobileNav" class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-angle"><i class="fa fa-angle-up nav-mobile-close" aria-hidden="true"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto mt-lg-0">
            <li class="nav-item">
              <a @click="toggleNav" class="nav-link" href="#speaker">{{$t('navLink1')}}</a>
              <hr>
            </li>
            <li class="nav-item">
              <a @click="toggleNav" class="nav-link" href="#session">{{$t('navLink2')}}</a>
              <hr>
            </li>
            <li class="nav-item">
              <a @click="toggleNav" class="nav-link" href="#transport">{{$t('navLink3')}}</a>
              <hr>
            </li>
            <li class="nav-item">
              <a class="nav-link inline" href="#" @click="changeLang('zh', true)">{{$t('zhMobileLang')}}</a>
              <span class="divider">/</span>
              <a class="nav-link inline" href="#" @click="changeLang('en', true)">{{$t('enMobileLang')}}</a>
            </li>
          </ul>
        </div>
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
            <a class="nav-link" href="#speaker">{{$t('navLink1')}}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#session">{{$t('navLink2')}}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#transport">{{$t('navLink3')}}</a>
          </li>
          <li class="nav-item">
            <div class="dropdown">
              <a class="dropbtn nav-link" href="#">{{$t('langDropdown')}}</a>
              <div class="dropdown-content">
                <a style="color: #000" @click="changeLang('zh', false)">{{$t('zhWording')}}</a>
                <a style="color: #000" @click="changeLang('en', false)">{{$t('enWording')}}</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
    <Meetup/>
    <Speaker id="speaker"/>
    <Session id="session"/>
    <Transport id="transport"/>
    <!--
    <Sponsor/>
    <Staff/>
    -->
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
  },

  methods: {
    changeLang (lang, closeMobileNav) {
      this.$i18n.locale = lang
      if (closeMobileNav) {
        this.$refs.mobileNav.click()
      }
    },

    toggleNav () {
      this.$refs.mobileNav.click()
    }
  }
}
</script>

<style lang="scss">
$font-family: 'Open+Sans', Microsoft JhengHei, 'Lato', sans-serif, Helvetica, Arial;

#app {
  overflow-x: hidden;
}

.inline {
  display: inline-block;
}

.divider {
  color: #9B9B9B;
  padding: 0px 10px;
}

.navbar-cover {
  padding: 0px;
  z-index: 100;
}

.navbar-toggler {
  margin-top: 10px;
}

.nav-mobile-close {
  color: #FFF;
  display: inline-block;
  font-size: 25px;
  padding: 0px 7px;
  line-height: 1.3em;
  font-weight: bold;
}

.navbar-toggler[aria-expanded=true] .navbar-toggler-icon {
    display: none;
}

.navbar-toggler[aria-expanded=false] .navbar-toggler-angle {
    display: none;
}

.bg-green {
  background: linear-gradient(to right, rgba(68, 234, 188, 1.0), rgba(115, 176, 209, 1.0));
}

.logo {
  margin-left: 40px;
}

.nav-menu a {
  color: #FFF;
}

.nav-item {
  margin-right: 20px;
  width: 100px;
}

.nav-item:nth-last-child(1) {
  margin-right: 10px;
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
    background: rgba(74,74,74,0.90);
  }

  .nav-item {
    width: 100%;
    margin-right: 0px;
    color: #FFF;
  }

  .nav-item:nth-child(1) {
    margin-top: 60px;
  }

  .nav-item:nth-last-child(1) {
    margin-bottom: 50px;
  }

  hr {
    width: 80%;
    border-top: 1px solid #9B9B9B;
  }

  a {
    display: inline-block;
    color: #FFF;
  }
}

.title {
  margin: 0 auto;
  width: 300px;
  line-height: 143px;
  text-align: center;
  transform: translate(-20px, 0%);
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

.cellMarginRight {
  margin-right: 320px;
}

.cellMarginLeft {
  margin-left: 320px;
}

.dropbtn {
  background-color: transparent;
  color: #FFF;
  cursor: pointer;
}

.dropdown {
  position: relative;
  display: inline-block;
  color: #000;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}

.dropdown-content a:hover {
  background-color: #f1f1f1
}

.dropdown:hover .dropdown-content {
  display: block;
}

@media only screen and (max-width: 767px) {
  .paragraph {
    width: 500px;
  }

  .cellMarginRight {
    margin-right: 250px;
  }

  .cellMarginLeft {
    margin-left: 250px;
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

  .cellMarginRight {
    margin-right: 0px;
  }

  .cellMarginLeft {
    margin-left: 0px;
  }
}
</style>
