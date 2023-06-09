<template>
  <v-slide-y-reverse-transition>
      <div class="buildingListGroup" v-for="building in _locations" :key="building.id">
        <div class="locationListItem">
          <div class="locationListItemPrepend" @click="_locationStore.setActive(building)">
            <v-icon v-if="_isActive.id === building.id" icon="mdi-check-circle" />
            <v-icon v-else icon="mdi-office-building" />
          </div>
          <div class="locationListItemText" @click="_locationStore.setActive(building)">
            <v-text style="font-size: 14pt">{{ building.title }}</v-text>
            <v-text style="font-size: 10pt">{{ building.address }}</v-text>
          </div>
          <div class="locationListItemAppend" @click="buildingExpand(building.id)">
            <v-icon v-if="_buildingExpand === building.id" icon="mdi-chevron-up" />
            <v-icon v-else icon="mdi-chevron-down" />
          </div>
        </div>
        <v-slide-y-reverse-transition>
          <div class="floorListGroup" v-if="_buildingExpand === building.id">
            <div v-for="floor in building.floors" :key="floor.id">
              <div class="locationListItem">
                <div class="locationListItemPrepend" @click="_locationStore.setActive(floor)">
                  <v-icon v-if="_isActive.id === floor.id" icon="mdi-check-circle" />
                  <v-icon v-else icon="mdi-floor-plan" />
                </div>
                <div class="locationListItemText" @click="_locationStore.setActive(floor)">
                  <v-text style="font-size: 14pt">{{ floor.title }}</v-text>
                </div>
                <div class="locationListItemAppend" @click="floorExpand(floor.id)">
                  <v-icon v-if="_floorExpand === floor.id" icon="mdi-chevron-up" />
                  <v-icon v-else icon="mdi-chevron-down" />
                </div>
              </div>
              <v-slide-y-reverse-transition>
                <div v-if="_floorExpand === floor.id" class="roomListGroup">
                  <div class="locationListItem" v-for="room in floor.rooms" :key="room.id">
                    <div class="locationListItemPrepend" @click="_locationStore.setActive(room)">
                      <v-icon v-if="_isActive.id === room.id" icon="mdi-check-circle" />
                      <v-icon v-else icon="mdi-door" />
                    </div>
                    <div class="locationListItemText" @click="_locationStore.setActive(room)">
                      <v-text style="font-size: 14pt">{{ room.title }}</v-text>
                    </div>
                  </div>
                </div>
              </v-slide-y-reverse-transition>
            </div>
          </div>
        </v-slide-y-reverse-transition>
      </div>
  </v-slide-y-reverse-transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useLocationStore } from '../stores/LocationStore'

const _locationStore = useLocationStore()
const { _locations, _isActive } = storeToRefs(_locationStore)
const _buildingExpand = ref('')
const _floorExpand = ref('')

function buildingExpand(id: string) {
  if (_buildingExpand.value != id) {
    _buildingExpand.value = id
  } else {
    _buildingExpand.value = ''
  }
}
function floorExpand(id: string) {
  if (_floorExpand.value != id) {
    _floorExpand.value = id
  } else {
    _floorExpand.value = ''
  }
}
</script>

<style>
.buildingListGroup {
  margin-left: 10px;
  padding-left: 15px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  border-left: 1px solid black;
  border-top-left-radius: 3px;
}
.floorListGroup {
  margin-left: 10px;
  padding-left: 15px;
  border-left: 1px solid black;
  border-top-left-radius: 3px;
}
.roomListGroup {
  margin-left: 10px;
  padding-left: 15px;
  border-left: 1px solid black;
  border-top-left-radius: 3px;
}
.locationListItem {
  margin-top: 10px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
}
.locationListItemText {
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  margin: 0 25px 0 15px;
}
</style>
