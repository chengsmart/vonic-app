/**
 * Created by chengshuai on 2017/5/24.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */

import Vuex from 'vuex'
import Vue from 'vue'

const types = {
    LOGIN:'login',
    LOGOUT:'logout',
    TITLE:'title'
};

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        user: {},
        token: null,
        title: ''
    },
    mutations: {
        [types.LOGIN]: (state, data) => {
            localStorage.token = data;
            state.token = data;
        },
        [types.LOGOUT]: (state) => {
            localStorage.removeItem('token');
            state.token = null
        },
        [types.TITLE]: (state, data) => {
            state.title = data;
        }
    }
})