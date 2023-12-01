import { createRouter, createWebHistory } from 'vue-router'
import ResumeLayout from '@/layouts/ResumeLayout.vue'
import ProjectsLayout from '@/layouts/ProjectsLayout.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('@/components/Resume.vue'),
            meta: { layout: ResumeLayout }
        },
        {
            path: '/projects',
            name: 'projects',
            component: () => import('@/components/Projects.vue'),
            meta: { layout: ProjectsLayout }
        }
    ]
})

export default router