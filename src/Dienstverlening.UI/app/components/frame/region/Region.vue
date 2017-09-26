<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Region extends Vue {
  @Prop({ default: false })
  modIsAlt: boolean

  @Prop({ default: false })
  modIsSmall: boolean

  data() {
    return {
      classes: {
        // Standard region class.
        'region': true,
        // Region with grey background.
        'region--alt': this.modIsAlt || false,
        // Region with smaller margins
        'region--small': this.modIsSmall || false
      }
    }
  }
}
</script>
