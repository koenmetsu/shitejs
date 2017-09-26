<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class FunctionalHeaderSub extends Vue {
  data () {
    return {
      classes: {
        'functional-header__sub': true
      }
    }
  }
}
</script>
