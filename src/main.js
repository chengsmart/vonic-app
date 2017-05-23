import Vue from 'vue'
import Vonic from 'vonic'
import FastClick from 'fastclick'

// Page Components
import Index from './views/Index.vue'
import TabBarHome from './views/index/Home.vue'
import TabBarCart from './views/index/Cart.vue'
import TabBarList from './views/index/List.vue'
import TabBarUser from './views/index/User.vue'
import Login from './views/Login.vue'

import _global_ from './common/variables'

// 全局变量
Vue.prototype.GLOBAL = _global_;

// Routes
const routes = {

    '/index': {
        component: Index,
        subRoutes: {
            '/home': {
                component: TabBarHome
            },
            '/list': {
                component: TabBarList
            },
            '/cart': {
                component: TabBarCart
            },
            '/user': {
                component: TabBarUser
            }
        }
    },
    '/login': {
        component: Login
    },
};

Vue.use(Vonic.app, {routes: routes, defaultRouteUrl: '/index/home'});

// 300ms 快速点击Hack
FastClick.attach(document.body);
