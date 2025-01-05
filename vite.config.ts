import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: './',
  build:{
    outDir: 'docs', //指定输出路径
  },
  plugins: [vue()],
})
