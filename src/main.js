import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

import App from './App.vue';
import store from './store';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    store,
}).$mount('#app');
