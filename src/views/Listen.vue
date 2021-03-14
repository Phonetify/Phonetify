<template>
  <div class="listen">
    <a href="/" class="back">
      <button>Back</button>
    </a>

    <div class="texts">
      <label>
        <input type="url" class="link" v-model="linkText" placeholder="Enter Link" />
      </label>

      <label>
        <textarea class="paste" v-model="pasteText" placeholder="Paste Text"></textarea>
      </label>
    </div>

    <div class="audio">
      <Player :link-text="linkText" :paste-text="pasteText" :voice="selected" />

      <label for="voices">Choose a voice</label>
      <select @change="changeSelected($event)" name="voices" id="voices" >
        <option v-for="voice in voices" :key="voice" :value="voice">{{voice}}</option>
      </select>
    </div>

  </div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";
import Player from "@/components/Player.vue";

@Component({
  components: {
    Player
  },

  metaInfo() {
    return {
      title: 'Phonetify / Listen',
    }
  }
})
export default class Listen extends Vue {
  pasteText = ''
  linkText = ''
  selected = 'Alex'

  changeSelected(event: object) {
    this.selected = event.target.value
    console.log(this.selected)
  }

  voices = [
    "Alex",
    "Alice",
    "Alva",
    "Amelie",
    "Carmit",
    "Damayanti",
    "Daniel",
    "Diego",
    "Fiona",
    "Fred",
    "Ioana",
    "Joana",
    "Jorge",
    "Juan",
    "Kanya",
    "Karen",
    "Kyoko",
    "Laura",
    "Lekha",
    "Luca",
    "Luciana",
    "Maged",
    "Mariska",
    "Meijia",
    "Melina",
    "Milena",
    "Moira",
    "Monica",
    "Nora",
    "Paulina",
    "Rishi",
    "Samantha",
    "Sara",
    "Satu",
    "Sinji",
    "Tessa",
    "Thomas",
    "Tingting",
    "Veena",
    "Victoria",
    "Yelda",
    "Yuna",
    "Yuri",
    "Zosia",
    "Zuzana"
  ]
}
</script>

<style lang="sass" scoped>
.listen
  height: 100vh
  display: flex
  justify-content: center
  align-items: center

.back
  position: absolute
  top: 10px
  left: 10px
  button
    height: 5vh
    width: 5vw
    border: none

    border-radius: 15px
    background-color: #546E7A
    color: white
    font-family: 'Nunito', sans-serif
    font-size: 1.5em
    font-weight: bold
    letter-spacing: 2px
    &:hover
      cursor: pointer

.texts
  display: flex
  flex-direction: column

  .paste
    border: none
    outline: none
    border-radius: 15px
    width: 40vw
    height: 60vh
    padding: 1em
    background-color: #B0BEC5
    color: #263238
    font-weight: bold
    font-family: 'Nunito', sans-serif
    letter-spacing: 2px

    font-size: 1.3em

  .link
    width: 40vw
    border: none
    outline: none
    border-radius: 15px
    padding: 1em
    background-color: #B0BEC5
    font-weight: bold

    font-family: 'Nunito', sans-serif

    color: #263238
    font-size: 1.3em

    letter-spacing: 2px
    margin-bottom: 1.5em

.audio
  display: flex
  flex-direction: column
</style>
