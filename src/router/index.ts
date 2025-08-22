import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import NotFoundView from '../views/NotFoundView.vue';
import HomeView from '../views/HomeView.vue';
import ProjectDetailView from '../views/ProjectDetailView.vue';
import AboutView from '../views/AboutView.vue';

const routes: Array<RouteRecordRaw> = [
    {

        path: '/',
        name: 'home',
        component: HomeView,
    },
    {

        path: '/sobre',
        name: 'about',
        component: AboutView
    },
    {

        path: '/projeto/:id',
        name: 'projectDetail',
        component: ProjectDetailView,
        props: true 
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFoundView
    }
];

const redirectPath = sessionStorage.getItem('redirectPath');
if (redirectPath) {
    sessionStorage.removeItem('redirectPath');
    history.replaceState(null, '', redirectPath);
}

const router = createRouter({

    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { top: 0 };
    },
});

export default router;