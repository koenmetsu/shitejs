<template>
  <router-link tag="li" class="tab" active-class="tab--active" :exact="exact" :to="to">
    <a link :id="id || null" class="tab__link">{{ title }}</a>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue';
import { Location } from 'vue-router';
import { Component, Prop } from 'vue-property-decorator';
import { isLocation, isString } from 'core/helpers';

@Component
export default class Tab extends Vue {
  @Prop({ default: '' })
  id: string

  @Prop({ required: true })
  title: string

  @Prop({
    required: true,
    type: [String, Object],
    validator: to => isString(to) || isLocation(to)
  })
  to: string | Location

  @Prop({ default: false })
  exact: boolean
}
</script>

<style scoped>
  .tab .tab__link {
    white-space: nowrap;
    padding: 1.2rem 1.1rem 1.2rem 1.1rem;
    margin-right: 1px;
  }
</style>
