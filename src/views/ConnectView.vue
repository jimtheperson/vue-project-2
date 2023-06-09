<template>
  <v-form @submit.prevent>
    <v-text-field v-model="_host" :disabled="_websocketConnecting" label="Host"></v-text-field>
    <v-text-field v-model="_port" :disabled="_websocketConnecting" label="Port"></v-text-field>
    <v-btn
      type="submit"
      block
      class="mt-2"
      :disabled="_websocketConnecting"
      :loading="_websocketConnecting"
      @click="connect"
      >Connect
    </v-btn>
    <v-btn
      v-if="_websocketConnecting"
      type="cancel"
      block
      class="mt-2"
      :loading="_websocketCanceling"
      @click="_websocketCanceling = true"
      >Cancel
    </v-btn>
  </v-form>
</template>

<script setup lang="ts">
import { useWebsocketStore } from '../stores/WebsocketStore'
import { storeToRefs } from 'pinia'

const _websocketStore = useWebsocketStore()
const { _host, _port, _websocketConnecting, _websocketCanceling } = storeToRefs(_websocketStore)

function connect() {
  _websocketStore.websocketConnect()
}
function connectCancel() {
  _websocketStore.websocketCancel()
}
</script>
