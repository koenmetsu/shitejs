<!-- Wraps all content of the page and is the go-to contentblock for accessibility -->
<template>
  <main id="main" itemprop="mainContentOfPage" role="main" tabindex="-1" class="main-content">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Main extends Vue {
}
</script>
