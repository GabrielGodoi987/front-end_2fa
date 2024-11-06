import { createWebHashHistory, createRouter, RouteRecordRaw } from "vue-router";
import LoginPage from "../pages/LoginPage.vue";



const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: LoginPage
    }
];

export const router = createRouter({
    history: createWebHashHistory(),
    routes
})