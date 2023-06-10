import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// import DGIWebSocket from '@/websocket/DGIWebSocket.vue'

// type NavLinks = {
//     name: string
//     title: string
//     icon: string
// }

export const useNavLinksStore = defineStore('navLinks', () => {
    const _links = ref([
        { name: 'home', title: 'Home', icon: 'mdi-home' },
        { name: 'location', title: 'Zones', icon: 'mdi-office-building' },
        { name: 'audioOutput', title: 'Listen', icon: 'mdi-speaker' },
        { name: 'videoOutput', title: 'View', icon: 'mdi-television' },
        { name: 'controls', title: 'Control', icon: 'mdi-gamepad' },
        { name: 'about', title: 'About', icon: 'mdi-information' }
    ])
    const _sideNavOpen = ref(false)
    const _appBarTitle = ref('App Bar Title')
    const _filteredLinks = ref(computed(() => _links.value.filter(link => link.name !== 'home')))

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
    function setAppBarTitle(title: string) {
        _appBarTitle.value = title
    }



    return {_links, _filteredLinks, _sideNavOpen, _appBarTitle, openSideNav, closeSideNav, toggleSideNav, setAppBarTitle}
})

// TODO: Add route protection - redirect if not found