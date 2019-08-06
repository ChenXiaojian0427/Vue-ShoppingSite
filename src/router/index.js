import Vue from 'vue';
import router from 'vue-router';
import Vmall from '@/components/Vmall';
import MyCart from '@/components/MyCart';

Vue.use(router);

export default new router({
  routes: [
    {
      path: '/',
      component: Vmall
    },
    {
    	path: '/vmall',
      component: Vmall
    },
    {
    	path: '/my-cart',
      component: MyCart
    }
  ]
})