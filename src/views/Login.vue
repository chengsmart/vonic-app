<template>
    <div class="page has-navbar" v-nav="{title: '登录', showBackButton: true}">
        <div class="page-content padding padding-top">
            <von-input
                    type="text"
                    :value.sync="username"
                    placeholder="用户名/手机/邮箱"
                    label="用户名">
            </von-input>
            <von-input
                    type="password"
                    :value.sync="passwd"
                    placeholder="密码"
                    label="密码">
            </von-input>
            <md-button class="button button-positive button-block" @click="login()">登录</md-button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                username: '',
                passwd: ''
            }
        },
        methods:{
            login () {
                this.axios({
                    method: 'post',
                    url: this.GLOBAL.rest.login,
                    data:{
                        username:this.username,
                        password:this.passwd
                    },
                    transformRequest: [function (data) {
                        // 整理你的请求体为form形式
                        let ret = '';
                        for (let item in data) {
                            ret += encodeURIComponent(item) + '=' + encodeURIComponent(data[item]) + '&'
                        }
                        return ret
                    }],
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                })
                    .then(function (response) {
                        console.log(response);
                        $toast.show('登录用户' + response.data.loginName + '，请打开F12查看')
//                      $router.go({ path: '/about' })
                    });
            }
        }
    }
</script>