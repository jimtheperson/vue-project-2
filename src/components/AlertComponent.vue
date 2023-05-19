<template>
  <v-alert
    v-for="alert in _alerts"
    :key="alert.id"
    :type="alert.type"
    :icon="alert.icon"
    :closable="alert.closable"
    :title="alert.title"
    :text="alert.text"
  />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useAlertStore } from '../stores/AlertStore'

const { _alerts } = storeToRefs(useAlertStore())
</script>
