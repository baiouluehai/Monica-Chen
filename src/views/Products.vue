<script>
export default {
  data() {
    return {
      images: [
        { path: '/products/image1.jpg' },
        { path: '/products/image2.jpg' },
        { path: '/products/image3.jpg' },
        { path: '/products/image4.jpg' },
        { path: '/products/image5.jpg' },
        { path: '/products/image6.jpg' },
        { path: '/products/image7.jpg' },
        { path: '/products/image8.jpg' },
        { path: '/products/image9.jpg' },
        { path: '/products/image10.jpg' },
        { path: '/products/image11.jpg' },
        { path: '/products/image12.jpg' },
        { path: '/products/image13.jpg' }
      ]
    }
  }
}
</script>

<template>
  <div class="products-container">
    <!-- 标题区域 -->
    <div class="carousel-title">
      <div class="title-decoration"></div>
      <h2>Selected products</h2>
      <div class="title-decoration"></div>
    </div>

    <!-- 轮播组件 -->
    <el-carousel 
      :interval="3000" 
      type="card" 
      height="420px"
      indicator-position="outside"
      class="product-carousel"
    >
      <el-carousel-item 
        v-for="(image, index) in images" 
        :key="index" 
        class="carousel-item"
      >
        <div class="image-container">
          <img 
            :src="image.path" 
            class="carousel-image"
            @load="e => e.target.classList.add('image-loaded')"
          >
        </div>
      </el-carousel-item>
    </el-carousel>
    
    <!-- 带样式和链接的区域 -->
    <div class="more-info">
      <span>For more product information, please visit our company website</span>
      <a 
        href="https://shanghai-bermuda.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        class="company-link"
      >
        shanghai-bermuda.com
      </a>
    </div>
    
  </div>
</template>

<style scoped>
/* 容器样式 */
.products-container {
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* 标题样式 */
.carousel-title {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
}

.carousel-title h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  padding: 0 1rem;
}

.title-decoration {
  flex: 1;
  height: 2px;
  background: linear-gradient(to right, transparent, #e53e3e, transparent);
  max-width: 150px;
}

/* 轮播样式 */
.product-carousel {
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 2rem; /* 增加轮播与下方文字的间距 */
}

.carousel-item {
  transition: transform 0.5s ease;
}

.carousel-item:hover {
  transform: translateY(-5px);
}

.image-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.8s ease;
  opacity: 0;
}

.image-loaded {
  opacity: 1;
}

/* 更多信息区域样式 */
.more-info {
  text-align: center;
  padding: 1.5rem 0;
  color: #555;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap; /* 适配小屏幕换行 */
}

/* 链接样式 */
.company-link {
  color: #e53e3e;
  text-decoration: none;
  font-weight: 600;
  border-bottom: 2px solid #e53e3e;
  padding-bottom: 2px;
  transition: all 0.3s ease;
}

.company-link:hover {
  color: #c02626;
  border-color: #c02626;
  transform: translateX(3px);
}

/* 指示器样式调整 */
::v-deep .el-carousel__indicators--outside {
  margin-top: 1.5rem;
}

::v-deep .el-carousel__indicator.is-active button {
  background-color: #e53e3e;
}

::v-deep .el-carousel__item--card {
  border-radius: 8px;
  overflow: hidden;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .carousel-title h2 {
    font-size: 1.5rem;
  }
  
  .more-info {
    font-size: 1rem;
    padding: 1rem 0.5rem;
  }
}
</style>