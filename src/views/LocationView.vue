<template>
  <!-- <v-container>

  <v-layout>
    <v-navigation-drawer v-model="_locationNavOpen" location="left" floating permanent>
      <LocationListComponent />
    </v-navigation-drawer>
    <v-main style="height: 100%">
      <div>
        <LocationBuildingComponent />
      </div>
    </v-main>
  </v-layout>
  <v-btn
    icon="mdi-office-building-marker"
    style="margin-bottom: 10px"
    @click="_locationNavOpen = !_locationNavOpen"
  />
</v-container> -->
  <div class="locationNavWrapper">
    <v-card>
      <v-slide-y-reverse-transition>
        <v-container v-if="_locationNavOpen">
          <LocationListComponent />
        </v-container>
      </v-slide-y-reverse-transition>
      <v-card-actions @click="_locationNavOpen = !_locationNavOpen">
        <v-icon icon="mdi-office-building-marker" />
        <v-card-subtitle>Zone List</v-card-subtitle>
      </v-card-actions>
    </v-card>
  </div>
  <div>
    <!-- <div class="contentRowWrapper"> -->
    <LocationBuildingComponent />
    <!-- <LocationRoomComponent /> -->
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useLocationStore } from '../stores/LocationStore'
import LocationListComponent from '../components/LocationListComponent.vue'
import LocationBuildingComponent from '../components/LocationBuildingComponent.vue'
// import LocationRoomComponent from '../components/LocationRoomComponent.vue'

const _locationStore = useLocationStore()
const { _locationNavOpen } = storeToRefs(_locationStore)
</script>

<style>
.locationNavWrapper {
  height: 80%;
  width: fit-content;
  position: fixed;
  padding-left: 50px;
  z-index: 1000;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
}
</style>
