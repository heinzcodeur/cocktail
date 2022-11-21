import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "@/views/public/HomeView";
import Roger from "@/views/public/Roger";
import Page404 from "@/views/Page404";
//import PublicLayout from "@/views/public/Layout"


const routes = [

    /*{
        path: '/',
        name: 'public',
        component: PublicLayout,
        children: [
            { path: '/',name: 'home',component: HomeView},
            /*{ path:'/404',name: '404',component: Page404},
            { path: '/roger',name: 'roger',component: Roger},
            { path: '/about',name: 'about',component: () => import('../views/public/AboutView.vue')},
            { path:'/:pathMatch(.*)*',redirect:'/404'}
        ]
    },
    {
        path:'/:pathMatch(.*)*',redirect:'/404'
    }*/
    { path: '/',name: 'home',component: HomeView},
    { path:'/404',name: '404',component: Page404},
    { path: '/roger',name: 'roger',component: Roger},
    { path: '/about',name: 'about',component: () => import('../views/public/AboutView.vue')},
    {path:'/:pathMatch(.*)*',redirect:'/404'}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
