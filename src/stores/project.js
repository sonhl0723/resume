import { defineStore } from 'pinia'

export const projects = defineStore('projects', {
    state: () => ({
        project_list: [
            {
                'identifier': 'vehicle-counting',
                'card_img': '/assets/img/vehicle_counting/system_architecture.png',
                'card_title': 'FCN-BLA 모델에 기반한 교통량 분석 시스템',
                'card_tag': ['HTML', 'Python', 'Express.js', 'Flask'],
                'card_view_enable': true
            },
            {
                'identifier': 'raspgpt',
                'card_img': '/assets/img/rasp_gpt/flowchart.png',
                'card_title': 'RaspGPT 스마트 스피커',
                'card_tag': ['Spring Boot', 'Python', 'Ubuntu 20.04'],
                'card_view_enable': true
            },
            {
                'identifier': 'smart-army',
                'card_img': '/assets/img/progress.png',
                'card_title': '지능형 스마트부대(1-3단계) 시범구축 사업',
                'card_tag': ['Spring Boot', 'PostgreSQL', 'Vue3', 'Wildfly'],
                'card_view_enable': true
            }
        ],
        projects_info: {
            'vehicle-counting': {
                '제목': 'FCN-BLA 모델에 기반한 교통량 분석 시스템',
                '기간': '2021.09 ~ 2022.05',
                '발주처': '캡스톤 프로젝트',
                '기술 스택': ['HTML', 'Javascript', 'Express.js', 'Python'],
                '역할': 'Backend,  Frontend'
            },
            'raspgpt': {
                '제목': '라즈베리파이 & ChatGPT 스마트 스피커',
                '기간': '2021.09 ~ 2022.05',
                '발주처': '토이 프로젝트',
                '기술 스택': ['Python', 'EfficientWord-Net', 'ChatGPT OpenAPI'],
                '역할': 'Backend'
            },
            'smart-army': {
                '제목': '지능형 스마트부대(1-3단계) 시범구축 사업',
                '기간': '2021.10 ~ 2022.05',
                '발주처': '육군 본부',
                '기술 스택': ['Spring Boot', 'PostgreSQL', 'Spring Security', 'Linux(rocky linux8.9)', 'Wildfly-26.1.3', 'Gitlab', 'Jenkins', 'MyBatis'],
                '역할': 'Backend, CI/CD'
            }
        }
    }),
    getters: {
        getProjectList: (state) => {
            return state.project_list
        },
        getProjectInfo: (state) => {
            return state.projects_info
        }
    },
    actions: {}
})