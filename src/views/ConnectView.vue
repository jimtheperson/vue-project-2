<template>
  <v-form @submit.prevent>
    <v-text-field v-model="_host" label="Host"></v-text-field>
    <v-text-field v-model="_port" label="Port"></v-text-field>
    <v-btn type="submit" block class="mt-2" @click="connect">Connect</v-btn>
    <!-- <v-btn type="submit" block class="mt-2" @click="request">Request</v-btn> -->
  </v-form>
</template>

<script setup lang="ts">
import { useWebsocketStore } from '../stores/WebsocketStore'
import { storeToRefs } from 'pinia'

const _websocketStore = useWebsocketStore()
const { _host, _port } = storeToRefs(_websocketStore)

function connect() {
  _websocketStore.websocketConnect()
}
</script>
