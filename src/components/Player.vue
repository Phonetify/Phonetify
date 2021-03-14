<template>
  <div class="player">
    <h1>{{linkText}}</h1>
    <h2>{{pasteText}}</h2>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from "vue-property-decorator";

@Component
export default class Player extends Vue {
  @Prop() private linkText!: string;
  @Prop() private pasteText!: string;
}
</script>

<style scoped lang="sass"></style>
