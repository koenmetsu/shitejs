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

<style scoped>
  .functional-header__actions {
    padding: 1rem .5rem 1rem;
  }

  .functional-header__action a {
    cursor: pointer;
    text-decoration: none;
  }

  .functional-header__action a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
    .functional-header__actions {
      margin-top: -0.9rem;
    }

    .functional-header__actions {
      display: block;
    }
  }

  @media screen and (max-width: 580px) {
    .functional-header__actions {
      float: left;
      width: 100%;
      margin-bottom: 10px;
      margin-top: -5px;
    }
  }
</style>
