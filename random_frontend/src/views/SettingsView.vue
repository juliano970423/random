<script setup>
import { ref, onMounted } from 'vue'
import { themes, applyTheme } from '../theme'

// 当前选中的主题索引
const selectedThemeIndex = ref(0)

// 页面加载时设置当前选中主题
onMounted(() => {
  const savedTheme = localStorage.getItem('selectedTheme')
  if (savedTheme !== null) {
    const index = parseInt(savedTheme)
    if (index >= 0 && index < themes.length) {
      selectedThemeIndex.value = index
    }
  }
})

// 应用并保存主题
const selectAndApplyTheme = (index) => {
  applyTheme(index)
  selectedThemeIndex.value = index
}
</script>

<template>
    <div class="flex-grow pb-24">
        <header class="sticky top-0 bg-[var(--md-sys-color-surface)] z-10">
            <div class="flex items-center justify-between p-4">
                <h1 class="text-xl font-medium leading-tight tracking-tight text-[var(--md-sys-color-on-surface)]">設定
                </h1>
            </div>
        </header>
        <main class="p-4 space-y-6">
            <div>
                <h2 class="text-sm font-medium text-[var(--md-sys-color-primary)] px-4 mb-3">預設主題色</h2>
                <div class="grid grid-cols-3 gap-x-4 gap-y-6">
                    <div 
                        v-for="(theme, index) in themes" 
                        :key="index"
                        class="flex flex-col items-center gap-2"
                        @click="selectAndApplyTheme(index)"
                    >
                        <button
                            class="w-16 h-16 rounded-full relative overflow-hidden shadow-md cursor-pointer transition-all duration-200"
                            :class="{
                                'ring-2 ring-offset-2 ring-offset-[var(--md-sys-color-background)] ring-[var(--md-sys-color-primary)] scale-105': selectedThemeIndex === index
                            }"
                        >
                            <div class="absolute top-0 left-0 w-full h-1/2" :style="{ backgroundColor: theme.primary }"></div>
                            <div class="absolute bottom-0 left-0 w-full h-1/2" :style="{ backgroundColor: theme.primaryContainer }"></div>
                        </button>
                        <span class="text-xs text-[var(--md-sys-color-on-surface-variant)]">{{ theme.name }}</span>
                    </div>
                </div>
            </div>
            <div class="space-y-4">
                <h2 class="text-sm font-medium text-[var(--md-sys-color-primary)] px-4">預覽</h2>
                <div
                    class="bg-[var(--md-sys-color-surface)] rounded-2xl p-4 border border-[var(--md-sys-color-outline)]/50">
                    <div class="space-y-4">
                        <div class="relative">
                            <input
                                class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border border-[var(--md-sys-color-outline)] bg-[var(--md-sys-color-surface-variant)] focus:border-[var(--md-sys-color-primary)] focus:ring-2 focus:ring-[var(--md-sys-color-primary)]/20 h-14 placeholder:text-[var(--md-sys-color-on-surface-variant)] px-4 pl-12 text-base font-normal leading-normal"
                                placeholder="新增一個項目..." value="" />
                            <span
                                class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[var(--md-sys-color-on-surface-variant)]">add</span>
                        </div>
                        <div
                            class="flex items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface-container)]">
                            <span class="text-sm font-medium">範例項目</span>
                            <button v-ripple
                                class=" p-2 rounded-full text-[var(--md-sys-color-on-surface-variant)] [--ripple-color:var(--md-sys-color-on-surface-variant-rgb)] relative overflow-hidden">
                                <span class="material-symbols-outlined text-xl">delete</span>
                            </button>
                        </div>
                        <button v-ripple
                            class=" w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-sm font-medium leading-normal tracking-wide shadow-lg shadow-[var(--md-sys-color-primary)]/20 hover:shadow-xl hover:shadow-[var(--md-sys-color-primary)]/30 transition-shadow [--ripple-color:var(--md-sys-color-on-primary-rgb)]">
                            <span class="truncate">隨機選擇</span>
                        </button>
                        <div
                            class="bg-[var(--md-sys-color-tertiary-container)] rounded-2xl p-4 text-center text-[var(--md-sys-color-on-tertiary-container)]">
                            <p class="text-base font-medium">您的幸運項目是...</p>
                            <p class="text-xl font-bold mt-1">範例項目</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped></style>