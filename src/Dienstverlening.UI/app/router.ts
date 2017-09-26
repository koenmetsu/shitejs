import Vue from 'vue';
import Router from 'vue-router';

import administrationRoutes from './pages/administration/routes';
import allServicesRoutes from './pages/all-services/routes';
import myServicesRoutes from './pages/my-services/routes';
import systemRoutes from './pages/system/routes';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: '/',
  routes: [
    ...administrationRoutes,
    ...allServicesRoutes,
    ...myServicesRoutes,
    ...systemRoutes,
  ],
});
