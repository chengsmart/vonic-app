import Vue from 'vue'
import Vonic from 'vonic'
import FastClick from 'fastclick'

// Routes
import routes from './common/router.config'
// 全局变量相关
import _Global_ from './common/variables'
import _Axios_ from 'axios'
// 挂载全局变量
Vue.prototype.GLOBAL = _Global_;
Vue.prototype.axios = _Axios_;


const beforeEach = (t) => {
    // 判断是否需要权限
    if(t.to.meta && t.to.meta.requireAuth){
        //TODO 在session中查看token
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

Vue.use(Vonic.app, {routes: routes, defaultRouteUrl: '/index/home'});

// 300ms 快速点击Hack
FastClick.attach(document.body);
