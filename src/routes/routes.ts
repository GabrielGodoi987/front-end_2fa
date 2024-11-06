import { createWebHashHistory, createRouter} from "vue-router";



const route = [
    {
        path: '/',
        component: () => import('../pages/LoginPage.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    route
})