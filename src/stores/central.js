import { defineStore } from 'pinia'

export const data = defineStore('data', {
    state: () => ({
        curr_menu: 'resume'
    }),
    persist: true,
    getters: {
        getCurrMenu: (state) => {
            return state.curr_menu
        }
    },
    actions: {
        setCurrMenu(menu) {
            this.curr_menu = menu
        }
    }
})