import Vue from 'vue';
import Router from 'vue-router';

import dienstverleningRoutes from './pages/dienstverlening/routes';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: '/',
  routes: [
    ...dienstverleningRoutes,
  ],
});
