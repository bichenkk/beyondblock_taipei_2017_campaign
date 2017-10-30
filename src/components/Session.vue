<template>
  <section class="session">
    <div class="title">
      <i class="title__icon"></i>
      <h1 class="title__wording">議程</h1>
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
export default {
  name: 'session',
  data () {
    return {
      sessions: [
        {
          start: '10:20',
          end: '11:00',
          speaker: 'Loi Luu',
          title: 'Angular 5 全新功能探索'
        },
        {
          start: '10:20',
          end: '11:00',
          speaker: 'Loi Luu',
          title: 'Angular 5 全新功能探索'
        },
        {
          start: '11:10',
          end: '11:50',
          speaker: 'Loi Luu',
          title: 'Angular 5 全新功能探索'
        },
        {
          start: '11:50',
          end: '13:30',
          speaker: '午餐',
          title: null
        },
        {
          start: '13:30',
          end: '14:10',
          speaker: 'Loi Luu',
          title: 'Angular 5 全新功能探索'
        },
        {
          start: '14:20',
          end: '15:00',
          speaker: 'Loi Luu',
          title: 'Angular 5 全新功能探索'
        },
        {
          start: '15:00',
          end: '15:50',
          speaker: 'Loi Luu',
          title: 'Angular 5 全新功能探索'
        },
        {
          start: '16:00',
          end: '16:40',
          speaker: 'Loi Luu',
          title: 'Angular 5 全新功能探索'
        }
      ]
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
    width: 630px;
    margin: 0 auto;
  }

  .session__time {
    width: 240px;
  }

  .session__body {
    padding-left: 20px; 
    width: 280px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media only screen and (max-width: 575px) {
  .session__box {
    width: 450px;
    margin: 0 auto;
  }

  .session__time {
    width: 90px;
  }

  .session__endtime {
    text-align: right;
    margin-right: 8px;
    display: block;
  }

  .session__body {
    padding-left: 0px; 
    width: 300px;
  }
}
</style>
