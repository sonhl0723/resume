import { createRouter, createWebHistory } from 'vue-router'
import ProjectLayout from '@/layouts/ProjectLayout.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'resume',
            component: () => import('@/components/Resume.vue'),
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('@/components/Project.vue'),
            children: [
                {
                    path: 'vehicle-counting',
                    name: 'vehicle-counting',
                    meta: { layout: ProjectLayout }
                },
                {
                    path: 'raspgpt',
                    name: 'raspgpt',
                    meta: { layout: ProjectLayout }
                },
                {
                    path: 'smart-army',
                    name: 'smart-army',
                    meta: { layout: ProjectLayout }
                }
            ]
        }
    ]
})

export default router