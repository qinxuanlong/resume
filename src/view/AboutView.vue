<template>
  <div class="parallax-container">
    <!-- 背景层 -->
    <div 
      class="parallax-layer background"
      :style="{ transform: `translateY(${scrollY * 0.3}px)` }"
    ></div>

    <!-- 内容层 -->
    <div 
      class="parallax-layer content"
      :style="{ transform: `translateY(${scrollY * 0.8}px)` }"
    >
      <h1>视差滚动效果</h1>
      <p v-for="i in 20" :key="i">滚动内容区块 {{i}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return { scrollY: 0 }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.scrollY = window.pageYOffset || document.documentElement.scrollTop
    }
  }
});
</script>

<style scoped>
.parallax-container {
  height: 100vh;
  overflow-y: auto;
  position: relative;
}

.parallax-layer {
  position: absolute;
  width: 100%;
  min-height: 200vh;
  transition: transform 0.1s linear;
  will-change: transform; /* 启用GPU加速 */
}

.background {
  background: url('bg.jpg') center/cover;
  z-index: 1;
}

.content {
  z-index: 2;
  background: rgba(255,255,255,0.9);
  padding: 2rem;
}
</style>