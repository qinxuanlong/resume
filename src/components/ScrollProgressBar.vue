<template>
  <div class="progress-bar" :style="{ width: progress + '%' }"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      progress: 0,
    };
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // 计算滚动百分比
      this.progress = (scrollPosition / (documentHeight - windowHeight)) * 100;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
});
</script>

<style scoped>
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 5px;
  background-color: #4caf50;
  transition: width 0.1s;
  z-index: 10000;
}
</style>