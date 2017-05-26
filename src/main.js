import Vue from 'vue'
import Vonic from 'vonic'
import FastClick from 'fastclick'

// Routes
import routes from './common/router.config'
import store from './store/store'
// 全局变量相关
import _Global_ from './common/variables'
import _Axios_ from './common/http' // 使用添加拦截器后的axios
// 挂载全局变量
Vue.prototype.GLOBAL = _Global_;
Vue.prototype.axios = _Axios_;

const beforeEach = (t) => {
    // 判断是否需要权限
    if(t.to.meta && t.to.meta.requireAuth){
        if (store.state.token) {  // 通过vuex state获取当前的token是否存在
            t.next();
        }
        t.redirect({
            path:'/login'
        })
    }else{
        t.next()
    }
}

/*const afterEach = (t) => {
    const to = t.to.path
    const from = t.from.path
    // [Custom Business] Never use history scrollTop when '/' => '/home'
    if (from == '/' && to == '/home') return

    const h = sess.get(t.to.path)
    if (h && h.scrollTop) {
        Vue.nextTick(() => {
            Vonic.app.pageContentScrollTop(h.scrollTop)
        })
    }
}*/

Vonic.app.setConfig('beforeEach',beforeEach)
// Vonic.app.setConfig('afterEach', afterEach)

Vue.use(Vonic.app, {routes: routes, defaultRouteUrl: '/index/home',store});

// 300ms 快速点击Hack
FastClick.attach(document.body);
