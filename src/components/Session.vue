<template>
  <section class="session">
    <div class="title">
      <i class="title__icon"></i>
      <h1 class="title__wording">{{$t('sessionTitle')}}</h1>
    </div>

    <div class="session__box clearfix row" v-for="(session, index) in sessions" v-bind:key="session.time + session.title">
      <div class="session__time">
        <h3>
         {{session.start}}<span class="session__until">-</span><span class="session__endtime">{{session.end}}</span>
        </h3>
      </div>
      <div v-if="index != (sessions.length - 1)" class="session__timeline">
        <i class="session__dot"></i>
      </div>
      <div v-else class="session__timeline session__timeline--none">
        <i class="session__dot"></i>
      </div>
      <div class="session__body">
        <div v-if="session.title" class="session__speaker">
          <h3>{{session.speaker}}</h3>
        </div>
        <div v-else class="session__speaker--none">
          <h3>{{session.speaker}}</h3>
        </div>
        <div class="session__title">
          {{session.title}}
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import en from '../i18n/en'
import zh from '../i18n/zh-TW'

export default {
  name: 'session',
  data () {
    if (this.$i18n.locale === 'en') {
      return {
        sessions: en.sessions
      }
    } else {
      return {
        sessions: zh.sessions
      }
    }
  }
}
</script>

<style scoped lang="scss">
$font-family: 'Open+Sans', 'Lato', sans-serif, Helvetica, Arial;

.time {
  text-align: right;
  font-family: $font-family;
  font-size: 16px;
  color: #4A4A4A;
  letter-spacing: 2.22px;
}

.session {
  &__box {
    width: 750px;
    margin: 0 auto;
  }
  &__time {
    width: 300px;
    text-align: right;
    display: inline-block;
  }
  &__time h3 {
    font-family: $font-family;
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 2.22px;
  }
  &__timeline {
    margin: 0px 20px;
    height: 100px;
    border-left: 1px solid #50E3C2;
  }
  &__timeline--none {
    border-left: none;
  }
  &__dot {
    display: inline-block;
    width: 15px;
    height: 15px;
    background: #50E3C2;
    border-radius: 50%;
    margin-left: -8px;
    transform: translate(0%, -5px);
  }
  &__body {
    display: inline-block;
    width: 400px;
    padding-left: 30px;
    transform: translate(0%, -5px);
  }
  &__speaker h3 {
    display: inline-block;
    font-family: $font-family;
    font-size: 24px;
    color: #4A4A4A;
    letter-spacing: 0;
  }
  &__speaker--none {
    font-family: $font-family;
    font-size: 24px;
    color: #4A4A4A;
    letter-spacing: 0;
  }
  &__title {
    font-family: $font-family;
    font-size: 24px;
    color: #4A4A4A;
    letter-spacing: 0;
  }
}

@media only screen and (max-width: 767px) {
  .session__box {
    width: 576px;
    margin: 0 auto;
  }

  .session__time {
    width: 220px;
  }

  .session__body {
    width: 280px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media only screen and (max-width: 575px) {
  .session__box {
    width: 375px;
    margin: 0 auto;
  }
  .session__time {
    width: 75px;
  }
  .session__endtime {
    text-align: right;
    margin-right: 8px;
    display: block;
  }
  .session__body {
    width: 250px;
  }
  .session__speaker h3 {
    font-size: 18px;
  }
  .session__title {
    font-size: 18px;
  }
}
</style>
