<template>
  <div class="hello">
    <p>Hello, {{ name || 'World' }}!</p>
    <input v-model="name">
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Hello extends Vue {
  data() {
    return { name: 'World' };
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
