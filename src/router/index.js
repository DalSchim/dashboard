import { createRouter, createWebHistory } from 'vue-router';
import Login from "@/views/auth/LoginView.vue";
import NotView from "@/views/NotView.vue";
import DashBoard from "@/views/Admin/DashBoardLayout.vue"; // Importez le composant MachineView

const routes = [
    {
        path: '/',
        redirect: '/login',
        children: [
            {
                path: '/login',
                name: 'login',
                component: Login,
                beforeEnter: (to, from, next) => {
                    const token = localStorage.getItem('token');
                    if (token) {
                        next('/dashboard/home');
                    } else {
                        next();
                    }
                },
            },
        ],
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        redirect: 'dashboard/home',
        component: DashBoard,
        beforeEnter: (to, from, next) => {
            const token = localStorage.getItem('token');
            if (!token) {
                next('/login');
            } else {
                next();
            }
        },
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import(/* webpackChunkName: "about" */ '@/views/Admin/pages/HomeView.vue')
            },
            {
                path: 'server',
                name: 'server',
                component: () => import(/* webpackChunkName: "about" */ '@/views/Admin/pages/server/ServeurView.vue')
            },
            {
                path: 'PVE',
                name: 'PVE',
                component: () => import(/* webpackChunkName: "about" */ '@/views/Admin/pages/PVE/PveView.vue')
            },
            {
                path: 'Etat',
                name: 'Etat',
                component: () => import(/* webpackChunkName: "about" */ '@/views/Admin/pages/EtatView.vue')
            },
            {
                path: 'action',
                name: 'action',
                component: () => import(/* webpackChunkName: "about" */ '@/views/Admin/pages/action/ActionView.vue')
            },
            {
                path: 'annuaire',
                name: 'annuaire',
                component: () => import('@/views/Admin/pages/annuaire/AnnuaireView.vue')
            },
            {
                path: 'cloud',
                name: 'profil',
                component: () => import('@/views/Admin/pages/CloudView.vue')
            },
            {
                path: 'autorisation',
                name: 'autorisation',
                component: () => import('@/views/Admin/pages/autorisation/AutorView.vue')
            },
            {
                path: 'testview',
                name: 'testview',
                component: () => import('@/views/Admin/pages/TestView.vue')
            },
            {
                path: 'securité',
                name: 'securité',
                component: () => import('@/views/Admin/pages/securite/SecuriteView.vue')
            },
            {
                path: 'jobs',
                name: 'jobs',
                component: () => import('@/views/Admin/pages/JobsView.vue')
            },
            {
                path: 'machine/:etab/:cn', // Route pour la vue Machine avec un paramètre dynamique
                name: 'MachineView',
                component: () => import('@/views/Admin/pages/MachineView.vue'), // Importez le composant MachineView
                props: true
            },
        ],
        meta: { requiresAuth: true },
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
