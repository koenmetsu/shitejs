<template>
  <div>
    <dv-header />

    <dv-functional-header :mod-has-actions="true">
      <dv-functional-header-content title="DIENSTVERLENINGSREGISTER" />
      <dv-functional-header-sub>
        <dv-grid>
          <dv-column type="nav" role="navigation" :cols="[{nom: 9, den: 12}, {nom: 8, den: 12, mod: 's'}, {nom: 1, den: 1, mod: 's'}]" data-tabs>
          </dv-column>
        </dv-grid>
      </dv-functional-header-sub>
    </dv-functional-header>

    <dv-navigation />

    <dv-main>
      <dv-region>
        <dv-layout :mod-is-wide="true">

          <router-view></router-view>

        </dv-layout>
      </dv-region>
    </dv-main>

    <dv-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import dvMain from 'components/frame/main/Main.vue';
import dvRegion from 'components/frame/region/Region.vue';

import dvHeader from 'components/header/Header.vue';
import dvNavigation from 'components/navigation/Navigation.vue';
import dvFooter from 'components/footer/Footer.vue';

import dvFunctionalHeader from 'components/partials/functional-header/FunctionalHeader.vue';
import dvFunctionalHeaderContent from 'components/partials/functional-header/FunctionalHeaderContent.vue';
import dvFunctionalHeaderSub from 'components/partials/functional-header/FunctionalHeaderSub.vue';

@Component({
  components: {
    dvMain,
    dvRegion,
    dvFunctionalHeader,
    dvFunctionalHeaderContent,
    dvFunctionalHeaderSub,

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
