import Vue from 'vue';
import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;

// Import the general components.
import dvLayout from 'components/frame/layout/Layout.vue';
import dvGrid from 'components/frame/grid/Grid.vue';
import dvColumn from 'components/frame/column/Column.vue';

// Define the components name.
const components = {
  dvLayout,
  dvGrid,
  dvColumn,
};

// Iterate through them and add them to
// the global Vue scope.
Object.keys(components).forEach(key => Vue.component(key, components[key]));

new Vue({
  router,
  el: '#dienstverlening',
  render: h => h(App),
});
