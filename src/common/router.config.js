/**
 * Created by chengshuai on 2017/5/24.
 * Email:chengshuai.tj@gmail.com
 * Author:Smart
 * Description:
 */

// Page Components
import Index from '../views/Index.vue'
import TabBarHome from '../views/index/Home.vue'
import TabBarCart from '../views/index/Cart.vue'
import TabBarList from '../views/index/List.vue'
import TabBarUser from '../views/index/User.vue'
import Login from '../views/Login.vue'

export default {
    '/index': {
        component: Index,
        subRoutes: {
            '/home': {
                component: TabBarHome,
                name:'home'
            },
            '/list': {
                component: TabBarList,
                name:'list'
            },
            '/cart': {
                component: TabBarCart,
                meta: {
                    requireAuth: true,
                },
                name:'cart'
            },
            '/user': {
                component: TabBarUser,
                meta: {
                    requireAuth: true,
                },
                name:'user'
            }
        }
    },
    '/login': {
        component: Login,
        name:'login'
    },
}