<template>
  <v-alert
    v-if="websocketAlert"
    type="error"
    title="System disconnected"
    text="This interface has lost communication with the server. Please, ensure the correct host and port are defined, then try again."
  />
  <v-alert
    v-else
    type="success"
    title="System connected"
    text="Please wait, this interface will automatically refresh..."
  />
  <v-form @submit.prevent>
    <v-text-field v-model="host" label="Host"></v-text-field>
    <v-text-field v-model="port" label="Port"></v-text-field>
    <v-btn type="submit" block class="mt-2" @click="connect">Connect</v-btn>
    <!-- <v-btn type="submit" block class="mt-2" @click="request">Request</v-btn> -->
  </v-form>
</template>

<script setup lang="ts">
import { useWebsocketStore } from '../stores/WebsocketStore'
import { storeToRefs } from 'pinia'

const websocketStore = useWebsocketStore()
const { host, port, websocketAlert } = storeToRefs(websocketStore)

function connect() {
  websocketStore.websocketConnect()
}
</script>
