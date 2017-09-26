<template >
  <li v-if="to" class="functional-header__action"><a :href="to">{{ title }}</a></li>
  <li v-else class="functional-header__action">{{ title }}</li>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class FunctionalHeaderAction extends Vue {
  @Prop({ default: '', required: true })
  title: string

  @Prop({ default: null })
  to: string
}
</script>

<style scoped>
  .functional-header__action a {
    cursor: pointer;
    text-decoration: none;
  }

  .functional-header__action a:hover {
    text-decoration: underline;
  }
</style>
