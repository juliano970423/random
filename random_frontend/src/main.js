import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { ripple } from './animations'
import { loadSavedTheme } from './theme'


// 直接在路由配置中动态导入组件（懒加载）
const routes = [

  {
    path: '/:pathMatch(.*)/index.html',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    component: () => import('./views/HomeView.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('./views/SettingsView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  mode: 'history',
  routes
})

// 在应用启动时加载保存的主题
loadSavedTheme()

const app = createApp(App)
app.use(router)
app.directive('ripple', ripple) // 注册全局指令
app.mount('#app')