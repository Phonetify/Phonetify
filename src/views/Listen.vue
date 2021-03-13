<template>
  <div class="listen">
    <a href="/" class="back">
      <button>Back</button>
    </a>

    <label>
      <textarea class="paste" v-model="pasteText" placeholder="Paste Text"></textarea>
    </label>
  </div>
</template>

<script lang="ts">

import {Component, Vue} from "vue-property-decorator";

@Component({
  metaInfo() {
    return {
      title: 'Phonetify / Listen'
    }
  },

  data() {
    return {
      pasteText: ''
    }
  }
})
export default class Listen extends Vue {}
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

.paste
  border: none
  outline: none
  border-radius: 15px
  width: 40vw
  height: 60vh
  padding: 2em

  font-size: 1.3em
</style>
