import './css/normalize.css';
import './css/skeleton.css';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import _ from 'lodash';
import Vue from 'vue';
import App from './App.vue';

// Import Components
import Home from './components/Home/Home.vue';
import Details from './components/Details/Details.vue';
import Header from './components/Header/Header.vue';

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.component('main-header', Header);

const routes = [
    { path: '/', component: Home},
    { path: '/details/:term/:crn', component: Details}
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
