import {createApp} from 'vue';
import './style.css';
import App from './App.vue';
import router from './router'

import ElementPlus from 'element-plus'
import '@/assets/scss/element/index.scss'
import koKr from 'element-plus/dist/locale/ko.mjs'

import '@/assets/scss/global.scss'

const app = createApp(App)

app.use(router)
app.use(ElementPlus, { locale: koKr })

app.mount('#app');
