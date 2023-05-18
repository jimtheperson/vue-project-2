import { ref } from 'vue'
import { defineStore } from 'pinia'
// import DGIWebSocket from '@/websocket/DGIWebSocket.vue'

// type NavLinks = {
//     name: string
//     title: string
//     icon: string
// }

export const useNavLinksStore = defineStore('navLinks', () => {
    const links = ref([
        { name: 'home', title: 'Home', icon: 'mdi-home' },
        { name: 'about', title: 'My Account', icon: 'mdi-information' }
    ])
    // let links: NavLinks[]
    // async function getData() {

    // }
    // const links = ref([])
    // const loading = ref(false)

    // async function loadNavLinks() {
    //     loading.value = true
    //     links.value = await 
        
    // }

    return {links}
})

// TODO: Add route protection - redirect if not found