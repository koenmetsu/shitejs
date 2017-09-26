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

      <div class="functional-header__content">
        <router-link class="functional-header__title" :to="{ name: 'all-services' }">Dienstverleningsregister</router-link>
      </div>

      <div class="functional-header__sub">
        <div class="grid">
          <nav class="col--9-12 col--8-12--m col--1-1--s" role="navigation">
            <ul class="functional-header__tabs tabs tabs--small tabs--left">
              <router-link tag="li" class="tab" active-class="tab--active" exact :to="{ name: 'all-services' }">
                <a link class="tab__link">Alle dienstverleningen</a>
              </router-link>
              <router-link tag="li" class="tab" active-class="tab--active" :to="{ name: 'my-services' }">
                  <a link class="tab__link">Mijn dienstverleningen</a>
              </router-link>
              <router-link tag="li" class="tab" active-class="tab--active" :to="{ name: 'administration' }">
                <a link class="tab__link">Parameters</a>
              </router-link>
              <router-link tag="li" class="tab" active-class="tab--active" :to="{ name: 'system' }">
                <a link class="tab__link">Systeem</a>
              </router-link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class Navigation extends Vue {
}
</script>

<style scoped>
  .tab .tab__link {
    white-space: nowrap;
    padding: 1.2rem 1.1rem 1.2rem 1.1rem;
    margin-right: 1px;
  }

  .functional-header, .u-spacer {
      margin-bottom: 0;
  }

  .functional-header__actions {
      padding: 1rem .5rem 1rem;
  }

  .functional-header__action a {
      cursor: pointer;
  }

  .functional-header__action a:hover {
      text-decoration: underline;
  }

  @media screen and (max-width: 767px) {
      .functional-header--has-actions:before, .functional-header__actions {
          display: block;
      }

      .functional-header__actions {
        margin-top: -0.9rem;
      }
  }
</style>
