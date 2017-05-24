/**
 * Created by chengshuai on 2017/5/24.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */

import axios from 'axios'
import store from '../common/store'
import * as types from '../common/types'
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
                    console.log('.logout')
                    // 401 清除token信息并跳转到登录页面
                    store.commit(types.LOGOUT);
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}
                    })
            }
        }
        // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
        return Promise.reject(error.response.data)
    });

export default axios;