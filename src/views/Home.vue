<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/sound-waves.png">
    <Intro msg="Phonetify, Your audio solution to text articles." color="white" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Intro from "@/components/Intro.vue";

@Component({
  components: {
    Intro,
  },
})
export default class Home extends Vue {}
</script>

<style lang="sass" scoped>
.home
  height: 100vh
  background-color: #37474F
</style>
