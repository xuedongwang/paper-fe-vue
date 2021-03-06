import VueRouter from 'vue-router';
import Vue from 'vue';
import store from '@/store';
import { ADD_KEEP_ALIVE_COMPONENT } from '@/store/mutation-types';
import { setDocumentTitle } from '@/utils/helper';
import routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 0 };
  }
});

router.beforeEach((to, from, next) => {
  if (to.meta.keeyAlive) {
    store.commit(ADD_KEEP_ALIVE_COMPONENT, to.name);
  }

  if (to.meta.title) {
    setDocumentTitle(to.meta.title);
  }
  next();
});

export default router;
