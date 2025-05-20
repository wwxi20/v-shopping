<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

import { useCategoryStore } from '@/stores/category';
import { onMounted } from 'vue';
const categoryStore = useCategoryStore()

onMounted(() => categoryStore.getCategory())
</script>

<template>
    <LayoutNav />
    <LayoutHeader />
    <!-- 添加key 破坏复用机制 强制销毁重建 -->
    <RouterView :key="$route.fullPath" />
    <LayoutFooter />
    <LayoutFixed />
</template>