import { createRoute, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
]

const router = createRoute({
    history: createWebHistory(),
})