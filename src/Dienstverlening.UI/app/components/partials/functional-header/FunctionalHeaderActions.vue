<template>
  <div class="functional-header__actions">
    <ul>
      <template v-for="action in actions">
        <li v-if="action.to" class="functional-header__action"><a :href="action.to">{{ action.title }}</a></li>
        <li v-else class="functional-header__action">{{ action.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class FunctionalHeaderActions extends Vue {
  @Prop({ default: null })
  actions: Array<{ title: string, to?: string }>
}
</script>
