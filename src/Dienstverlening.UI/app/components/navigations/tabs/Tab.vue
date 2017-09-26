<template>
  <li :class="classes">
    <a :id="id || null" class="tab__link" :to="href">
      {{ title }}
    </a>
  </li>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class Tab extends Vue {
  @Prop({ default: '' })
  id: string

  @Prop({ default: '' })
  title: string

  @Prop({ default: '' })
  href: string

  @Prop({ default: false })
  isActive: boolean

  data () {
    return {
      classes: {
        'tab': true,
        'tab--active': this.isActive
      }
    }
  }
}
</script>

<style scoped>
.tab .tab__link {
  white-space: nowrap;
  padding: 1.2rem 1.1rem 1.2rem 1.1rem;
  margin-right: 1px;
}
</style>
