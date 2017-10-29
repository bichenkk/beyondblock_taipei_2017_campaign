<template>
  <div id="app">
    <Banner/>
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
@import url(https://fonts.googleapis.com/css?family=Open+Sans|Lato);
$font-family: 'Open+Sans', 'Lato', sans-serif, Helvetica, Arial;

.title {
  margin: 0 auto;
  width: 300px;
  text-align: center;
}

.title__wording {
  display: inline-block;
  font-family: $font-family;
  font-size: 36px;
  color: #4A4A4A;
  letter-spacing: 5px;
}

.title__icon:before {
  display: inline-block;
  content: '';
  background-image: url('./assets/icon.svg');
  background-size: 28px 28px;
  height: 28px;
  width: 28px;
}
</style>
