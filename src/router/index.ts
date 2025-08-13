import { createRouter, createWebHistory } from "vue-router"; // 引入路由
import { ElMessage } from 'element-plus'


// 定义路由表数组
const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("../components/Home.vue"), // 首页
    redirect: "/home/personal", // 添加这行：访问/home时自动跳转到/home/personal
    children: [
      {
        path: 'personal',
        component:  () => import("../views/Personal.vue") // 个人中心
      },
      
      {
        path: 'company',
        component:  () => import("../views/Company.vue") // 公司简介
      },
      {
        path: 'products',
        component:  () => import("../views/Products.vue") // 产品中心
      }
    ]
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
  // 配置滚动行为，页面切换时自动滚动到顶部
  scrollBehavior() {
    return { top: 0 }
  }
})

// 可以添加全局路由守卫
router.beforeEach((to, from, next) => {
  // 这里可以添加路由跳转前的逻辑，例如权限验证
  next()
})

router.afterEach((to) => {
  // 路由跳转后的逻辑，例如显示提示信息
  if (to.name) {
    ElMessage.success(`已进入页面`)
  }
})

// 导出路由实例
export default router
    