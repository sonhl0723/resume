import { defineStore } from 'pinia'

export const projects = defineStore('projects', {
    state: () => ({
        data: [
            {
                'identifier': 'vehicle-counting',
                'card_img': '../assets/img/vc_card.png',
                'card_title': 'FCN-BLA 모델에 기반한 교통량 분석 시스템',
                'card_tag': ['HTML', 'Javascript', 'Python', 'Express.js', 'Flask'],
                'card_description': '국가 교통 정보 센터(ITS)의 OpenAPI를 활용한 실시간 교통량 분석 시스템',
                'card_view_enable': true
            },
            {
                'identifier': 'raspgpt',
                'card_img': '../assets/img/progress.png',
                'card_title': 'RaspGPT 스마트 스피커',
                'card_tag': ['Spring Boot', 'Python', 'Raspberry Pi'],
                'card_description': '라즈베리파이, ChatGPT를 활용한 스마트 스피커',
                'card_view_enable': true
            },
            {
                'identifier': 'smart-army',
                'card_img': '../assets/img/progress.png',
                'card_title': '지능형 스마트부대(1-3단계) 시범구축 사업',
                'card_tag': ['Spring Boot', 'PostgreSQL', 'Vue3'],
                'card_description': '',
                'card_view_enable': true
            }
        ]
    }),
    getters: {
        getProjectList: (state) => {
            return state.data
        }
    },
    actions: {}
})