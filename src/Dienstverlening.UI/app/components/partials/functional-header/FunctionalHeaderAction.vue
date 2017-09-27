<template >
  <li v-if="to" class="functional-header__action"><router-link :to="to">{{ title }}</router-link></li>
  <li v-else-if="on" class="functional-header__action"><a v-on:click="on">{{ title }}</a></li>
  <li v-else class="functional-header__action">{{ title }}</li>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { Location } from 'vue-router';

@Component
export default class FunctionalHeaderAction extends Vue {
  @Prop({ default: '', required: true })
  title: string

  @Prop({
    default: null,
    type: [String, Object],
    //validator: to => false
  })
  to: string | Location

  @Prop({ required: false })
  on: Function
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
