<template>
  <DGIWebSocket />
  <v-app>
    <v-main>
      <SideNavView />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import SideNavView from './views/SideNavView.vue'
import DGIWebSocket from './websocket/DGIWebSocket.vue'
</script>
