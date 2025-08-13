<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { Plus } from '@element-plus/icons-vue'

const router = useRouter();
const activeRoute = ref(router.currentRoute.value.path);

// 监听路由变化
router.afterEach((to) => {
  activeRoute.value = to.path;
});
</script>

<template>
  <div class="common-layout">
    
    <el-container class="main">
      <!-- 顶部导航栏 -->
      <el-header class="el-header">
        <!-- 网站标题/Logo -->
        <div class="header-left">
          <h1 class="site-title">Henan Bermuda Electronics Technology Co.Ltd</h1>
        </div>
        
        <!-- 右侧导航菜单 -->
        <nav class="header-right">
          <router-link 
            to="/home/personal" 
            class="nav-link"
            :class="{ 'active': activeRoute === '/personal' }"
          >
            <el-icon><Plus /></el-icon>
            <span>Self-introduction</span>
          </router-link>
          
         <a 
              href="https://shanghai-bermuda.com/"  
              class="nav-link"
              :class="{ 'active': activeRoute === '/company' }"
              target="_blank" 
              rel="noopener noreferrer"  
            >
              <el-icon><Plus /></el-icon>
              <span>company profile</span>
          </a>
          <router-link 
            to="/home/products" 
            class="nav-link"
            :class="{ 'active': activeRoute === '/products' }"
          >
            <el-icon><Plus /></el-icon>
            <span>products</span>
          </router-link>
        </nav>
      </el-header>
      <!-- 主内容区 -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer class="el-footer">
        <span>Leave important tasks to professionals</span>

      </el-footer>
    </el-container>
    
  </div>
</template>

<style scoped>
:root {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', Arial, sans-serif;
  scroll-behavior: smooth;
}

/* 顶部导航栏样式 */
.el-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(135deg, #1f2d3d 0%, #2c3e50 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  backdrop-filter: blur(10px);
}

/* 网站标题样式 */
.header-left {
  display: flex;
  align-items: center;
}

.site-title {
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.site-title:hover {
  color: #409eff;
  transform: translateY(-2px);
}

/* 导航菜单样式 */
.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  color: #fff;
  text-decoration: none;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transition: left 0.3s ease;
}

.nav-link:hover::before {
  left: 0;
}

.nav-link:hover {
  transform: translateY(-2px);
  color: #409eff;
}

.nav-link.active {
  background: rgba(64, 158, 255, 0.2);
  color: #409eff;
}

.nav-link .el-icon {
  font-size: 1.2em;
}

/* 主内容区 */
.main {
  margin-top: 60px;
  min-height: calc(100vh - 60px);
  display: flex;
}

.el-main {
  flex: 1;
  padding: 30px;
  background-color: #f0f2f5;
  min-height: calc(100vh - 60px);
  color: #3e3e3e;
  box-sizing: border-box;
}
.el-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(135deg, #1f2d3d 0%, #2c3e50 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 路由过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .el-header {
    padding: 0 15px;
  }
  
  .site-title {
    font-size: 1.2rem;
  }
  
  .nav-link {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
  
  .header-right {
    gap: 10px;
  }
  
  .el-main {
    padding: 15px;
  }
}

@media (max-width: 480px) {
  .site-title {
    font-size: 1rem;
  }
  
  .nav-link span {
    display: none;
  }
  
  .nav-link {
    padding: 8px;
  }
}
</style>
