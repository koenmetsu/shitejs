<template>
  <header :class="classes" role="banner">
    <dv-layout :mod-is-wide="true">
      <slot></slot>
    </dv-layout>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class FunctionalHeader extends Vue {
  @Prop({ default: false })
  modHasActions: boolean

  data() {
    return {
      classes: {
        'functional-header': true,
        'functional-header--has-actions': this.modHasActions
      }
    }
  }
}
</script>

<style scoped>
  .functional-header {
      margin-bottom: 0;
  }

  @media screen and (max-width: 767px) {
    .functional-header--has-actions:before, .functional-header__actions {
        display: block;
    }
  }
</style>
