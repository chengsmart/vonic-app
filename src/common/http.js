/**
 * Created by chengshuai on 2017/5/24.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */

import axios from 'axios'
import store from '../store/store'
import * as types from '../store/types'
import router from '../common/router.config'
import global from '../common/variables'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = global.base;

// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers.Authorization = `token ${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 401 清除token信息
                    store.commit(types.LOGOUT);
                    // 登录页面提示登录失败，其他页面跳转到登录页面
                    if($router._currentRoute.path === '/login'){
                        $toast.show('登录失败，请检查用户名密码');
                        return;
                    }else{
                        // TODO 传入当前页面的路由，进行跳转
                        $router.replace({
                            path:'/login'
                        })
                    }
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    });

export default axios;
