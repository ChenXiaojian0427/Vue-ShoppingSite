// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import VueResource from 'vue-resource';
import App from './App.vue';

//Vue.config.productionTip = true;
Vue.config.productionTip = false;


Vue.use(VueResource);

/* Filters */
Vue.filter("currency", function(value) {
	var price = parseFloat(value).toFixed(2);
	var reg = /\d{1,3}(?=(\d{3})+$)/g;
	var currency = price.toString().replace(/^(\d+)((\.\d+)?)$/,function(s,s1,s2){return s1.replace(reg,"$&,")+s2;}); 
	return "￥"+currency;
});

/* 该变量在所有组件中可用 */

Vue.prototype.$product = new Vue({
	data() {
		return {
			productIds: []
		}
	}
});

/* eslint-disable no-new */
new Vue({
  router,
  render:h=>h(App),
}).$mount('#app');