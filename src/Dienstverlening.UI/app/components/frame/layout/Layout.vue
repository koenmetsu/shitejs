<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Layout extends Vue {
  @Prop({ default: false })
  modIsWide: boolean

  data () {
    return {
      classes: {
        // Standard layout class.
        'layout': true,
        // Wide modifier - is used in every case.
        'layout--wide': this.modIsWide
      }
    }
  }
}
</script>
