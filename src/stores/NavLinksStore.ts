import { ref } from 'vue'
import { defineStore } from 'pinia'
// import router from "../router/index";
// import DGIWebSocket from '@/websocket/DGIWebSocket.vue'

// type NavLinks = {
//     name: string
//     title: string
//     icon: string
// }

export const useNavLinksStore = defineStore('navLinks', () => {
    const _links = ref([
        { name: 'home', title: 'Home', icon: 'mdi-home' },
        { name: 'about', title: 'My Account', icon: 'mdi-information' }
    ])
    const _sideNavOpen = ref(false)
    const _appBarTitle = ref('App Bar Title')
    // let links: NavLinks[]
    // async function getData() {

    // }
    // const links = ref([])
    // const loading = ref(false)

    // async function loadNavLinks() {
    //     loading.value = true
    //     links.value = await 
        
    // }
    //SideNav functions
    function openSideNav() {
        _sideNavOpen.value = true
    }
    function closeSideNav() {
        _sideNavOpen.value = false
    }
    function toggleSideNav() {
        _sideNavOpen.value = !_sideNavOpen.value
    }



    return {_links, _sideNavOpen, _appBarTitle, openSideNav, closeSideNav, toggleSideNav}
})

// TODO: Add route protection - redirect if not found