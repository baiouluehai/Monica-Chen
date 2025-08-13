<script>
import { onMounted, ref } from 'vue';
import { User, Phone, Location, Message, EditPen, Document } from '@element-plus/icons-vue'
export default {
  data() {
    return {
      isLoading: true,
      currentDate: new Date().toLocaleDateString(),
      activeNav: 'about',
      scrolled: false,
      // 个人信息 - 汽车零件销售
      personalInfo: {
        name: "Monica Chen",
        age: 32,
        occupation: "I am a supplier of original connectors and terminals",
        location: "ShangQiu,HeNan, China",
        email: "monica@co-bermuda.com",
        phone: "+86 173 4470 9980",
        introduction: "Monica has been working in the field of automotive connector and terminal sales for 8 years. With her keen market acumen and solid customer service skills, she has been the team's 'deal-making champion' for six consecutive quarters.In the field of connector sales, she not only exceeded the company's annual target by 20%,but also pushed the customer repurchase rate to 1.5 times the industry average through customized solutions, becoming a benchmark case for the team to tackle high-net-worth customers."
      },
      // 技能数据 - 销售相关技能
      skills: [
        { name: "Client Relationship", percentage: 99, animated: false },
        { name: "Negotiation", percentage: 94, animated: false },
        { name: "Product Knowledge", percentage: 92, animated: false },
        { name: "Sales Strategy", percentage: 90, animated: false },
        { name: "Market Analysis", percentage:95, animated: false }
      ],
      // 项目数据 - 销售业绩和项目
      projects: [
        {
          id: 1,
          title: "Enhancing customer value",
          description: "By exploring customer needs, we help customers address their core pain points (such as reducing costs and improving efficiency), achieving a win-win situation for both customer business growth and our own sales goals. This approach earns high recognition from customers, reflected in things like thank-you letters and industry case recommendations.",
          image: "https://picsum.photos/id/111/600/400",
          tags: ["win-win situation"]
        },
        {
          id: 2,
          title: "Team and personal honors",
          description: "Won titles such as 'Sales Champion' and 'Gold Medal Salesperson' multiple times; led the team to break through performance bottlenecks and nurtured newcomers to become key players; personal cases were included in the company's sales training materials, becoming a benchmark in the industry.",
          image: "https://picsum.photos/id/133/600/400",
          tags: ["Sales Champion"]
        },
        {
          id: 3,
          title: "Exceeding performance targets",
          description: "For instance, consistently exceeding sales targets across multiple consecutive periods, even breaking team/company historical records; achieving performance growth against the market downturn, far exceeding the industry average.",
          image: "https://picsum.photos/id/174/600/400",
          tags: ["breaking team/company historical records"]
        }
      ],
      // 时间线数据 - 销售相关经历
      timeline: [
       
        {
          date: "2024",
          title: "Year 8: Value Upgrade Period",
          content: "Promoted to Sales Manager, responsible for the Asian customer segment, with the team's annual sales exceeding $1 million, a year-on-year increase of 45%. Extract the 'full lifecycle service system for major clients' and incorporate it into the company's training materials, promoting a 12% increase in the conversion rate of major clients throughout the company. Core Value: Transform from individual performance contributors to team strategy makers and experience providers, becoming the core backbone of the company's sales system."
        },
        {
          date: "2022-2023",
          title: "Year 6-7: Deep cultivation and breakthrough period",
          content: "In 2022, transferred to the Key Account Department, focusing on enterprise level procurement clients, successfully signed an annual framework cooperation of $500000 (one of the company's largest single orders of the year). In 2023, led cross departmental collaboration and customized 'supply chain optimization solutions' for three benchmark clients, driving a 60% increase in their annual procurement volume. Achieved top 1 personal performance in the company and won the 'Annual Sales Champion'. Core breakthrough: shifting from regional management to deep operation of high net worth clients, possessing the ability to negotiate complex projects and integrate resources."
        },
        {
          date: "2020-2021",
          title: "Year 4-5: Performance Challenge Period",
          content: "In 2020, promoted to sales supervisor and led a team of three to be responsible for the Indian market, resulting in a 35% year-on-year increase in annual sales. In 2021, in response to market fluctuations, innovative sales models were implemented to increase customer repurchase rates to 40%, and the team exceeded the annual target by 8%. Core achievement: Led the team to break through million dollar sales for the first time, forming a replicable 'ustomer stickiness maintenance methodology'."
        },
        {
          date: "2018-2019",
          title: "Year 2-3: Ability Enhancement Period",
          content: "In 2018, we deeply cultivated regional markets, optimized customer visit frequency, and promoted a 20% increase in monthly sales of key customers, earning the title of 'Quarterly Newcomer Star'. In 2019, we expanded our online channel connections and led the first community group buying cooperation project in the region. Our monthly sales exceeded $100000, exceeding the annual target by 15%. • Core growth: Master customer segmentation maintenance skills, possess basic negotiation and resource coordination abilities."
        },
        {
          date: "2017",
          title: "Year 1: Beginner Accumulation Period",
          content: " Join the sales department of Henan Bermuda Electronic Technology Co., Ltd. and start as a grassroots sales representative Quickly grasp product knowledge and basic sales processes, achieve 80% of personal targets in the first quarter, and reach annual basic goals by the end of the year. Core breakthrough: Successfully developed 6 new end customers and initially established customer communication awareness."
        }
      ],
      // 联系方式
      contactMethods: [
        { method: "Email", content: "monica@co-bermuda.com", icon: "el-icon-message" },
        { method: "Phone", content: "+86 173 4470 9980", icon: "el-icon-phone" },
        { method: "WhatsApp", content: "+86 173 4470 9980", icon: "el-icon-chat-round" },
        { method: "Office", content: "No. 115, Building 41, Yongjingtai, Hengtong Road, Liangyuan District, Shangqiu ,476000 Henan.", icon: "el-icon-location" }
      ],
      // 兴趣爱好
      hobbies: ["Mountain climbing", "swimming", "singing", "Reading Business Books", "Networking"],
      // 统计数据 - 销售业绩
      stats: [
        { name: "Clients", value: "120+", icon: "el-icon-user" },
        { name: "Experience", value: "8 years", icon: "el-icon-time" },
        { name: "Sales Volume", value: "$12000000+", icon: "el-icon-money" },
        { name: "Awards", value: 7, icon: "el-icon-trophy" }
      ],
      // 表单数据
      contactForm: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  mounted() {
    // 模拟数据加载
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
    
    // 监听滚动事件
    window.addEventListener('scroll', this.handleScroll);
    
    // 初始化观察器，用于检测元素是否进入视口
    this.initIntersectionObserver();
    
    // 添加页面载入动画
    this.pageLoadAnimation();
  },
  beforeUnmount() {
    // 移除滚动事件监听
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    // 处理滚动事件
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
    
    // 初始化交叉观察器，用于检测元素是否进入视口
    initIntersectionObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // 元素进入视口，添加动画类
            entry.target.classList.add('animate-in');
            
            // 如果是技能条，启动动画
            if (entry.target.classList.contains('skills-card')) {
              this.skills.forEach((skill, index) => {
                setTimeout(() => {
                  this.skills[index].animated = true;
                }, index * 200); // 错开动画时间，创造顺序效果
              });
            }
            
            // 停止观察已动画的元素
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      
      // 观察所有需要动画的元素
      document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
      });
    },
    
    // 平滑滚动到指定区域
    scrollToSection(sectionId) {
      this.activeNav = sectionId;
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          top: element.offsetTop - 80, // 减去导航栏高度
          behavior: 'smooth'
        });
      }
    },
    
    // 处理表单提交
    handleSubmit() {
      this.$message.success('Message sent successfully! I will contact you soon.');
      // 重置表单
      this.contactForm = {
        name: '',
        email: '',
        message: ''
      };
    },
    
   
    
    // 页面载入动画
    pageLoadAnimation() {
      document.body.classList.add('page-loaded');
    }
  }
};
</script>

<template>
  <div class="personal-homepage">
   

    <!-- 页面标题/英雄区 -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Hello, I'm {{ personalInfo.name }}</h1>
        <p class="hero-subtitle">{{ personalInfo.occupation }}</p>
        <div class="hero-cta">
          <el-button type="primary" @click="scrollToSection('contact')" class="btn-animated">
            <i class="el-icon-phone"></i> Contact Me
          </el-button>
          <el-button type="default" @click="scrollToSection('projects')" class="btn-animated">
            <i class="el-icon-folder-opened"></i> My Achievements
          </el-button>
        </div>
      </div>
    </div>

    <!-- 主要内容区域 - 改为上下结构 -->
    <div class="main-content container">
      <!-- 上方：原左侧栏内容 -->
      <div class="top-section">
        <el-card class="profile-card animate-on-scroll">
        <div class="profile-header">
                <img
                  src="/person/person.png"
                  class="profile-image"
                  alt="Profile picture of {{ personalInfo.name }}"
                />
                <div class="profile-info">
                  <h2 class="profile-name">{{ personalInfo.name }}</h2>
                  <p class="profile-occupation">{{ personalInfo.occupation }}</p>
                  <div class="profile-details">
                    <p v-for="(detail, index) in [
                      {icon: 'el-icon-user', label: 'Experience', value: '8 years'},
                      {icon: 'el-icon-location', label: 'Location', value: personalInfo.location},
                      {icon: 'el-icon-company', label: 'Current', value: 'Henan Bermuda Electronics Technology Co.Ltd'}
                    ]" :key="index">
                      <i :class="detail.icon"></i> {{ detail.label }}: {{ detail.value }}
                    </p>
                  </div>
                  <el-button type="primary" class="contact-btn" @click="scrollToSection('contact')">
                    <i class="el-icon-message"></i> Contact Me
                  </el-button>
                </div>
              </div>
        


        <div class="stats-container animate-on-scroll">
           <el-card class="stat-card" v-for="stat in stats" :key="stat.name">
                  <div class="stat-content">
                    <i :class="stat.icon + ' stat-icon'" @mouseover="this.$refs[stat.name].$el.classList.add('pulse')"></i>
                    <div>
                      <p class="stat-value" ref="{{stat.name}}">{{ stat.value }}</p>
                      <p class="stat-name">{{ stat.name }}</p>
                    </div>
                  </div>
          </el-card>
        </div>
        <div class="hobbies-container animate-on-scroll">

          <h3>Hobbies & Interests</h3>
                  <div class="hobbies-tags">
                    <el-tag
                      v-for="(hobby, index) in hobbies"
                      :key="index"
                      type="info"
                      effect="light"
                      class="hobby-tag"
                    >
                      {{ hobby }}
                    </el-tag>
                  </div>
        </div>
</el-card>
      </div>

      <!-- 下方：原右侧主内容 -->
      <div class="bottom-section">
        <div class="content-cards">
          <!-- 个人简介 -->
          <el-card id="about" class="intro-card animate-on-scroll">
            <div slot="header">
              <h3>About Me</h3>
            </div>
            <div class="intro-content">
              <el-descriptions column="1" border>
                <el-descriptions-item>
                  <template #label>Professional Profile</template>
                  {{ personalInfo.introduction }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template #label>Specialties</template>
                  Flexible adaptability, Strong communication and empathy skills, Customer relationship maintenance awareness
                </el-descriptions-item>
                <el-descriptions-item>
                  <template #label>Last Updated</template>
                  {{ currentDate }}
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </el-card>

          <!-- 技能进度条 - 带动画效果 -->
          <el-card id="skills" class="skills-card animate-on-scroll">
            <div slot="header">
              <h3>Professional Skills</h3>
            </div>
            <div class="skill-item" v-for="(skill, index) in skills" :key="skill.name">
              <div class="skill-info">
                <span>{{ skill.name }}</span>
                <span>{{ skill.percentage }}%</span>
              </div>
              <el-progress 
                :percentage="skill.animated ? skill.percentage : 0" 
                :stroke-width="8" 
                :stroke-linecap="'round'"
                :stroke="skill.percentage > 90 ? '#21b573' : '#1890ff'"
              />
            </div>
          </el-card>

          <!-- 项目展示 - 带悬停和点击效果 -->
          <el-card id="projects" class="projects-card animate-on-scroll">
            <div slot="header">
              <h3>Key Achievements</h3>
            </div>
            <div class="projects-container">
              <el-card 
                class="project-card" 
                v-for="project in projects" 
                :key="project.id"
               
              >
                <div class="project-image-container">
                  <img 
                    :src="project.image" 
                    :alt="project.title" 
                    class="project-image"
                  />
                </div>
                <div class="project-info">
                  <h4 class="project-title">{{ project.title }}</h4>
                  <p class="project-description">{{ project.description }}</p>
                  <div class="project-tags">
                    <el-tag 
                      v-for="(tag, index) in project.tags" 
                      :key="index"
                      size="small"
                      effect="plain"
                    >
                      {{ tag }}
                    </el-tag>
                  </div>
                </div>
                
              </el-card>
            </div>
          </el-card>

          <!-- 个人动态时间线 - 带进入动画 -->
          <el-card id="timeline" class="timeline-card animate-on-scroll">
            <div slot="header">
              <h3>Career Timeline</h3>
            </div>
            <el-timeline>
              <el-timeline-item
                v-for="(item, index) in timeline"
                :key="index"
                :timestamp="item.date"
                placement="top"
                class="timeline-item"
              >
                <el-card class="timeline-content">
                  <h4>{{ item.title }}</h4>
                  <p>{{ item.content }}</p>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </el-card>

          <!-- 联系表单 - 带交互反馈 -->
          <el-card id="contact" class="contact-form-card animate-on-scroll">
            <div slot="header">
              <h3>Contact Me</h3>
            </div>
            <div class="contact-container">
              
              <!-- 联系方式 -->
              <div class="contact-info">
                <h4>Contact Information</h4>
                <div class="contact-methods">
                  <div 
                    class="contact-method" 
                    v-for="(method, index) in contactMethods" 
                    :key="index"
                  >
                    <i :class="method.icon + ' contact-icon'"></i>
                    <div>
                      <span class="method-name">{{ method.method }}</span>
                      <span class="method-content">{{ method.content }}</span>
                    </div>
                  </div>
                </div>
                
                <div class="business-hours">
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 8:30 AM - 6:00 PM</p>
                  <p>Saturday: 8:30 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </el-card>
        </div>
      </div>
    </div>

    <!-- 页脚 -->
    <footer class="page-footer">
      <div class="container">
        <div class="footer-content">
          <p>© {{ new Date().getFullYear() }} {{ personalInfo.name }}. All rights reserved.</p>
          <div class="social-links">
            <i class="el-icon-share-alt social-icon"></i>
            <i class="el-icon-weixin social-icon"></i>
            <i class="el-icon-phone social-icon"></i>
            <i class="el-icon-email social-icon"></i>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* 基础样式与动画 */
.personal-homepage {
  background-color: #f5f7fa;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  scroll-behavior: smooth;
  opacity: 0;
  transition: opacity 0.8s ease;
}

.page-loaded .personal-homepage {
  opacity: 1;
}

/* 导航栏样式与交互 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 15px 0;
  background-color: transparent;
  transition: all 0.3s ease;
  z-index: 1000;
}

.navbar-scrolled {
  background-color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.navbar-scrolled .logo {
  color: #1890ff;
}

.logo i {
  margin-right: 8px;
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 25px;
}

.nav-links span {
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;
  position: relative;
  padding: 5px 0;
}

.navbar-scrolled .nav-links span {
  color: #333;
}

.nav-links span:hover {
  color: #42b983;
}

.nav-links span.active {
  color: #42b983;
}

.nav-links span.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #42b983;
  transform: scaleX(1);
  transition: transform 0.3s ease;
}

.nav-links span::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #42b983;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.nav-links span:hover::after {
  transform: scaleX(1);
}

/* 英雄区样式 */
.hero-section {
  background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
  padding: 180px 0 120px;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* 关键：覆盖容器，按比例缩放，超出部分裁剪 */
  background: url("/person/background.jpg"); 
  background-size: cover; 
  filter: blur(3px);  
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 20px;
  animation: fadeInUp 1s ease;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 30px;
  opacity: 0.9;
  animation: fadeInUp 1s ease 0.2s forwards;
  opacity: 0;
}

.hero-cta {
  display: flex;
  justify-content: center;
  gap: 15px;
  animation: fadeInUp 1s ease 0.4s forwards;
  opacity: 0;
}

.btn-animated {
  transition: all 0.3s ease;
  transform: translateY(0);
}

.btn-animated:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

/* 主要内容区域 - 上下结构 */
.main-content {
  padding: 60px 20px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

/* 上方区域 - 原左侧栏内容 */
.top-section {
  width: 100%;
}

.profile-card {
  width: 100%;
  overflow: hidden;   
  border-radius: 10px;
}

.profile-header {
  display: flex;
  align-items: flex-start;
  gap: 30px;
  padding: 30px;
}

.profile-image {
  width: 240px;
  height: 240px;
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
}

.profile-image:hover {
  transform: scale(1.05);  
}

.profile-info {
  flex: 1;
}

.profile-name {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #333;
}

.profile-occupation {
  color: #1890ff;
  margin-bottom: 20px;
  font-style: italic;
  font-weight: 500;
  font-size: 1.1rem;
}

.profile-details {
  margin-bottom: 25px;
}

.profile-details p {
  margin: 12px 0;
  color: #555;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;
  font-size: 1.05rem;
}

.profile-details p:hover {
  transform: translateX(5px);
}

.profile-details i {
  color: #1890ff;
  margin-right: 10px;
  width: 20px;
  text-align: center;
}

.contact-btn {
  background-color: #1890ff;
  border-color: #1890ff;
  transition: all 0.3s ease;
  padding: 10px 20px;
  font-size: 1rem;
}

.contact-btn:hover {
  background-color: #096dd9;
  border-color: #096dd9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(24, 144, 255, 0.3);
}

/* 统计数据 */
.stats-container {
  display: flex;
  justify-content: space-around;
  padding: 20px 30px;
  background-color: #f9fafb;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
}

.stat-card {
  background: transparent;
  border: none;
  box-shadow: none;
  text-align: center;
  padding: 10px;
  flex: 1;
}

.stat-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stat-icon {
  font-size: 2rem;
  color: #1890ff;
  margin-bottom: 10px;
  transition: transform 0.3s ease, color 0.3s ease;
}

.stat-card:hover .stat-icon {
  transform: scale(1.2) rotate(5deg);
  color: #096dd9;
}

.stat-value {
  font-size: 1.8rem;
  font-weight: bold;
  color: #333;
  margin: 0 0 5px 0;
  transition: transform 0.3s ease;
}

.stat-card:hover .stat-value {
  transform: translateY(-3px);
}

.stat-name {
  color: #666;
  margin: 0;
  font-size: 0.95rem;
}

/* 兴趣爱好 */
.hobbies-container {
  padding: 25px 30px;
}

.hobbies-container h3 {
  margin-top: 0;
  margin-bottom: 15px;
  color: #333;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}

.hobbies-container h3::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 16px;
  background-color: #1890ff;
  margin-right: 8px;
  border-radius: 2px;
}

.hobbies-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hobby-tag {
  font-size: 0.95rem;
  padding: 8px 15px;
  transition: all 0.3s ease;
  cursor: pointer;
  border-color: #e6f7ff;
  color: #1890ff;
}

.hobby-tag:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 4px 8px rgba(24, 144, 255, 0.2);
  background-color: #e6f7ff;
}

/* 下方区域 - 原右侧内容 */
.bottom-section {
  width: 100%;
}

.content-cards {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

/* 卡片基础样式 */
.el-card {
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: none;
}

.el-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(24, 144, 255, 0.15);
}

.el-card__header {
  background-color: #f5f7fa;
  border-bottom: 1px solid #eee;
  padding: 15px 20px;
}

.el-card__header h3 {
  margin: 0;
  color: #333;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}

.el-card__header h3::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 16px;
  background-color: #1890ff;
  margin-right: 8px;
  border-radius: 2px;
}

/* 技能进度条 */
.skills-card {
  padding: 20px;
}

.skill-item {
  margin-bottom: 20px;
  position: relative;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: #666;
  font-weight: 500;
}

.el-progress {
  transition: all 1s ease;
}

.el-progress-bar__outer {
  background-color: #e8f4ff;
  border-radius: 4px;
}

/* 项目展示 */
.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 25px;
  padding: 10px 0;
}

.project-card {
  overflow: hidden;
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.project-image-container {
  height: 200px;
  overflow: hidden;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image {
  transform: scale(1.1);
}

.project-info {
  padding: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  margin-top: 0;
  margin-bottom: 10px;
  color: #333;
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.project-card:hover .project-title {
  color: #1890ff;
}

.project-description {
  color: #666;
  margin-bottom: 15px;
  flex-grow: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}


.project-card:hover .project-overlay {
  opacity: 1;
  transform: translateY(0);
}

.view-details {
  transform: translateY(20px);
  transition: transform 0.3s ease 0.1s;
}

.project-card:hover .view-details {
  transform: translateY(0);
}

/* 时间线样式 */
.timeline-card {
  padding: 20px;
}

.el-timeline {
  padding: 10px 0;
}

.timeline-item {
  margin-bottom: 30px;
  position: relative;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-content {
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
}

.timeline-item:hover .timeline-content {
  border-left-color: #1890ff;
  transform: translateX(5px);
}

.timeline-item .el-timeline-item__timestamp {
  font-weight: 500;
  color: #1890ff;
}

.timeline-content h4 {
  margin-top: 0;
  margin-bottom: 5px;
  color: #333;
}

.timeline-content p {
  color: #666;
  margin-bottom: 0;
}

.el-timeline-item__node {
  background-color: #1890ff;
  border-color: #1890ff;
}

/* 联系表单 */
.contact-form-card {
  padding: 20px;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}







.contact-info h4 {
  margin-top: 0;
  margin-bottom: 20px;
  color: #333;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
}

.contact-info h4::before {
  content: '';
  display: inline-block;
  width: 4px;
  height: 16px;
  background-color: #1890ff;
  margin-right: 8px;
  border-radius: 2px;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
}

.contact-method {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 6px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.contact-method:hover {
  background-color: #f0f7ff;
  transform: translateX(5px);
}

.contact-icon {
  color: #1890ff;
  font-size: 1.5rem;
  margin-right: 15px;
  width: 24px;
  text-align: center;
}

.method-name {
  display: block;
  font-weight: 500;
  color: #333;
}

.method-content {
  color: #666;
  font-size: 0.9rem;
}

.business-hours {
  background-color: #f5f7fa;
  padding: 15px;
  border-radius: 8px;
}

.business-hours p {
  margin: 8px 0;
  color: #666;
}

/* 动画效果 */
.animate-on-scroll {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* 延迟动画效果，让元素依次出现 */
.animate-on-scroll:nth-child(1) { transition-delay: 0.1s; }
.animate-on-scroll:nth-child(2) { transition-delay: 0.2s; }
.animate-on-scroll:nth-child(3) { transition-delay: 0.3s; }
.animate-on-scroll:nth-child(4) { transition-delay: 0.4s; }
.animate-on-scroll:nth-child(5) { transition-delay: 0.5s; }

/* 动画关键帧 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* 响应式设计 */
@media (max-width: 992px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
  
  .contact-form-wrapper {
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }

  .nav-links {
    gap: 15px;
  }

  .projects-container {
    grid-template-columns: 1fr;
  }
  
  .profile-header {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
  }
  
  .profile-details {
    text-align: center;
  }
  
  .profile-details p {
    justify-content: center;
  }
  
  .stats-container {
    flex-wrap: wrap;
  }
  
  .stat-card {
    flex: 1 0 45%;
    margin-bottom: 15px;
  }
}

@media (max-width: 576px) {
  .navbar .container {
    flex-direction: column;
    gap: 10px;
  }

  .hero-section {
    padding: 150px 0 100px;
  }

  .hero-cta {
    flex-direction: column;
    align-items: center;
  }

  .hero-cta el-button {
    width: 100%;
  }

  .stats-container {
    flex-direction: column;
  }
  
  .stat-card {
    flex: 1 0 100%;
  }
  
  .nav-links {
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .nav-links span {
    font-size: 0.9rem;
  }
  
  .profile-image {
    width: 100%;
    max-width: 200px;
    height: auto;
  }
}
</style>
