<template>
  <header class="functional-header functional-header--has-actions" role="banner">
    <div class="layout layout--wide">
      <div class="functional-header__actions">
          <div v-if="isLoggedIn">
          <ul>
            <li class="functional-header__action">{{ name }} (Beheerder)</li>
            <li class="functional-header__action"><a v-on:click="logoutClicked()">Meld af</a></li>
          </ul>
        </div>
        <div v-else>
          <ul>
            <li class="functional-header__action"><a v-on:click="loginClicked()">Aanmelden</a></li>
          </ul>
        </div>
      </div>


  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class Navigation extends Vue {
}
</script>
