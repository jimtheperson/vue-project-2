<template>
  <div class="locationNavWrapper">
    <v-card elevation="4">
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
    <!-- <LocationBuildingComponent /> -->
    <!-- <LocationRoomComponent /> -->
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import { storeToRefs } from 'pinia'
import router from "../router/index";
import { useLocationStore } from '../stores/LocationStore'
import LocationListComponent from '../components/LocationListComponent.vue'
// import LocationBuildingComponent from '../components/LocationBuildingComponent.vue'
// import LocationRoomComponent from '../components/LocationRoomComponent.vue'

const _locationStore = useLocationStore()
const { _locationNavOpen, _isActive } = storeToRefs(_locationStore)

onBeforeMount(() => {
  router.push({ name: _isActive.value.id })
})
</script>

<style>
.locationNavWrapper {
  height: fit-content;
  width: fit-content;
  position: fixed;
  bottom: 20px;
  left: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
}
</style>
