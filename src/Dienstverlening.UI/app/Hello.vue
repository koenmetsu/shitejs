<template>
  <div class="hello">
    <img src="../static/icon/favicon-194x194.png">

    <p>Hello, {{ name || 'World' }}!</p>
    <input v-model="name">
    {{ count }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Hello extends Vue {
  private handle: number;
  private count: number = 0;

  data() {
    return {
      name: 'World',
      count: 0
    };
  }

  mounted() {
    this.handle = setInterval(() => {
      this.count++;
    }, 1000);
  }

  destroyed() {
    clearInterval(this.handle);
  }
}
</script>

<style scoped lang="scss">
  $font-stack: Helvetica, sans-serif;
  $base-size: 16px;

  div.hello {
    p {
      font-size: $base-size * 1.5;
      font-family: $font-stack;
    }

    input {
      background-color: #333;
    }
  }
</style>
