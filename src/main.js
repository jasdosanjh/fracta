import Vue from 'vue';
import App from './App.vue';

import vueSmoothScroll from 'vue2-smooth-scroll';
Vue.use(vueSmoothScroll);

import VueScrollReveal from 'vue-scroll-reveal';
Vue.use(VueScrollReveal);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
