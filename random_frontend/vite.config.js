import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
   server: {
    host: '0.0.0.0',        // 绑定到所有网络接口
    port: 3000,             // 指定端口
    strictPort: true,       // 如果端口被占用则退出
    open: true,             // 启动时自动打开浏览器
  },
})
