import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

// Import the general components.
import dvMain from 'components/frame/main/Main.vue';

// Define the components name.
const components = {
  dvMain,
};

// Iterate through them and add them to the global Vue scope.
Object.keys(components).forEach(key => Vue.component(key, components[key]));

new Vue({
  el: '#dienstverlening',
  render: h => h(App),
});
