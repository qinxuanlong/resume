<template>
  <div class="home-container">
    <!-- 头部信息 -->
    <div class="header-section" data-anim="fade-up">
      <div class="avatar-wrap">
        <img 
          src="/images/avatar.webp" 
          alt="秦玄龙" 
          class="avatar"
          @mouseover="hoverAvatar"
          @mouseleave="unhoverAvatar"
        >
        <div 
          class="avatar-glow" 
          :class="{ active: avatarHover }"
        ></div>
      </div>
      <h1 class="name" data-anim="fade-right">秦玄龙</h1>
      <p class="title" data-anim="fade-left">Web前端开发工程师</p>
      <div class="contact" data-anim="fade-up">
        <span>📱 15956793981</span>
        <span>📧 1470681411@qq.com</span>
        <a href="#案例展示" target="_blank">🌐 技术博客</a>
      </div>
    </div>

    <!-- 专业技能 -->
    <div class="section skills" data-anim="fade-up">
      <h2>专业技能</h2>
      <div class="skill-group">
        <div class="skill-category">
          <h3>Vue技术栈</h3>
          <p>精通Vue3响应式原理与Composition API<br>熟练应用Vue Router路由守卫与Vuex/Pinia<br>实战：日均10万+订单财税SaaS平台开发</p>
        </div>
        <div class="skill-category">
          <h3>React技术栈</h3>
          <p>熟练React Hooks + Redux Toolkit<br>掌握Fiber架构与性能优化<br>案例：企业级中后台管理系统架构</p>
        </div>
        <div class="skill-category">
          <h3>架构能力</h3>
          <p>主导MicroApp微前端方案（效率↑60%）<br>Uni-app跨端开发（代码复用85%+）<br>Node.js服务开发（Express/Koa）</p>
        </div>
        <div class="skill-category">
          <h3>性能优化</h3>
          <p>Web Worker分流（阻塞↓70%）<br>IndexedDB分级缓存设计<br>Nginx反向代理与PM2进程管理</p>
        </div>
      </div>
    </div>

    <!-- 案例展示 -->
    <div class="section projects">
      <h2 data-anim="fade-up">案例展示</h2>
      <div 
        v-for="project in projects" 
        :key="project.id" 
        class="project-card"
        :data-speed="project.speed"
      >
        <div class="project-cover" :style="{ backgroundImage: `url(${project.cover})` }"></div>
        <div class="project-info">
          <h3>{{ project.title }}</h3>
          <p class="desc">{{ project.desc }}</p>
          <div class="project-links">
            <a :href="project.link" target="_blank">访问链接</a>
          </div>
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- 工作经历 -->
    <div class="section experience" data-anim="fade-up">
      <h2>工作经历</h2>
      <div class="timeline">
        <div class="timeline-item" v-for="exp in experiences" :key="exp.time">
          <div class="timeline-time">{{ exp.time }}</div>
          <div class="timeline-content">
            <h3>{{ exp.company }}</h3>
            <p class="position">{{ exp.position }}</p>
            <ul>
              <li v-for="detail in exp.details" :key="detail">{{ detail }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 动画状态
const avatarHover = ref(false);

// 案例数据（根据简历调整）
const projects = ref([{
  id: 1,
  title: "数字人直播系统",
  desc: "Vue3+WebSocket+TTS语音合成技术实现的数字人直播解决方案",
  tags: ['Vue3', 'WebSocket', 'TTS'],
  cover: '/images/p1.png',
  link: "https://web.dingshuimao.com/",
  speed: 0.8
}, {
  id: 2,
  title: "水利数字孪生平台",
  desc: "Mars3D+ECharts 3D可视化实现的水利监测与分析系统",
  tags: ['Mars3D', 'ECharts', '3D可视化'],
  cover: '/images/p1.png',
  link: "https://djb.dingshuimao.com/",
  speed: 0.6
}, {
  id: 3,
  title: "智能直播控制台",
  desc: "微前端+Web Worker优化的直播管理控制台",
  tags: ['微前端', 'Web Worker', '性能优化'],
  cover: '/images/p1.png',
  link: "https://zb.magicpensoft.com/",
  speed: 0.7
}]);

// 工作经历数据
const experiences = ref([{
  time: "2023.08-2024.11",
  company: "南京神笔科技有限公司",
  position: "前端开发负责人",
  details: [
    "主导数字人直播系统开发（文字转语音延迟<200ms；3D渲染效率↑30%）",
    "水利数字孪生项目：集成Mars3D实现水位监测可视化；开发10万+数据点分析模块"
  ]
}, {
  time: "2021.07-2023.03",
  company: "南京鼎航数据科技有限公司",
  position: "高级Web前端工程师",
  details: [
    "财税SaaS平台核心开发（Vue3+ElementUI；虚拟滚动优化加载速度5s→1s）",
    "主导前端工程化建设（构建效率↑50%）"
  ]
}]);

// 头像交互动画
const hoverAvatar = () => avatarHover.value = true;
const unhoverAvatar = () => avatarHover.value = false;

// 滚动动画初始化
onMounted(() => {
  // 入场动画
//   const animateElements = document.querySelectorAll('[data-anim]');
//   animateElements.forEach((el:any) => {
 
//     el.style.opacity = '0';
//     setTimeout(() => {
//       el.style.opacity = '1';
//       el.classList.add('animated', el.dataset.anim!);
//     }, 100 * Array.from(animateElements).indexOf(el));
//   });

  // 视差滚动
//   window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     document.querySelectorAll('.project-card').forEach((el: any) => {
//       const speed = parseFloat(el.dataset.speed || '1');
//       el.style.transform = `translateY(${scrolled * speed}px)`;
//     });
//   });
});
</script>

<style lang="scss" scoped>
$primary-color: #646cff;
$anim-duration: 0.6s;

.home-container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 2rem;

  // 头部区域动画
  .header-section {
    text-align: center;
    margin-bottom: 6rem;

    .avatar-wrap {
      position: relative;
      display: inline-block;
      margin-bottom: 2rem;

      .avatar {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid #fff;
        box-shadow: 0 8px 24px rgba(100, 108, 255, 0.15);
        transition: transform $anim-duration ease;
      }

      .avatar-glow {
        position: absolute;
        top: -10%;
        left: -10%;
        width: 120%;
        height: 120%;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(100,108,255,0.3) 0%, rgba(255,255,255,0) 70%);
        opacity: 0;
        transition: opacity $anim-duration ease;
        &.active { opacity: 1; }
      }
    }

    .name {
      font-size: 3.5rem;
      background: linear-gradient(45deg, $primary-color, #42b883);
      -webkit-background-clip: text;
      color: transparent;
      margin-bottom: 1rem;
    }

    .title {
      font-size: 1.5rem;
      color: #4b5563;
      letter-spacing: 1px;
    }
  }

  // 技能标签动画
  .skills {
    margin-bottom: 6rem;

    .skill-group {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-top: 2rem;

      .skill-category {
        background: #f8f9fa;
        padding: 1.5rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(100,108,255,0.1);

        h3 {
          color: $primary-color;
          margin-bottom: 0.8rem;
        }

        p {
          color: #4b5563;
          line-height: 1.6;
          font-size: 0.95rem;
        }
      }
    }
  }

  // 项目卡片动画
  .projects {
    .project-card {
      position: relative;
      height: 400px;
      background: #fff;
      border-radius: 20px;
      margin: 3rem 0;
      overflow: hidden;
      box-shadow: 0 12px 32px rgba(100, 108, 255, 0.1);
      transition: transform $anim-duration ease;

      .project-cover {
        width: 100%;
        height: 100%;
        background-size: cover;
        background-position: center;
        filter: blur(0);
        transition: filter $anim-duration ease;
      }

      .project-info {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 2rem;
        background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
        color: white;

        .desc {
          margin: 0.5rem 0 1rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .project-links {
          margin: 0.8rem 0;

          a {
            color: #646cff;
            text-decoration: none;
            font-size: 0.9rem;
            &:hover { text-decoration: underline; }
          }
        }

        .project-tags {
          display: flex;
          gap: 0.5rem;
          font-size: 0.9rem;

          span {
            background: rgba(255,255,255,0.1);
            padding: 0.3rem 0.8rem;
            border-radius: 50px;
          }
        }
      }

      &:hover {
        .project-cover { filter: blur(2px); }
      }
    }
  }

  // 工作经历时间线
  .experience {
    .timeline {
      margin-top: 2rem;

      .timeline-item {
        display: flex;
        gap: 2rem;
        margin-bottom: 2.5rem;

        .timeline-time {
          flex-shrink: 0;
          color: $primary-color;
          font-weight: 500;
          width: 120px;
        }

        .timeline-content {
          flex: 1;

          .position {
            color: #6b7280;
            font-size: 0.95rem;
            margin: 0.3rem 0 0.8rem;
          }

          ul {
            padding-left: 1.2rem;
            li {
              color: #4b5563;
              line-height: 1.6;
              margin-bottom: 0.5rem;
            }
          }
        }
      }
    }
  }
}

// 通用动画类
.animated {
  &.fade-up { animation: fadeUp $anim-duration ease-out forwards; }
  &.fade-right { animation: fadeRight $anim-duration ease-out forwards; }
  &.fade-left { animation: fadeLeft $anim-duration ease-out forwards; }
}

@keyframes fadeUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes fadeRight {
  from { transform: translateX(-30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@keyframes fadeLeft {
  from { transform: translateX(30px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

@media (max-width: 768px) {
  .home-container { padding: 2rem 1rem; }
  .header-section .name { font-size: 2.5rem; }
  .project-card { height: 300px; }
  .timeline-item {
    flex-direction: column;
    gap: 1rem;
  }
}
</style>