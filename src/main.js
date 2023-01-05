import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from "ant-design-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "ant-design-vue/dist/antd.css";


createApp(App).use(Antd).use(router).mount('#app')
