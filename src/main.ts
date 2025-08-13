import { createApp } from 'vue'
//import './style.css'
import App from './App.vue'
import ElementPlus from 'element-plus'  // 引入element-plus
import 'element-plus/dist/index.css' // 引入element-plus样式
import zhCn from 'element-plus/es/locale/lang/zh-cn' // 中文
import router from './router'

const app = createApp(App) // 创建vue实例
app.use(router) // 使用路由
app.use(ElementPlus, {locale: zhCn})
app.mount('#app') // 挂载到index.html中
