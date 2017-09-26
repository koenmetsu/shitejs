<template>
  <div>
    <dienstverlening-header />
    <dienstverlening-navigation />

    <div id="main" itemprop="mainContentOfPage" role="main" tabindex="-1" class="main-content">
      <div class="region">
        <div class="layout layout--wide">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <dienstverlening-footer />
  </div>
</template>

<script lang="ts">
import dienstverleningHeader from 'components/header/Header.vue';
import dienstverleningNavigation from 'components/navigation/Navigation.vue';
import dienstverleningFooter from 'components/footer/Footer.vue';

import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    dienstverleningHeader,
    dienstverleningNavigation,
    dienstverleningFooter,
  }
})
export default class Dienstverlening extends Vue {
}
</script>

<style>
a:before,
a:hover:before { text-decoration: none; }
</style>
