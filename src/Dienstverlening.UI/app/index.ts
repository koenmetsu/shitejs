import Vue from 'vue';
import Hello from './Hello.vue';

Vue.config.productionTip = false;

new Vue({
  el: '#dienstverlening',
  render: h => h(Hello)
});
