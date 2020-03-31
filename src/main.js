import Vue from 'vue';
import './plugins/fontawesome';
import App from './App.vue';
import router from './router';

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

import 'jquery';
import 'bootstrap';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faHome, faShoppingCart, faUserCircle, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faInstagram, faGithub, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'

library.add(faHome, faShoppingCart, faUserCircle, faCaretUp)
library.add(faFacebookSquare, faInstagram, faGithub, faTelegramPlane)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false;


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')