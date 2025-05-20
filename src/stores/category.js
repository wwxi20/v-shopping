import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

export const useCategoryStore = defineStore('category', () => {
    //state 导航数据
    const categoryList = ref([])

    //action 方法
    const getCategory = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res.data.result
    }
    return {
        categoryList,
        getCategory
    }
})
