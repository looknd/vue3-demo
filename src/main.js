import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import { Button,Space } from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
createApp(App).use(createPinia()).use(router).use(Button).use(Space).mount('#app')
