<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/sound-waves.png">
    <Intro msg="Phonetify, Your audio solution to text articles." color="white" />
    <a class="started" href="/listen">
      <button>
        Get Started
      </button>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Intro from "@/components/Intro.vue";

@Component({
  components: {
    Intro,
  },

  metaInfo() {
    return {
      title: 'Phonetify / Home'
    }
  },
})
export default class Home extends Vue {}
</script>

<style lang="sass" scoped>
.home
  height: 100vh
  display: flex
  align-items: center
  flex-direction: column
  justify-content: center

.started
  button
    margin-top: 2vh
    width: 5vw
    height: 5vh

    border-radius: 15px
    background-color: #546E7A
    border: none
    color: white
    font-family: 'Nunito', sans-serif
    font-size: 1.5em
    font-weight: bold
    letter-spacing: 2px
    &:hover
      cursor: pointer
</style>
