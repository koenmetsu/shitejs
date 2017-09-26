<template>
  <div v-if="!modIsFunctionalHeader" class="tabs__wrapper">
    <ul :class="classes">
      <slot></slot>
    </ul>
  </div>

  <ul v-else :class="classes" data-tabs-list>
    <slot></slot>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

declare var vl: any; // global vlaanderen ui

@Component
export default class Tabs extends Vue {
  @Prop({ default: false })
  modIsFunctionalHeader: boolean

  data() {
    return {
      classes: {
        'tabs': true,

        'tabs--block': this.modIsFunctionalHeader,
      }
    }
  }

  mounted() {
    setTimeout(() => { vl.tabs.dressAll() }, 10)
  }
}
</script>
