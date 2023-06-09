import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type IDGILocation from '../interfaces/iDGILocation'

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
    ]
  )

  // const _buildingCount = ref(computed(() => _locations.value.buildings.length))
  // const _floorCount = ref(computed(() => null))
  const _isSelected: Ref<IDGILocation> = ref({
    id: '',
    title: '',
  })
  const _isActive: Ref<IDGILocation> = ref({
    id: '',
    title: '',
  })
  const _locationNavOpen = ref(false)
  
  // const _floorCount = ref(computed(() => _locations.value.buildings.forEach(floors => {
  //   floors = _locations.value.buildings.length
  // })))
  function closeLocationNav(timeout: number) {
    setTimeout(() => {
      _locationNavOpen.value = false
    }, timeout)
  }

  function setSelected(location: IDGILocation) {
    _isSelected.value = location
    closeLocationNav(200)
  }
  function setActive(location: IDGILocation) {
    _isActive.value = location
    setSelected(location)
    closeLocationNav(200)
  }
  
  // function setActive(id: string | number) {
  //   _locations.value.buildings.forEach((element) => {
  //     if (element.id === id) {
  //       element.isActive = true
  //     } else {
  //       element.isActive = false
  //     }
  //   })
  // }

  return { _locations, _isSelected, _isActive, _locationNavOpen, setSelected, setActive }
})
