<template>
  <v-app>
    <v-main>
      <AlertComponent v-if="_count" />
      <SideNavView v-if="_websocketConnected" />
      <ConnectView v-else />
      <!-- <ConnectView /> -->
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useWebsocketStore } from './stores/WebsocketStore'
import { useAlertStore } from './stores/AlertStore'
import SideNavView from './views/SideNavView.vue'
import ConnectView from './views/ConnectView.vue'
import AlertComponent from './components/AlertComponent.vue'
const { _websocketConnected } = storeToRefs(useWebsocketStore())
const { _count } = storeToRefs(useAlertStore())
</script>
