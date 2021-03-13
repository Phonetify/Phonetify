<template>
  <div class="hello">
    <h1 :style="style" >{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({
  computed: {
    style(): string {
      return `color: ${this.color}`
    }
  }
})
export default class Intro extends Vue {
  @Prop() private msg!: string;
  @Prop() private color!: string;
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
