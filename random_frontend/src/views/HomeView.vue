<script setup>
import { ref } from 'vue'

// 响应式数据
const newItem = ref('')
const items = ref([])
const selectedItemCount = ref(1)
const selectedItems = ref([]) // 添加这行定义


// 添加新项目
const addItem = () => {
    if (newItem.value.trim() !== '') {
        items.value.push(newItem.value.trim())
        newItem.value = ''
    }
}

// 删除项目
const removeItem = (index) => {
    items.value.splice(index, 1)
}

// 处理键盘事件
const handleKeydown = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault() // 防止默认行为（如换行）
        addItem()
    }
}
// 增加选择数量
const increaseCount = () => {
    // 不能超过项目总数
    if (selectedItemCount.value < items.value.length || items.value.length === 0) {
        selectedItemCount.value++
    }
}

// 减少选择数量
const decreaseCount = () => {
    if (selectedItemCount.value > 1) {
        selectedItemCount.value--
    }
}
// 随机选择项目
const randomSelect = () => {
    if (items.value.length === 0) return

    // 如果选择数量超过项目总数，则调整为项目总数
    const count = Math.min(selectedItemCount.value, items.value.length)

    // 创建项目数组副本并打乱
    const shuffled = [...items.value].sort(() => 0.5 - Math.random())

    // 选择前count个项目
    selectedItems.value = shuffled.slice(0, count)
}
</script>

<template>
    <div class="flex-grow pb-24">
        <header class="sticky top-0 bg-[var(--md-sys-color-surface)] z-10">
            <div class="flex items-center justify-between p-4">
                <h1 class="text-xl font-medium leading-tight tracking-tight text-[var(--md-sys-color-on-surface)]">隨機選擇器
                </h1>
            </div>
        </header>
        <main class="p-4 space-y-6">
            <div class="relative">
                <input v-model="newItem" @keydown="handleKeydown" @blur="addItem" class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl border
                border-[var(--md-sys-color-outline)] bg-[var(--md-sys-color-surface-variant)]
                focus:border-[var(--md-sys-color-primary)] focus:ring-2 focus:ring-[var(--md-sys-color-primary)]/20 h-14
                placeholder:text-[var(--md-sys-color-on-surface-variant)] px-4 pl-12 text-base font-normal
                leading-normal" placeholder="新增一個項目..." enterkeyhint="done" />
                <span
                    class="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[var(--md-sys-color-on-surface-variant)]">add</span>
            </div>
            <div class="space-y-2">
                <div v-for="(item, index) in items" :key="index"
                    class="flex items-center justify-between gap-4 p-4 rounded-2xl bg-[var(--md-sys-color-surface-container)] text-[var(--md-sys-color-on-surface-container)]">
                    <span class="text-sm font-medium">{{ item }}</span>
                    <button @click="removeItem(index)"
                        class="ripple-effect p-2 rounded-full text-[var(--md-sys-color-on-surface-variant)] [--ripple-color:var(--md-sys-color-on-surface-variant-rgb)] relative overflow-hidden">
                        <span class="material-symbols-outlined text-xl">delete</span>
                    </button>
                </div>
            </div>
            <div class="rounded-2xl border border-[var(--md-sys-color-outline)] p-4 space-y-4">
                <label class="block text-sm font-medium text-[var(--md-sys-color-on-surface-variant)]"
                    for="item-count">要選擇的項目數</label>
                <div class="flex items-center gap-4">
                    <button @click="decreaseCount"
                        class="ripple-effect flex h-10 w-10 items-center justify-center rounded-full border border-[var(--md-sys-color-outline)] text-[var(--md-sys-color-primary)] [--ripple-color:var(--md-sys-color-primary-rgb)]">
                        <span class="material-symbols-outlined">remove</span>
                    </button>
                    <input
                        class="w-full text-center text-lg font-bold text-[var(--md-sys-color-primary)] bg-transparent border-0 focus:ring-0 p-0"
                        id="item-count" type="text" v-model="selectedItemCount" readonly />
                    <button @click="increaseCount"
                        class="ripple-effect flex h-10 w-10 items-center justify-center rounded-full border border-[var(--md-sys-color-outline)] text-[var(--md-sys-color-primary)] [--ripple-color:var(--md-sys-color-primary-rgb)]">
                        <span class="material-symbols-outlined">add</span>
                    </button>
                </div>
            </div><button @click="randomSelect"
                class="ripple-effect w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-[var(--md-sys-color-primary)] text-[var(--md-sys-color-on-primary)] text-sm font-medium leading-normal tracking-wide shadow-lg shadow-[var(--md-sys-color-primary)]/20 hover:shadow-xl hover:shadow-[var(--md-sys-color-primary)]/30 transition-shadow [--ripple-color:var(--md-sys-color-on-primary-rgb)]">
                <span class="truncate">隨機選擇</span>
            </button>
            <div class="space-y-2">
                <div v-if="selectedItems.length > 0"
                    class="bg-[var(--md-sys-color-tertiary-container)] rounded-2xl p-4 text-center text-[var(--md-sys-color-on-tertiary-container)]">
                    <p class="text-base font-medium">您的幸運項目是...</p>
                    <p v-for="(item, index) in selectedItems" :key="index" class="text-xl font-bold mt-1">{{ item }}</p>
                </div>
            </div>
        </main>
    </div>
</template>

<style scoped></style>
