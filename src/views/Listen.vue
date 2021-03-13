<template>
  <div class="listen">
    <h1>Hello world</h1>
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
})
export default class Listen extends Vue {}
</script>

<style lang="sass" scoped>
.listen
  height: 100vh
</style>
