import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useViewStore = defineStore('view', () => {
    const views = ref([
        { name: 'home', title: 'Home', icon: 'mdi-home' },
        { name: 'about', title: 'My Account', icon: 'mdi-information' }
    ])

    return {views}
})

// TODO: Add route protection - redirect if not found