<template>
  <div>
    <dv-header />
    <dv-navigation />

    <dv-main>
      <div class="region">
        <div class="layout layout--wide">
          <router-view></router-view>
        </div>
      </div>
    </dv-main>

    <dv-footer />
  </div>
</template>

<script lang="ts">
import dvHeader from 'components/header/Header.vue';
import dvNavigation from 'components/navigation/Navigation.vue';
import dvFooter from 'components/footer/Footer.vue';

import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    dvHeader,
    dvNavigation,
    dvFooter,
  }
})
export default class Dienstverlening extends Vue {
}
</script>

<style>
a:before,
a:hover:before { text-decoration: none; }
</style>
