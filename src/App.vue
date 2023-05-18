<template>
  <v-app>
    <v-main>
      <!-- <v-alert v-for="alert in alerts" :key="alerts.indexOf(alert)" :type="alert.type"/> -->
      <SideNavView v-if="websocketConnected" />
      <ConnectView v-else />
      <!-- <ConnectView /> -->
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from 'pinia'
import { useWebsocketStore } from './stores/WebsocketStore'
import SideNavView from './views/SideNavView.vue'
import ConnectView from './views/ConnectView.vue'

const { websocketConnected } = storeToRefs(useWebsocketStore())
const alerts = ref([{
  type: '',
  icon: '',
  closable: false,
  title: '',
  text: ''
}])

</script>
