import { defineStore } from 'pinia'

export const projects = defineStore('projects', {
    state: () => ({
        project_list: [
            {
                'identifier': 'vehicle-counting',
                'card_img': '/assets/img/vehicle_counting/system_architecture.png',
                'card_title': 'FCN-BLA 모델에 기반한 교통량 분석 시스템',
                'card_tag': ['HTML', 'Javascript', 'Python', 'Express.js', 'Flask'],
                'card_description': '국가 교통 정보 센터(ITS)의 OpenAPI를 활용한 실시간 교통량 분석 시스템',
                'card_view_enable': true
            },
            {
                'identifier': 'raspgpt',
                'card_img': '/assets/img/rasp_gpt/flowchart.png',
                'card_title': 'RaspGPT 스마트 스피커',
                'card_tag': ['Spring Boot', 'Python', 'Raspberry Pi'],
                'card_description': '라즈베리파이, ChatGPT를 활용한 스마트 스피커',
                'card_view_enable': true
            },
            {
                'identifier': 'smart-army',
                'card_img': '/assets/img/progress.png',
                'card_title': '지능형 스마트부대(1-3단계) 시범구축 사업',
                'card_tag': ['Spring Boot', 'PostgreSQL', 'Vue3'],
                'card_description': '',
                'card_view_enable': true
            }
        ],
        projects_info: {
            'vehicle-counting': {
                '제목': 'FCN-BLA 모델에 기반한 교통량 분석 시스템',
                '기간': '2021.09 ~ 2022.05',
                '발주처': '캡스톤 프로젝트',
                '기술 스택': ['HTML', 'Javascript', 'Express.js', 'Python'],
                '역할': 'Backend,  Frontend',
                '프로젝트 내용': '/public/assets/projects_md/vehicle_counting.md'
            },
            'raspgpt': {
                '제목': '라즈베리파이 & ChatGPT 스마트 스피커',
                '기간': '2021.09 ~ 2022.05',
                '발주처': '토이 프로젝트',
                '기술 스택': ['Python', 'EfficientWord-Net'],
                '역할': 'Backend',
                '프로젝트 내용': '/public/assets/projects_md/rasp_gpt.md'
            },
            'smart-army': {
                '제목': '지능형 스마트부대(1-3단계) 시범구축 사업',
                '기간': '2021.09 ~ 2022.05',
                '발주처': '육군 본부',
                '기술 스택': ['Spring Boot', 'Netty'],
                '역할': 'Backend, CI/CD',
                '프로젝트 내용': '/public/assets/projects_md/smart_army.md'
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