<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Grid extends Vue {
  @Prop({ default: false })
  modIsStacked: boolean

  @Prop({ default: false })
  modIsCenter: boolean

  @Prop({ default: false })
  modIsStretched: boolean

  @Prop({ default: false })
  modIsVCenter: boolean

  data() {
    return {
      classes: {
        // Standard grid class.
        'grid': true,
        // Adds spacing between vertical columns.
        'grid--is-stacked': this.modIsStacked,
        // Aligns columns horizontally.
        'grid--align-center': this.modIsCenter,
        // Stretches columns vertically to the
        // max size of the biggest one.
        // (Chrome only - use js-equal-height for backup)
        'grid--v-stretched': this.modIsStretched,
        // Align columns vertically.
        'grid--v-center': this.modIsVCenter
      }
    }
  }
}
</script>
