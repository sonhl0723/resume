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
                    component: () => import('@/components/projects/VehicleCounting.vue'),
                    meta: { layout: ProjectLayout }
                },
                {
                    path: 'raspgpt',
                    name: 'raspgpt',
                    component: () => import('@/components/projects/RaspGpt.vue'),
                    meta: { layout: ProjectLayout }
                },
                {
                    path: 'smart-army',
                    name: 'smart-army',
                    component: () => import('@/components/projects/SmartArmy.vue'),
                    meta: { layout: ProjectLayout }
                }
            ]
        }
    ]
})

export default router