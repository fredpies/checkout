import { createRouter, createWebHistory } from 'vue-router'
import ExtrasView from '@/views/ExtrasView.vue';
import RouteNames from '@/router/RouteNames';

const routes = [
    { path: '/', name: RouteNames.EXTRAS_VIEW, component: ExtrasView },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})