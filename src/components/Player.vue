<template>
  <div class="player">
    <img class="pp" @click="handle" :src="url"  alt="play pause" />
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Player extends Vue {
  @Prop() private linkText!: string;
  @Prop() private pasteText!: string;
  @Prop() private voice!: string;

  speech = new SpeechSynthesisUtterance()

  play = require('../assets/play.png')
  pause = require('../assets/pause.png')
  playing = false

  url = this.playing ? this.pause : this.play

  handle() {
    if (this.playing) {
      window.speechSynthesis.pause()
      this.playing = false
    } else if (window.speechSynthesis.paused) {
      this.playing = true
      window.speechSynthesis.resume()
    }
    this.speech.voice = window.speechSynthesis.getVoices().filter(x => x.name === this.voice)[0]
  }

  async playSpeech(s: any) {
    console.log('48')
    await window.speechSynthesis.speak(s)
  }
}
</script>

<style scoped lang="sass">
.player
  display: flex
  justify-content: center
  align-items: center
  width: 7vw
  height: 10vh
  background-color: #607D8B
  border-radius: 15px

.pp
  width: 2vw
</style>
