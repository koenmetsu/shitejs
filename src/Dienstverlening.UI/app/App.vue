<template>
  <div>
    <dv-header />

    <dv-functional-header mod-has-actions>
      <dv-functional-header-actions>
        <dv-functional-header-action title="John Admin (Beheerder | Ontwikkelaar)" />
        <dv-functional-header-action title="Afmelden" to="/logout" />
      </dv-functional-header-actions>

      <dv-functional-header-content>
        <router-link slot="title" class="functional-header__title" :to="{ name: 'all-services' }">{{ title }}</router-link>
      </dv-functional-header-content>

      <dv-functional-header-sub>
        <dv-grid>
          <dv-column type="nav"
                     role="navigation"
                     :cols="[{nom: 9, den: 12}, {nom: 8, den: 12, mod: 's'}, {nom: 1, den: 1, mod: 's'}]"
                     data-tabs-responsive-label="Navigatie"
                     data-tabs>
            <dv-tabs mod-is-functional-header>
              <dv-tab title="Alle dienstverleningen" exact :to="{ name: 'all-services' }" />
              <dv-tab title="Mijn dienstverleningen" :to="{ name: 'my-services' }" />
              <dv-tab title="Parameters" :to="{ name: 'administration' }" />
              <dv-tab title="Systeem" :to="{ name: 'system' }" />
            </dv-tabs>
          </dv-column>
        </dv-grid>
      </dv-functional-header-sub>
    </dv-functional-header>

    <dv-main>
      <dv-region>
        <dv-layout mod-is-wide>
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
import dvHeader from 'components/partials/header/Header.vue';
import dvFunctionalHeader from 'components/partials/functional-header/FunctionalHeader.vue';
import dvFunctionalHeaderContent from 'components/partials/functional-header/FunctionalHeaderContent.vue';
import dvFunctionalHeaderSub from 'components/partials/functional-header/FunctionalHeaderSub.vue';
import dvFunctionalHeaderActions from 'components/partials/functional-header/FunctionalHeaderActions.vue';
import dvFunctionalHeaderAction from 'components/partials/functional-header/FunctionalHeaderAction.vue';
import dvTabs from 'components/navigations/tabs/Tabs.vue';
import dvTab from 'components/navigations/tabs/Tab.vue';
import dvFooter from 'components/partials/footer/Footer.vue';

@Component({
  components: {
    dvMain,
    dvRegion,
    dvHeader,
    dvFunctionalHeader,
    dvFunctionalHeaderContent,
    dvFunctionalHeaderSub,
    dvFunctionalHeaderActions,
    dvFunctionalHeaderAction,
    dvTabs,
    dvTab,
    dvFooter,
  }
})
export default class Dienstverlening extends Vue {
  title: string = "DIENSTVERLENINGSREGISTER"
}
</script>

<style>
a:before,
a:hover:before { text-decoration: none; }
</style>
