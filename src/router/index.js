import { createWebHashHistory, createRouter } from "vue-router";

export const constantRoutes = [
    {
        path: "/test",
        name: 'test',
        component: () => import("@/views/test.vue"),
    },
    {
        path: '/',
        name: 'index',
        component: () => import("@/views/index.vue"),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import("@/views/login.vue"),
    }
];


const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { top: 0 };
        }
    }
});

export default router;
