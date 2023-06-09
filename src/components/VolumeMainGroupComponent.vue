<template>
  <div class="barVolumeGroup">
    <v-text style="padding: 5px; background-color: rgba(0, 0, 0, 0.1); border-radius: 5px">
      {{ _volMain.toFixed(0) }}
    </v-text>
    <v-slider style="width: 150px; margin: 0 15px 0 15px" v-model="_volMain" hide-details="true" />
    <v-btn icon="mdi-tune-vertical" />
    <v-btn icon="mdi-microphone-settings" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const _volMain = ref(0)
</script>

<style>
.barVolumeGroup {
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
</style>
