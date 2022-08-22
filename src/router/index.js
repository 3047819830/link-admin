import { createWebHashHistory, createRouter } from "vue-router";

export const constantRoutes = [
    {
        path: "/test",
        component: () => import("@/views/test.vue"),
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
