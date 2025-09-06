<script setup>

import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// 计算当前路由名称
const currentRouteName = computed(() => {
  return route.name
})
</script>

<template>
  <div class="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">

    <router-view />

    <footer
      class="fixed bottom-0 left-0 right-0 bg-[var(--md-sys-color-surface-container-high)] shadow-[var(--md-ref-elevation-level-2)] z-10">
      <div class="flex h-20 items-center justify-around">
        <button @click="$router.push('/')" v-ripple
          class=" flex flex-col items-center gap-1 text-[var(--md-sys-color-on-surface-variant)] [--ripple-color:var(--md-sys-color-on-surface-variant-rgb)] rounded-lg px-3 py-2">

          <div class="relative flex h-8 w-16 items-center justify-center rounded-full overflow-hidden"
          :class="currentRouteName === 'home' 
              ? 'bg-[var(--md-sys-color-secondary-container)]':''">
            <span class="material-symbols-outlined z-10">casino</span>
          </div>
          <span class="text-xs font-medium tracking-wide">隨機選擇</span>
        </button>
        <button @click="$router.push('/settings')" v-ripple
          class="flex flex-col items-center gap-1 text-[var(--md-sys-color-on-secondary-container)] [--ripple-color:var(--md-sys-color-on-secondary-container-rgb)] rounded-lg px-3 py-2"
          >
          <div
            class="relative flex h-8 w-16 items-center justify-center rounded-full overflow-hidden"
            :class="currentRouteName === 'settings' 
              ? 'bg-[var(--md-sys-color-secondary-container)]':''">
            <span class="material-symbols-outlined fill z-10">settings</span>
          </div>
          <span class="text-xs font-medium tracking-wide">設定</span>
        </button>
      </div>
    </footer>
  </div>

</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
