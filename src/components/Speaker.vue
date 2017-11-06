<template>
  <div class="speaker">
    <div class="title">
      <i class="title__icon"></i>
      <h1 class="title__wording">{{$t('speakerTitle')}}</h1>
    </div>
    <ul class="speaker__list">
      <li class="speaker__box" v-bind:class="classObject(index)" v-for="(speaker, index) in speakers" v-bind:key="speaker.name + index">
        <div class="cell" v-bind:style="directionStyle(index)">
          <div class="cell__icon">
            <a v-bind:href="speaker.url" target="_blank"><img v-bind:src="speaker.image" style="width: 100%;"></a>
          </div>
          <div class="cell__info" v-bind:style="infoStyle(index)">
            <a class='cell__name' v-bind:href="speaker.url" target="_blank" v-bind:style="infoTextStyle(index)">
              <span class="speaker__name">{{speaker.name}}</span>
            </a>
            <p class="cell__title" v-bind:style="infoTextStyle(index)"><span class="speaker__title">{{speaker.title}}</span></p>
            <div class="cell__underline" v-bind:style="directionStyle(index)">
              <div class="cell__line" v-bind:style="lineStyle(index)"/>
              <div class="cell__ball"/>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import en from '../i18n/en'
import zh from '../i18n/zh-TW'

export default {
  name: 'speaker',
  methods: {
    classObject: function (index) {
      return {
        cellMarginRight: index % 2 !== 0,
        cellMarginLeft: index % 2 === 0
      }
    },
    directionStyle: function (index) {
      return {
        '-webkit-flex-direction': index % 2 === 0 ? 'row' : 'row-reverse',
        'flex-direction': index % 2 === 0 ? 'row' : 'row-reverse'
      }
    },
    lineStyle: function (index) {
      if (index % 2 === 0) {
        return {
          'margin-left': '-11px'
        }
      }
      return {
        'margin-right': '-11px'
      }
    },
    infoStyle: function (index) {
      return {
        'text-align': index % 2 === 0 ? 'left' : 'right'
      }
    },
    infoTextStyle: function (index) {
      if (index % 2 === 0) {
        return {
          'margin-left': '20px'
        }
      }
      return {
        'margin-right': '20px'
      }
    }
  },
  data () {
    if (this.$i18n.locale === 'en') {
      return {
        speakers: en.speakers
      }
    } else {
      return {
        speakers: zh.speakers
      }
    }
  }
}
</script>

<style scoped lang="scss">
$font-family: 'Open+Sans', Microsoft JhengHei, 'Lato', sans-serif, Helvetica, Arial;

.speaker {
  &__list {
    display:inline;
    list-style:none;
    padding: 0px;
  }
  &__name {
    font-family: $font-family;
    font-size: 24px;
    color: #4A4A4A;
    letter-spacing: 0;
  }
  &__title {
    font-family: $font-family;
    font-size: 16px;
    color: #4A4A4A;
    letter-spacing: 0;
  }
}

.cell {
  width: 100%;
  display: -webkit-flex;
  -webkit-flex-direction: row;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &__icon {
    width: 120px;
    height: 120px;
    border: 5px solid #50E3C2;
    border-radius: 100px;
    overflow: hidden;
  }

  &__underline {
    display: -webkit-flex;
    -webkit-flex-direction: row;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  &__line {
    height: 2px;
    width: 180px;
    background-color: #50E3C2;
  }

  &__ball {
    width: 8px;
    height: 8px;
    border-radius: 100px;
    background-color: #50E3C2;
  }

  &__name {
    color: #50E3C2
  }
}

@media only screen and (max-width: 575px) {
  .speaker__box {
    margin-bottom: 30px;
  }
}
</style>
