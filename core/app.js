/**
 * @file entry
 * @author kamyochae(1465678596@qq.com)
 */

import Vue from 'vue';
import Meta from 'vue-meta'; 

import VueHtml5Editor from 'vue-html5-editor'
Vue.use(VueHtml5Editor,options);

import {createRouter} from '@/.lavas/router';
import {createStore} from '@/.lavas/store';
import AppComponent from './App.vue';
import Vuetify from 'vuetify';
import '../static/font/iconfont.css'
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.use(Meta);

Vue.use(Vuetify);

Vue.config.productionTip = false;

export function createApp() {
    let router = createRouter();
    let store = createStore();
    let App = Vue.extend({
        router,
        store,
        ...AppComponent
    });
    return {App, router, store};
}

if (module.hot) {
    module.hot.accept();
}
