<template>
  <div class="functional-header__content">
    <h1 class="functional-header__title">
      <span v-if="title">{{ title }}</span>
      <slot name="title"></slot>
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class FunctionalHeaderContent extends Vue {
  @Prop({ default: '' })
  title: string
}
</script>
