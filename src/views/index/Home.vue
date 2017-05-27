<template>
    <div class="page has-navbar has-tabbar" v-nav="{title: '首页'}" v-tabbar-menu-index="0">
        <div class="page-content padding-top">
            <p class="text-center">Home Page</p>
            <p class="text-center">{{name}}</p>
            <div style="text-align: center; padding: 100px 40px">
                <md-button class="button button-assertive" @click="back()">
                    返回按钮
                </md-button>

                <md-button class="button button-balanced" v-link="{path:'/login'}">
                    登录
                </md-button>
            </div>
        </div>
    </div>
</template>

<script>
    import {MdButton} from 'vonic'
    export default {
        data() {
            return {
                name:'未登录'
            }
        },
        components: {
            MdButton
        },
        methods: {
            back() {
                console.log($router);
                $router.replace({
                    path: '/login'
                })
            }
        }
    }

</script>
