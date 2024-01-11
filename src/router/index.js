import { createRouter, createWebHistory } from 'vue-router'
import ResumeLayout from '@/layouts/ResumeLayout.vue'
import ProjectsLayout from '@/layouts/ProjectsLayout.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'resume',
            component: () => import('@/components/Resume.vue'),
            meta: { layout: ResumeLayout }
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('@/components/Projects.vue'),
            meta: { layout: ProjectsLayout },
            children: [
                {
                    path: '/vehicle-counting',
                    name: 'vehicle-counting',
                    component: () => import('@/components/projects/VehicleCounting.vue')
                },
                {
                    path: '/raspgpt',
                    name: 'raspgpt',
                    component: () => import('@/components/projects/RaspGpt.vue')
                },
                {
                    path: '/smart-army',
                    name: 'smart-army',
                    component: () => import('@/components/projects/SmartArmy.vue')
                }
            ]
        }
    ]
})

export default router