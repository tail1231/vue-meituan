import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Detail from './views/Detail.vue'


Vue.use(Router)

let routes = [{
        path: '/',
        component: () => import('./views/Home.vue')
    },
    {
        path: '/list/:id',
        component: () => import('./views/List.vue')
    },
    {
        path: '/detail/:id',
        component: () => import('./views/Detail.vue')
    }
]

//定义路由
let router = new Router({
    routes
});
//全局监听，所有路由变化都会监听到
// router.beforeEach((route, oldRoute, next) => {
//     console.log(route, oldRoute);
//     next();
// })



export default router;