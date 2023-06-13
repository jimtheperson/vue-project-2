import { ref, type Ref, onBeforeMount } from 'vue'
import { defineStore } from 'pinia'
import { useRouter } from "vue-router";
import type IDGILocation from '../interfaces/IDGILocation'
import { useNavLinksStore } from "./NavLinksStore";
// import router from "../router/index";

export const useLocationStore = defineStore('locations', () => {
  const _locations: Ref<IDGILocation[]> = ref([
    {
      id: 'building1',
      title: 'Building1',
      address: 'Address1',
      floors: [
        {
          id: 'b1f1',
          title: 'Floor 1',
          rooms: [
            { id: 'b1f1rEntryOutdoors', title: 'Entry Exterior' },
            { id: 'b1f1rEntryMez', title: 'Mezzanine' },
            { id: 'b1f1rCorridors', title: 'Corridors' }
          ]
        },
        {
          id: 'b1f4',
          title: 'Floor 4',
          rooms: [
            { id: 'b1f4r1', title: 'Room 401' },
            { id: 'b1f4r2', title: 'Room 402' }
          ]
        },
        {
          id: 'b1f17',
          title: 'Floor 17',
          rooms: [
            { id: 'b1f17r1', title: 'Room 1701' },
            { id: 'b1f17r2', title: 'Room 1702' }
          ]
        },
        {
          id: 'b1f18',
          title: 'Floor 18',
          rooms: [
            { id: 'b1f18r1', title: 'Room 1801' },
            { id: 'b1f18r2', title: 'Room 1802' }
          ]
        },
        {
          id: 'b1f19',
          title: 'Floor 19',
          rooms: [
            { id: 'b1f19r1', title: 'Room 1901' },
            { id: 'b1f19r2', title: 'Room 1902' }
          ]
        },
        {
          id: 'b1f21',
          title: 'Floor 21',
          rooms: [
            { id: 'b1f21r1', title: 'Room 2101' },
            { id: 'b1f21r2', title: 'Room 2102' }
          ]
        }
      ],
      rooms: [{ id: 'presSuite', title: 'Presidential Suite' }]
    }
  ])
  const _isSelected: Ref<IDGILocation> = ref({
    id: '',
    title: ''
  })
  const _isActive: Ref<IDGILocation> = ref({
    id: '',
    title: ''
  })
  const _locationNavOpen = ref(false)
  const router = useRouter()

  onBeforeMount(() => {
    if (_isActive.value.id === '') {
      setActive(_locations.value[0])
    }
  })

  function closeLocationNav(timeout: number) {
    setTimeout(() => {
      _locationNavOpen.value = false
    }, timeout)
  }
  function setSelected(location: IDGILocation) {
    if (location !== undefined) {
      _isSelected.value = location
    }
    // closeLocationNav(200)
  }
  function setActive(location: IDGILocation) {
    if (location !== undefined) {
      _isActive.value = location
      router.push({ name: _isActive.value.id })
      setSelected({
        id: '',
        title: ''
      })
      useNavLinksStore().setAppBarTitle(location.title)
    }
    closeLocationNav(200)
  }

  return { _locations, _isSelected, _isActive, _locationNavOpen, setSelected, setActive }
})
