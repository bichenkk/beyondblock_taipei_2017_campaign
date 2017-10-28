<template>
  <div id="app">
    <Banner/>
    <Meetup/>
    <Speaker/>
    <Session/>
    <Transport/>
    <Sponsor/>
    <Staff/>
    <Footer/>
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
import Footer from './components/Footer'

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
    Footer
  }
}
</script>

<style>
</style>
