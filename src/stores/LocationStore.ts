import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type IDGILocation from '../interfaces/IDGILocation'
import { useNavLinksStore } from "./NavLinksStore";

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
            { id: 'b1f1r1', title: 'Room 101' },
            { id: 'b1f1r2', title: 'Room 102' }
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
        }
      ]
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

  function closeLocationNav(timeout: number) {
    setTimeout(() => {
      _locationNavOpen.value = false
    }, timeout)
  }
  function setSelected(location: IDGILocation) {
    if (location !== undefined) {
      _isSelected.value = location
    }
    closeLocationNav(200)
  }
  function setActive(location: IDGILocation) {
    if (location !== undefined) {
      _isActive.value = location
      setSelected(location)
      useNavLinksStore().setAppBarTitle(location.title)
    }
    closeLocationNav(200)
  }

  return { _locations, _isSelected, _isActive, _locationNavOpen, setSelected, setActive }
})
