import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routers = [
    {
        path: '/one',
        name: '首页',
        component: 'pageOne',
    },
    {
        path: '/two',
        name: '首页',
        component: 'pageTwo',
    },
    {
        path: '*',
        name: '首页',
        component: 'pageOne',
    },
];

const loadView = (name) => () =>
    import(/* webpackChunkName: "[request]" */ `@/views/${name}/${name}`);

routers.map((r, i) => {
    routers[i].component = loadView(r.component);
});

export default new VueRouter({
    routes: routers,
});
