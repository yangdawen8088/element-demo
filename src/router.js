import Vue from 'vue'
import Route from 'vue-router'
import HelloWorld from './components/HelloWorld'
import A from './components/A'
// import B from './components/B'

Vue.use(Route)
const routes = [
    { path: '/hello-world', component: HelloWorld, meta: { title: 'hello-world' } },
    { path: '/a', component: A, meta: { title: 'A' } },
    // { path: '/b', component: B }
]
const router = new Route({ routes })
// Vue.mixin({
//     beforeCreate() {
//         if (this.$route.meta.title) {
//             document.title = this.$route.meta.title;
//         }
//         else {
//             document.title = '这是默认的标题';
//         }
//     }
// })
console.log('路由打印：', router);
router.beforeEach((to, from, next) => {
    console.log('beforeEach', to, from);
    if (to.meta.title) {
        document.title = to.meta.title;
    }
    else {
        document.title = '这是默认的标题';
    }
    next();
});
router.beforeResolve((to, from, next) => {
    console.log('beforeResolve', to, from);
    next();
});
router.afterEach((to, from) => {
    console.log('afterEach', to, from);
});
export default router