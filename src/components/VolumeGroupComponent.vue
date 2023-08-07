<template>
  <div class="barVolumeGroup">
    <v-text style="padding: 5px; background-color: rgba(0, 0, 0, 0.1); border-radius: 5px">
      {{ _vol.toFixed(0) }}
    </v-text>
    <v-slider style="width: 150px; margin: 0 15px 0 15px" v-model="_vol" hide-details="true" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const _vol = ref(0)
</script>
